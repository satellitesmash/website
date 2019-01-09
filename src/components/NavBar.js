import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import { Link } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/auth';

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            user: null
        };
    }

    componentDidMount() {
        this.authUnregFunc = firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                this.setState({
                    user: firebaseUser
                })
            } else {
                this.setState({
                    user: null
                })
            }
        });
    }

    componentWillUnmount() {
        this.authUnregFunc();
    }

    compress = () => {
        if (window.innerWidth <= 767) {
            this.setState({ isOpen: !this.state.isOpen })
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar className="nav-color" dark expand="md">
                    <Link style={{ color: 'white' }} to="/home">
                        <NavItem className="navbar-brand" style={{ paddingTop: '0' }}>
                            <div style={{ display: 'flex', marginTop: '5px', alignItems: 'center' }}>
                                <h5 style={{ display: 'inline-block', paddingTop: '.5rem' }} id="brand-title">Satellite Smash</h5>
                                <div style={{ display: 'inline-block' }}>
                                    <img id="brand-pic" width="40" src={require("../assets/satellitesmash.png")} alt="Logo"></img>
                                </div>
                            </div>
                        </NavItem>
                    </Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link className="nav-link" to="/home" onClick={this.compress}>Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/players" onClick={this.compress}>Players</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/events" onClick={this.compress}>Events</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/rankings" onClick={this.compress}>Rankings</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/resources" onClick={this.compress}>Resources</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/news" onClick={this.compress}>News</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/hireus" onClick={this.compress}>Hire Us</Link>
                            </NavItem>
                            {this.state.user &&
                                <NavItem>
                                    <Link className="nav-link" to="/profile" onClick={this.compress}>Profile</Link>
                                </NavItem>
                            }
                            <NavItem>
                                {this.state.user ?
                                    <Button onClick={() => {
                                        firebase.auth().signOut();
                                        this.compress();
                                    }} color="danger">Log Out</Button>
                                    :
                                    <Link to="/signin">
                                        <Button id="login" color="primary">Log In</Button>
                                    </Link>
                                }
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}