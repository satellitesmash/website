import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContentSwitch from './ContentSwitch';

class Structure extends Component {

    render() {
        return(
            <Router>
                <div>
                    <Header/>
                    <ContentSwitch/>
                    <Footer/>
                </div>
            </Router>
        );
    }

}

export default Structure;