import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button, Alert, Container } from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/auth';

export default class Forgot extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            error: null,
            confirm: null
        }
    }


    updateValue = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    sendReset = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email).then(() => {
            this.setState({
                confirm: "Email sent successfully!",
                error: null
            });
        }).catch((error) => {
            this.setState({
                error: error.message,
                confirm: null
            });
        });
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <div className="text-center mb-4 mt-4">
                        <Link to="/home">
                            <img width="20%" alt="Logo" src={require("../assets/satellitesmash.png")}></img>
                        </Link>
                    </div>
                    <Form style={{ width: "50%", marginLeft: 'auto', marginRight: 'auto' }}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" autoComplete="email" value={this.state.email} onChange={(event) => this.updateValue("email", event.target.value)} id="email" placeholder="Email" />
                        </FormGroup>
                        <div className="text-center mt-4">
                            <Button onClick={this.sendReset}>Send Password Reset</Button>
                        </div>
                    </Form>
                    {this.state.confirm && <Alert className="mt-4" color="success">{this.state.confirm}</Alert>}
                    {this.state.error && <Alert className="mt-4" color="danger">{this.state.error}</Alert>}
                    <div style={{ textAlign: 'center', padding: '5px', paddingTop: '50px', paddingBottom: '20px' }}>
                        <Link to="/signin">Back to sign in page!</Link>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}