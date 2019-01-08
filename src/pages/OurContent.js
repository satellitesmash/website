import React, { Component } from 'react';
import { Media } from 'reactstrap';

export default class OurContent extends Component {

    render() {
        return (
            <React.Fragment>
                <Media>
                    <Media left href="https://www.youtube.com/channel/UCqB7d-vcBxxlccHB3oMk6ew">
                        <Media style={{ width: "64px", margin: '1rem' }} object src={require("../assets/satellitesmash.png")} alt="Generic placeholder image" />
                    </Media>
                    <Media body>
                        <Media heading href="https://www.youtube.com/channel/UCqB7d-vcBxxlccHB3oMk6ew">
                            We are SatelliteSmash
                    </Media>
                        We are an organization that streams, organizes tournaments, and supports the Ultimate community!
                </Media>
                </Media>
                <Media style={{ marginTop: '1rem' }} heading>Our Last Events</Media>
                <div id="playlistContainer" style={{ display: 'flex', margin: '1rem'}}>
                    <iframe title="playlist1" className="playlists" style={{ marginLeft: 'auto', marginRight: 'auto' }} src="https://www.youtube.com/embed/?listType=playlist&list=PL9ieIw6nXWjJyhnCuhV1pd5w71s-IGozn" frameBorder="5" allowFullScreen></iframe>
                    <iframe title="playlist2" className="playlists" style={{ marginLeft: 'auto', marginRight: 'auto' }} src="https://www.youtube.com/embed/?listType=playlist&list=PL9ieIw6nXWjI-d243EZVR0ut9ijW73P-r" frameBorder="5" allowFullScreen></iframe>
                    <iframe title="playlist3" className="playlists" style={{ marginLeft: 'auto', marginRight: 'auto' }} src="https://www.youtube.com/embed/?listType=playlist&list=PL9ieIw6nXWjKRFpQT6kvkBeEpkIi1-xhj" frameBorder="5" allowFullScreen></iframe>
                    <iframe title="playlist4" className="playlists" style={{ marginLeft: 'auto', marginRight: 'auto' }} src="https://www.youtube.com/embed/?listType=playlist&list=PL9ieIw6nXWjL2Ll6rHmjMDTRm3VxBktxS" frameBorder="5" allowFullScreen></iframe>
                </div>
            </React.Fragment>
        );
    }

}