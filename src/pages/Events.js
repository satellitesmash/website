import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Events extends Component {

    render() {
        return (
            <section id="events">
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem active><Link to="/events">Events</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/calendar">Calendar</Link></BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <h1>Events</h1>
                <p>Western Washington is home to a wide variety of tournaments. Check out descriptions for each below, then consult the event calendar to start planning. For additional information, watch for event postings in the WWA Facebook page.</p>
                <h3>Locals</h3>
                <Media list>
                    <Media>
                        <Media body>
                            <Media heading>Orbitar</Media>
                            <Media>Sprouting up from humble beginnings in 2015, this bi-weekly at GameWorks Seattle has blossomed into WWA’s biggest local. It regularly draws out PR players and new faces alike, offering a great snapshot of all the scene has to offer. Expect side brackets to return alongside Singles in Ultimate.</Media>
                            <ul>
                                <li>TO(s): <a href="https://twitter.com/cyrrona" target="_blank" rel="noopener noreferrer">Cyrrona</a>, <a href="https://twitter.com/ssbgyromight" target="_blank" rel="noopener noreferrer">Gyromight</a></li>
                                <li>Location: 1511 7th Ave Seattle, Washington 98101</li>
                                <li>Brackets: Singles, varies</li>
                                <li>Entry: $5 venue, $5 bracket</li>
                                <li>Schedule: Every other Friday at 6:30 PM</li>
                            </ul>
                        </Media>
                        <Media right top >
                            <img className="rounded" src={require('../assets/orbitar.jpg')} alt="Orbitar"></img>
                        </Media>
                    </Media>
                    <Media>
                        <Media body>
                            <Media heading>WGA Weeklies</Media>
                            <p>Smash Club at the University of Washington cycles through a variety of different events and often charges no entry, giving players of all skill levels an easy entry point into the tournament scene. Occasional Singles brackets give UW students a shot at Smash Club’s quarterly PR, but meetings are open to everyone--student or not!</p>
                            <ul>
                                <li>TO(s): <a href="https://twitter.com/ssbgyromight" target="_blank" rel="noopener noreferrer">Gyromight</a>, WGA Smash Club officers</li>
                                <li>Location: Maple Hall 216/217 at UW, Seattle, WA 98195</li>
                                <li>Brackets: varies</li>
                                <li>Entry: Free (most brackets), $2 (PR brackets)</li>
                                <li>Schedule: Every Thursday (while UW is in session) at 7:00 PM</li>
                            </ul>
                        </Media>
                        <Media right top>
                            <img className="rounded" src={require('../assets/wga.png')} alt="WGA Weeklies"></img>
                        </Media>
                    </Media>
                    <Media>
                        <Media body>
                            <Media heading>Roadside Hobbies</Media>
                            <Media>For anyone south of Seattle, RSH is the prime weekly around. Run in a family-owned card shop, this intimate event features two brackets, a casual atmosphere, and plenty of good Smash.</Media>
                            <ul>
                                <li>TO(s): <a href="https://twitter.com/Hellviper" target="_blank" rel="noopener noreferrer">Hellviper</a></li>
                                <li>Location: 15413 1st Avenue Ct S Ste G19, Tacoma, Washington 98444</li>
                                <li>Brackets: Singles, Doubles</li>
                                <li>Entry: $3 venue, $5 Singles, free Doubles</li>
                                <li>Schedule: Every Sunday starting at 2:00 PM</li>
                            </ul>
                        </Media>
                        <Media right top>
                            <img className="rounded" src={require('../assets/roadside.jpg')} alt="Roadside Hobbies"></img>
                        </Media>
                    </Media>
                    <Media>
                        <Media body>
                            <Media heading>Ultimate Thursdays</Media>
                            <Media>Debuting in late 2018, Ultimate Thursdays offers southern Smashers a great place to level up during the week. Its low price point makes it accessible for players of all levels.</Media>
                            <ul>
                                <li>TO(s): <a href="https://twitter.com/ChadDrawsThings" target="_blank" rel="noopener noreferrer">ChadDrawsThings</a></li>
                                <li>Location: 124 Fir St NE, Olympia, Washington 98506</li>
                                <li>Brackets: Singles</li>
                                <li>Entry: $3 venue, $1 bracket</li>
                                <li>Schedule: Every Thursday at 7:30 PM</li>
                            </ul>
                        </Media>
                        <Media right top>
                            <img className="rounded" src={require('../assets/ultthurs.jpg')} alt="Ultimate Thursdays"></img>
                        </Media>
                    </Media>
                    <Media>
                        <Media body>
                            <Media heading>ePG Weeklies</Media>
                            <Media>A legacy tournament in WWA Smash, ePG is back at it with the release of Ultimate. Head a ways south of Seattle to get your grind on at this training house every Thursday.</Media>
                            <ul>
                                <li>TO(s): <a href="https://www.facebook.com/EpeenGaming/" target="_blank" rel="noopener noreferrer">ePeenGaming</a></li>
                                <li>Location: 9436 S 196th Pl, Renton, WA 98055</li>
                                <li>Brackets: Singles</li>
                                <li>Entry: $6 bracket</li>
                                <li>Schedule: Every Thursday at 7:00 PM</li>
                            </ul>
                        </Media>
                        <Media right top>
                            <img className="rounded" src={require('../assets/epeen.jpg')} alt="orbitar"></img>
                        </Media>
                    </Media>
                    <Media>
                        <Media body>
                            <Media heading>That's Not Safe</Media>
                            <Media>Tucked away in a gaming shop north of Seattle, TNS runs Ultimate every other Monday. You can expect a standard Singles bracket, a side bracket, and Melee as well.</Media>
                            <ul>
                                <li>TO(s): <a href="https://twitter.com/harmdissonance" target="_blank" rel="noopener noreferrer">Scruffymagic</a></li>
                                <li>Location: 17928 Bothell Everett Hwy, Ste C, Bothell, Washington 98012</li>
                                <li>Brackets: Singles, varies</li>
                                <li>Entry: $5  venue, $5 bracket</li>
                                <li>Schedule: Every other Monday at 7:00 PM</li>
                            </ul>
                        </Media>
                        <Media right top>
                            <img className="rounded" src={require('../assets/tns.jpg')} alt="orbitar"></img>
                        </Media>
                    </Media>
                    <Media>
                        <Media body>
                            <Media heading>SmashWorks</Media>
                            <Media>SmashWorks leverages GameWorks Seattle for another event on the last Saturday of every month. If you’re looking for a weekend tournament downtown, it’s tough to beat this location and time slot.</Media>
                            <ul>
                                <li>TO(s): <a href="https://www.facebook.com/GWeSportsSEA/" target="_blank" rel="noopener noreferrer">Deniz Bengisoy</a></li>
                                <li>Location: 1511 7th Ave Seattle, Washington 98101</li>
                                <li>Brackets: Singles, Doubles</li>
                                <li>Entry: $5 venue, $5 per bracket</li>
                                <li>Schedule: Last Saturday of each month starting at 1:00 PM</li>
                            </ul>
                        </Media>
                        <Media right top>
                            <img className="rounded" src={require('../assets/gameworks.jpg')} alt="orbitar"></img>
                        </Media>
                    </Media>
                    <Media>
                        <Media body>
                            <Media heading>Monthly Mashers</Media>
                            <Media>Monthly Mashers unites tons of different fighting games under one roof, giving Smashers plenty of room to broaden their horizons. Who knows what other fighters you're missing out on?</Media>
                            <ul>
                                <li>TO(s): <a href="https://twitter.com/ChadDrawsThings" target="_blank" rel="noopener noreferrer">ChadDrawsThings</a></li>
                                <li>Location: 124 Fir St NE, Olympia, Washington 98506</li>
                                <li>Brackets: Singles</li>
                                <li>Entry: $10 venue, $5 bracket</li>
                                <li>Schedule: Listed Saturdays starting at 3:00 PM</li>
                            </ul>
                        </Media>
                        <Media right top>
                            <img className="rounded" src={require('../assets/monthly.jpg')} alt="Monthly Mashers"></img>
                        </Media>
                    </Media>
                </Media>
                <h3>Regionals</h3>
                <Media list>
                    <Media>
                        <Media body>
                            <Media heading>Port Priority</Media>
                            <Media>Stationed in the University of Washington’s Maple Hall, this bi-annual tournament draws PGR talent, national attention, and plenty of hype. While all installments feature Singles and Doubles, each one also focuses on a specific theme or region, giving every edition a distinct flavor.</Media>
                            <ul>
                                <li>TO(s): <a href="https://twitter.com/cyrrona" target="_blank" rel="noopener noreferrer">Cyrrona</a>, <a href="https://twitter.com/ssbgyromight" target="_blank" rel="noopener noreferrer">Gyromight</a></li>
                            </ul>
                        </Media>
                        <Media right top>
                            <img className="rounded" src={require('../assets/pp.jpg')} alt="Port Priority"></img>
                        </Media>
                    </Media>
                    <Media>
                        <Media body>
                            <Media heading>Don't Park on the Grass</Media>
                            <Media>This fusion of Melee and Ultimate brings players of all kinds up to Seattle for a two-day throwdown. And as one of the first majors in the country to run Ultimate, DPotG is poised to broaden its reach even further in coming years.</Media>
                            <ul>
                                <li>TO(s): <a href="https://twitter.com/aidencalvin" target="_blank" rel="noopener noreferrer">Aiden</a>, <a href="https://twitter.com/TO_Aveean" target="_blank" rel="noopener noreferrer">Aveean</a></li>
                            </ul>
                        </Media>
                        <Media right>
                            <img className="rounded" src={require('../assets/dp.jpeg')} alt="Don't Park on the Grass"></img>
                        </Media>
                    </Media>
                    <Media>
                        <Media body>
                            <Media heading>Emerald City</Media>
                            <Media>This (roughly) quarterly regional at the UW Intellectual House brings Ultimate and Melee players together for a mash-up of Singles and Doubles in both games. Its multi-region crowd offers attendees the chance to meet some new faces and playstyles.</Media>
                            <ul>
                                <li>TO(s): <a href="https://twitter.com/aidencalvin" target="_blank" rel="noopener noreferrer">Aiden</a>, <a href="https://twitter.com/TO_Aveean" target="_blank" rel="noopener noreferrer">Aveean</a></li>
                            </ul>
                        </Media>
                        <Media right top>
                            <img className="rounded" src={require('../assets/ec.png')} alt="Emerald City"></img>
                        </Media>
                    </Media>
                    <Media>
                        <Media body>
                            <Media heading>Orbitar Stars</Media>
                            <Media>This bi-annual event features an invitational bracket with some of Orbitar’s top performers as well as an Arcadian bracket designed to highlight the scene’s rising stars. It’s part prestige, part celebration!</Media>
                            <ul>
                                <li>TO(s): <a href="https://twitter.com/cyrrona" target="_blank" rel="noopener noreferrer">Cyrrona</a>, <a href="https://twitter.com/ssbgyromight" target="_blank" rel="noopener noreferrer">Gyromight</a></li>
                            </ul>
                        </Media>
                        <Media right top>
                            <img className="rounded" src={require('../assets/stars.jpg')} alt="Orbitar Stars"></img>
                        </Media>
                    </Media>
                    <Media>
                        <Media body>
                            <Media heading>Northwest Majors</Media>
                            <Media>This recurring gauntlet houses all manner of fighting games, including both Ultimate and Melee. It runs pricier than some of its cousins, but it’s an experience all its own.</Media>
                            <ul>
                                <li>TO(s): <a href="https://www.facebook.com/northwestmajors/" target="_blank" rel="noopener noreferrer">Chris Anderson</a></li>
                            </ul>
                        </Media>
                        <Media right top>
                            <img className="rounded" src={require('../assets/nwm.png')} alt="Northwest Majors"></img>
                        </Media>
                    </Media>
                </Media>
            </section >
        );
    }

}