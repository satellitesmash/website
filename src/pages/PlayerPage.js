import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/database';

class PlayerPage extends Component {

    constructor() {
        super();
        this.state = {
            playerid: null
        }
    }

    componentDidMount() {
        let retrievePlayer = this.props.match.params.playerid;
        this.playerRef = firebase.database().ref("userData").child(retrievePlayer);
        this.playerRef.on("value", (snapshot) => {
            this.setState({
                player: snapshot.val().data
            });
        })
    }

    componentWillUnmount() {
        this.playerRef.off();
    }

    render() {
        let player = this.state.player;
        return (
            <React.Fragment>
                {player ?
                    <Container id="playerArea">
                        <Row style={{ alignItems: 'center' }}>
                            <Col>
                                <ListGroup>
                                    <ListGroupItem style={{ textAlign: 'center' }}>
                                        <img alt="profile" src={player.photoUrl || require('../assets/avatar.jpg')} width="200" height="200"></img>
                                    </ListGroupItem>
                                </ListGroup>
                            </Col>
                            <Col style={{ textAlign: 'center' }}>
                                <h1>{player.displayName}</h1>
                                <ListGroup>
                                    <ListGroupItem>
                                        <span><strong>Main: </strong>{player.main}</span>
                                    </ListGroupItem>
                                    <ListGroupItem><span><strong>Secondary: </strong>{player.secondary}</span></ListGroupItem>
                                    <ListGroupItem>{player.bio}</ListGroupItem>
                                </ListGroup>
                            </Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col>
                                <h3>Other information:</h3>
                                <ListGroup>
                                    <ListGroupItem>
                                        <strong>Region: </strong>{player.region}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <strong>City: </strong>{player.city}
                                    </ListGroupItem>
                                    {player.twitter !== "" &&
                                        <ListGroupItem>
                                            <strong>Twitter: </strong><a href={`https://twitter.com/${player.twitter}`}><span>@</span>{player.twitter}</a>
                                        </ListGroupItem>}
                                    {player.discord !== "" &&
                                        <ListGroupItem>
                                            <strong>Discord: </strong>{player.discord}
                                        </ListGroupItem>}
                                    {player.friendCode !== "" &&
                                        <ListGroupItem>
                                            <strong>Friend Code: </strong>{player.friendCode}
                                        </ListGroupItem>}
                                </ListGroup>
                            </Col>
                            <Col>
                                <h3>Rankings</h3>
                                <ListGroup>
                                    <ListGroupItem>
                                        Coming soon!
                                    </ListGroupItem>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Container> :
                    <div style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '4rem' }}>
                        <img alt="loading symbol" src={require("../assets/loader.gif")}></img>
                    </div>}
            </React.Fragment>
        );
    }


}

export default PlayerPage;