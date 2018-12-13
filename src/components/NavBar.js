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
            }
            else { //firebaseUser undefined: is not logged in
                this.setState({
                    user: null
                })
            }
        });
    }

    componentWillUnmount() {
        this.authUnregFunc();
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Link style={{ color: 'black' }} to="/home"><NavItem className="navbar-brand">WA Ultimate</NavItem></Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link className="nav-link" to="/home">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/news">News</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/calendar">Calendar</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/vods">VODS / Streams</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/database">Database</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/rankings">Rankings</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/services">Services</Link>
                            </NavItem>
                            {this.state.user && 
                            <NavItem>
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </NavItem>
                            }
                            <NavItem>
                                {this.state.user ?
                                    <Button onClick={() => firebase.auth().signOut()}color="danger">Log Out</Button>
                                    :
                                    <Link to="/signin">
                                        <Button color="primary">Log In</Button>
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