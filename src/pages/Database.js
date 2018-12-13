import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import PlayerTable from '../components/PlayerTable';

class Database extends Component {

    constructor() {
        super();
        this.state = {
            players: null
        }
    }

    componentDidMount() {
        this.data = firebase.database().ref('userData');
        this.data.on("value", (snapshot) => {
            let players = snapshot.val();
            let playersKeys = Object.keys(players);
            let playersArray = playersKeys.map((key) => { //map array of keys into array of tasks
                let player = players[key]; //access element at that key
                player.key = key; //save the key for later referencing!
                return player; //the transformed object to store in the array
            });
            this.setState({
                players: playersArray
            });
        });
    }

    componentWillUnmount() {
        this.data.off();
    }



    render() {
        return (
            <React.Fragment>
                <h1>Player Database</h1>
                <p className="lead">Search for fellow players in Washington! You can filter based on tag below.</p>
                {this.state.players ? <PlayerTable players={this.state.players}></PlayerTable> :
                    <div style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '4rem' }}>
                        <img alt="loading symbol" src={require("../assets/loader.gif")}></img>
                    </div>}
            </React.Fragment>
        );
    }

}

export default Database;