import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Rankings extends Component {

    render() {
        return (
            <section id="ranking-page">
                <h3>Rankings</h3>
                <p>This page houses all regional Power Rankings for Super Smash Bros. Ultimate in Western Washington. For more on how these rankings are determined, check out our <a href="https://docs.google.com/document/d/1ZnD6aFGwMPAh8dcdpeBx4vEdgYwMQUakqpldTHSnpZg">FAQ.</a></p>
                <p>The current season runs from 12/7/18 - 3/1/19. Head out to some <Link to="/events">Events</Link> for a shot at making the list!</p>
                <p>More ranking information coming soon!</p>
            </section>
        );
    }

}