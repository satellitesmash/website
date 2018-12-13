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
        let playerRef = firebase.database().ref("userData").child(retrievePlayer);
        this.playerInfo = playerRef.on("value", (snapshot) => {
            this.setState({
                player: snapshot.val().data
            })
        })
    }


    render() {
        let player = this.state.player;
        return (
            <React.Fragment>
                {player &&
                    <Container id="playerArea">
                        <Row style={{ alignItems: 'center' }}>
                            <Col style={{ textAlign: 'center' }}>
                                <h1>{player.displayName}</h1>
                                <ListGroup>
                                    <ListGroupItem>
                                        <span><strong>Main: </strong>{player.main}</span>
                                    </ListGroupItem>
                                    <ListGroupItem><span><strong>Secondary(s): </strong>{player.secondary1}</span></ListGroupItem>
                                    <ListGroupItem>{player.bio}</ListGroupItem>
                                </ListGroup>
                            </Col>
                            <Col>
                                <ListGroup>
                                    <ListGroupItem style={{ textAlign: 'center' }}>
                                        <img alt="profile" src={require("../assets/avatar.jpg")} width="200" height="200"></img>
                                    </ListGroupItem>
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
                                        <strong>Twitter: </strong><a href={`https://twitter.com/${player.twitter}`}><span>@</span>{player.twitter}</a>
                                    </ListGroupItem>
                                </ListGroup>
                            </Col>
                            <Col>
                                <h3>Rankings</h3>
                            </Col>
                        </Row>
                    </Container>}
            </React.Fragment>
        );
    }


}

export default PlayerPage;