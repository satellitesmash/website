import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Footer from '../components/Footer';
import ContentSwitch from './ContentSwitch';
import NavBar from '../components/NavBar';

class Structure extends Component {

    render() {
        return(
            <Router>
                <div>
                    <NavBar/>
                    <ContentSwitch/>
                    <Footer/>
                </div>
            </Router>
        );
    }

}

export default Structure;