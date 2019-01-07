import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class Services extends Component {

    render() {
        return (
            <section>
                <h1>Links & Services</h1>
                <div style={{ margin: '1rem 0' }}>
                    <h3>Hire Satellite Smash</h3>
                    <p>Interested in contracting Satellite Smash to stream an event? Just click below - we'll be in touch shortly!​</p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSddSx3Xi7uuCmDCyj0SVEC8c5QsLWgYu4pf153zQNV3qUnxTQ/viewform" target="_blank" rel="noopener noreferrer"><Button>Hire Us</Button></a>
                </div>
                <div>
                    <h3>CONTACTS</h3>
                    <ul>
                        <li><a href="https://twitter.com/ssbgyromight" target="_blank" rel="noopener noreferrer">Gyromight - Satellite Smash (TO)</a></li>
                        <li><a href="https://twitter.com/cyrrona" target="_blank" rel="noopener noreferrer">Cyrrona - Satellite Smash (web lead, TO)</a></li>
                        <li><a href="https://twitter.com/jc_ssb" target="_blank" rel="noopener noreferrer">JC - Satellite Smash (stream lead, web developer)</a></li>
                        <li><a href="https://www.facebook.com/sell.transue" target="_blank" rel="noopener noreferrer">Yope (event calendar)</a></li>
                        <li>Email: <a href="mailto:satellitesmashbros@gmail.com" target="_blank" rel="noopener noreferrer">satellitesmashbros@gmail.com</a></li>
                    </ul>
                </div>
                <div>
                    <h3>COMMUNITY RESOURCES</h3>
                    <ul>
                        <li><a href="https://www.facebook.com/groups/pnwsmash" target="_blank" rel="noopener noreferrer">WWA Facebook group</a></li>
                        <li><a href="https://discord.gg/2NcUmC3" target="_blank" rel="noopener noreferrer">WWA Discord server</a></li>
                        <li><a href="https://docs.google.com/document/d/1ksVJc5N3-Cko7t-4vBVzGJruR7MdvQUCs9w9FGoAATI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">WWA Code of Conduct</a></li>
                        <li><a href="https://www.google.com/maps/d/u/0/viewer?mid=1b2j8mLODlrv2WXQtM4pPcx2hT5E" target="_blank" rel="noopener noreferrer">Player map</a></li>
                    </ul>
                </div>
                <div>
                    <h3>TWITCH CHANNELS</h3>
                    <ul>
                        <li><a href="https://twitch.tv/satellitesmash" target="_blank" rel="noopener noreferrer">SatelliteSmash</a></li>
                        <li><a href="https://twitch.tv/gameworksseattle" target="_blank" rel="noopener noreferrer">GameWorksSeattle</a></li>
                        <li><a href="https://twitch.tv/glitterisgoldgaming" target="_blank" rel="noopener noreferrer">GlitterIsGoldGaming</a></li>
                        <li><a href="https://twitch.tv/pixelholicsgaming" target="_blank" rel="noopener noreferrer">PixelholicsGaming</a></li>
                        <li><a href="https://twitch.tv/peakgamingnw" target="_blank" rel="noopener noreferrer">PeakGaming</a></li>
                    </ul>
                </div>
            </section>
        );
    }

}