import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import Players from '../pages/Players';
import Hiring from "../pages/Hiring";
import MainPage from '../pages/MainPage';
import Rankings from '../pages/Rankings';
import Calendar from '../pages/Calendar';
import News from '../pages/News';
import Post from '../components/Post';
import Resources from '../pages/Resources';
import UserSignIn from '../components/UserSignIn';
import UserSignUp from '../components/UserSignUp';
import Profile from '../pages/Profile';
import PlayerPage from '../pages/PlayerPage';
import Forgot from '../components/Forgot';
import Events from '../pages/Events';

export default class ContentSwitch extends Component {

    render() {
        return (
            <Container>
                <main>
                    <Switch>
                        <Route exact path="/home" component={MainPage} />
                        <Route path="/signin" component={UserSignIn} />
                        <Route path="/signup" component={UserSignUp} />
                        <Route path="/players" component={Players} />
                        <Route exact path="/news" component={News} />
                        <Route path="/news/:post" component={Post} />
                        <Route path="/hireus" component={Hiring} />
                        <Route path="/resources" component={Resources} />
                        <Route path="/events" component={Events} />
                        <Route path="/rankings" component={Rankings} />
                        <Route path="/calendar" component={Calendar} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/forgot" component={Forgot} />
                        <Route path="/player/:playerid" component={PlayerPage} />
                        <Redirect to="/home" />
                    </Switch>
                </main>
            </Container>
        );
    }

}