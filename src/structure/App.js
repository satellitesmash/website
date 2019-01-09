import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../components/Footer';
import ContentSwitch from './ContentSwitch';
import NavBar from '../components/NavBar';

export default class App extends Component {

    render() {
        return(
            <Router basename={process.env.PUBLIC_URL}>
                <div>
                    <NavBar/>
                    <ContentSwitch/>
                    <Footer/>
                </div>
            </Router>
        );
    }

}