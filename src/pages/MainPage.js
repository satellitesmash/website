import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import CarourselPictures from '../components/CarouselPictures';

class MainPage extends Component {

    render() {
        return (
            <React.Fragment>
                <section>
                    <div style={{ position: "relative" }}>
                        <img src={require("../assets/ult.png")} alt="Logo" width="100%"></img>
                        <div className="centered">
                            <h1 style={{ fontSize: "5vw" }} className="text-uppercase">Washington Smash Bros. Ultimate</h1>
                            <hr className="my-2" />
                            <p style={{ fontSize: "3vw" }} className="lead">Your destination for connecting with players and learning about the game.</p>
                        </div>
                    </div>
                </section>
                <section style={{ margin: '6rem 0', textAlign: 'center' }}>
                    <Container style={{ width: '80%' }}>
                        <h2 style={{ marginBottom: '1rem' }}>About this Site</h2>
                        <div className="lead">
                            <p>
                                Designed with the intention of bringing the community together, the Washington Ultimate Database provides players an easy way to connect with
                                others for practice and sharing information.
                            </p>
                            <p><Link to="/signin">Sign in</Link> or <Link to="/signup">sign up</Link> to add yourself to the <Link to="/database">database</Link> and start connecting with other players.</p>
                        </div>
                    </Container>
                </section>
                <section>
                    <CarourselPictures></CarourselPictures>
                </section>
            </React.Fragment>
        );
    }

}

export default MainPage;