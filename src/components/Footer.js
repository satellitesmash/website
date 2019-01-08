import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {

    render() {
        return (
            <footer className="page-footer font-small pt-4 footer-color">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Satellite Smash</h5>
                            <p>Your destination for Ultimate content!</p>
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-3"></hr>
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Navigation</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/database">Database</Link>
                                </li>
                                <li>
                                    <Link to="/news">News</Link>
                                </li>
                                <li>
                                    <Link to="/events">Events</Link>
                                </li>
                                <li>
                                    <Link to="/calendar">Calendar</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Support</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/services">Links & Services</Link>
                                </li>
                                <li>
                                    <Link to="/us">About Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2019:
                    <span> Satellite Smash</span>
                </div>
            </footer>
        );
    }

}