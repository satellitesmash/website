import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class MainPage extends Component {

    render() {
        return (
            <Jumbotron>
                <h1 className="display-4">Welcome to Washington Smash Bros. Ultimate!</h1>
                <p className="lead">Check out all the content we have relating to our scene!</p>
                <hr className="my-2" />
                <p></p>
            </Jumbotron>
        );
    }

}

export default MainPage;