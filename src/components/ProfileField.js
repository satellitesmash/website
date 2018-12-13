import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import characterOptions from './CharacterOptions';
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';

class ProfileField extends Component {

	constructor() {
		super();
		this.state = {
			ready: false,
			tag: null,
			email: null,
			profilePic: null,
			region: null,
			bio: '',
			twitter: '',
			confirm: null,
			error: null
		}
	}

	componentDidMount() {
		this.userRef = firebase.database().ref('userData').child(this.props.id).child('data');
		let fromDB;
		this.userRef.on("value", (snapshot) => {
			fromDB = snapshot.val();
			this.setState({
				tag: this.props.tag,
				photoURL: this.props.photoURL,
				email: this.props.email,
				bio: fromDB.bio,
				region: fromDB.region,
				twitter: fromDB.twitter,
				main: fromDB.main,
				ready: true
			});
		})
	}

	updateInformation = () => {
		let user = firebase.auth().currentUser;
		// if (this.state.email !== this.props.email) {
		// 	user.updateEmail(this.state.email).then((user)=> console.log(user));
		// }
		let updateInfo = {};
		if (this.state.tag !== this.props.displayName) {
			updateInfo.displayName = this.state.tag;
		}
		let data = {
			bio: this.state.bio,
			region: this.state.region,
			displayName: this.state.tag,
			twitter: this.state.twitter,
			main: this.state.main,
			secondary: this.state.secondary
		}
		this.userRef.set(data)
			.then(() => {
				if (this.state.profilePic) {
					let profilePic = firebase.storage().ref(`images/${user.uid}.jpg`);
					profilePic.put(this.state.profilePic).then((snapshot) => {
						snapshot.ref.getDownloadURL().then((url) => {
							updateInfo.photoURL = url;
							user.updateProfile(
								updateInfo
							).then(() => {
								this.setState({ confirm: "Information successfully updated!", photoURL: updateInfo.photoURL });
							});
						});
					})
				} else {
					user.updateProfile(
						updateInfo
					).then(() => this.setState({ confirm: "Information successfully updated!" }));
				}
			})
			.catch((err) => this.setState({ error: err.message }));
	}

	updateValue = (name, value) => {
		this.setState({
			[name]: value
		})
	}

	render() {
		return (
			this.state.ready &&
			<Form>
				<FormGroup>
					<FormGroup>
						<Label for="exampleEmail">Email</Label>
						<Input type="email" disabled name="email" id="exampleEmail" onChange={(event) => this.updateValue("email", event.target.value)} value={this.state.email} placeholder="Email" />
					</FormGroup>
					<FormGroup>
						<Label for="tag">Tag</Label>
						<Input type="tag" name="tag" id="tag" onChange={(event) => this.updateValue("tag", event.target.value)} value={this.state.tag} placeholder="tag placeholder" />
					</FormGroup>
				</FormGroup>
				<FormGroup>
					<Label for="exampleSelect">Main</Label>
					<Input type="select" value={this.state.main} onChange={(event) => this.updateValue("main", event.target.value)} name="select" id="exampleSelect">
						{characterOptions.map((character, i) => {
							return <option key={"character" + i}>{character}</option>
						})}
					</Input>
				</FormGroup>
				<FormGroup>
					<Label for="exampleSelect">Secondary(s)</Label>
					<Input type="select" value={this.state.secondary} onChange={(event) => this.updateValue("secondary", event.target.value)} name="select" id="exampleSelect">
						{characterOptions.map((character, i) => {
							return <option key={"character" + i}>{character}</option>
						})}
					</Input>
				</FormGroup>
				<FormGroup>
					<Label for="exampleSelect">Region of Washington</Label>
					<Input type="select" value={this.state.region} onChange={(event) => this.updateValue("region", event.target.value)} name="select" id="exampleSelect">
						<option></option>
						<option>WWA</option>
						<option>EWA</option>
					</Input>
				</FormGroup>
				<FormGroup>
					<Label for="twitter">Twitter Handle</Label>
					<Input type="twitter" name="twitter" id="twitter" onChange={(event) => this.updateValue("twitter", event.target.value)} value={this.state.twitter} placeholder="twitter placeholder" />
				</FormGroup>
				<FormGroup>
					<Label for="exampleText">Bio (max 300 characters!)</Label>
					<Input type="textarea" maxLength="200" value={this.state.bio} onChange={(event) => this.updateValue("bio", event.target.value)} name="text" id="exampleText" />
				</FormGroup>
				<FormGroup>
					<Label for="exampleFile">Profile Picture</Label>
					<Input type="file" name="file" accept=".jpg,.png,.jpeg,.gif" onChange={(event) => {
						this.setState({ profilePic: event.target.files[0] })
					}} id="exampleFile" />
					<FormText color="muted">
						Update your profile picture here!
          			</FormText>
					<img src={this.state.photoURL} alt="profile" width="150" height="auto"></img>
				</FormGroup>
				<Button onClick={this.updateInformation}>Update</Button>
				{this.state.confirm && <Alert color="success">{this.state.confirm}</Alert>}
				{this.state.error && <Alert color="danger">{this.state.error}</Alert>}
			</Form>
		);
	}
}

export default ProfileField;