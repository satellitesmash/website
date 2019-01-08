import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Redirect } from "react-router-dom";
import ProfileField from '../components/ProfileField';

export default class Profile extends Component {

    constructor() {
        super();
        this.state = {
            user: null,
            redirect: false
        }
    }

    componentDidMount() {
        this.authUnregFunc = firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                this.setState({
                    user: firebaseUser
                })
            }
            else { //firebaseUser undefined: is not logged in
                this.setState({
                    user: null,
                    redirect: true
                })
            }
        });
    }

    componentWillUnmount() {
        this.authUnregFunc();
    }

    render() {
        return (
            <React.Fragment>
                <h1>Update your profile information here!</h1>
                {this.state.redirect && <Redirect to="home"></Redirect>}
                {this.state.user && <ProfileField tag={this.state.user.displayName} photoURL={this.state.user.photoURL} email={this.state.user.email} id={this.state.user.uid}></ProfileField>}
            </React.Fragment>
        );
    }

}