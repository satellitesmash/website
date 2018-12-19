import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert, Container } from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/auth';

export class Forgot extends Component {

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
                    <div className="text-center mb-4">
                        <img width="20%" alt="Logo" src={require("../assets/WASmash.png")}></img>
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
                </Container>
            </React.Fragment>
        );
    }
}

export default Forgot;