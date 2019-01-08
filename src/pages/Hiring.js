import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class Hiring extends Component {

    render() {
        return (
            <section>
                <div style={{ margin: '1rem 0' }}>
                    <h3>Hire Satellite Smash</h3>
                    <p>Interested in contracting Satellite Smash to stream an event? Just click below - we'll be in touch shortly!​</p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSddSx3Xi7uuCmDCyj0SVEC8c5QsLWgYu4pf153zQNV3qUnxTQ/viewform" target="_blank" rel="noopener noreferrer"><Button>Hire Us</Button></a>
                </div>
                <h3 style={{ marginTop: '1rem' }}>Our Last Events</h3>
                <div id="playlistContainer" style={{ display: 'flex', margin: '1rem' }}>
                    <iframe title="playlist1" className="playlists" style={{ marginLeft: 'auto', marginRight: 'auto' }} src="https://www.youtube.com/embed/?listType=playlist&list=PL9ieIw6nXWjJyhnCuhV1pd5w71s-IGozn" frameBorder="5" allowFullScreen></iframe>
                    <iframe title="playlist2" className="playlists" style={{ marginLeft: 'auto', marginRight: 'auto' }} src="https://www.youtube.com/embed/?listType=playlist&list=PL9ieIw6nXWjI-d243EZVR0ut9ijW73P-r" frameBorder="5" allowFullScreen></iframe>
                    <iframe title="playlist3" className="playlists" style={{ marginLeft: 'auto', marginRight: 'auto' }} src="https://www.youtube.com/embed/?listType=playlist&list=PL9ieIw6nXWjKRFpQT6kvkBeEpkIi1-xhj" frameBorder="5" allowFullScreen></iframe>
                    <iframe title="playlist4" className="playlists" style={{ marginLeft: 'auto', marginRight: 'auto' }} src="https://www.youtube.com/embed/?listType=playlist&list=PL9ieIw6nXWjL2Ll6rHmjMDTRm3VxBktxS" frameBorder="5" allowFullScreen></iframe>
                </div>
            </section>
        );
    }

}