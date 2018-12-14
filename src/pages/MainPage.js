import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import CarourselPictures from '../components/CarouselPictures';

class MainPage extends Component {

    render() {
        return (
            <React.Fragment>
                <Jumbotron className="text-center mb-0 mt">
                    <h1 className="display-4 text-uppercase">Washington Smash Bros. Ultimate</h1>
                    <hr className="my-2" />
                    <p className="lead">Your destination for connecting with players and learning about the game.</p>
                </Jumbotron>
                <section>
                    <CarourselPictures></CarourselPictures>
                </section>
                <section style={{ margin: '7rem 0', textAlign: 'center' }}>
                    <Container style={{ width: '80%' }}>
                        <h2 style={{ marginBottom: '1rem' }}>About this Site</h2>
                        <div className="lead">
                            <p>
                                Designed with the intention of bringing the community together, the Washington Ultimate Database provides players an easy way to connect with
                                others for practice and sharing information.
                            </p>
                            <p><Link to="/signin">Sign in</Link> or <Link to="/signup">sign up</Link> to add yourself to the database and start connecting with other players.</p>
                        </div>
                    </Container>
                </section>
            </React.Fragment>
        );
    }

}

export default MainPage;