import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import Database from '../pages/Database';
// import News from "../pages/News";
import OurContent from "../pages/OurContent";
// import Services from '../pages/Services';
import MainPage from '../pages/MainPage';
// import Rankings from '../pages/Rankings';
import Calendar from '../pages/Calendar';
import News from '../pages/News';
import Post from '../components/Post';
import Services from '../pages/Services';
import UserSignIn from '../components/UserSignIn';
import UserSignUp from '../components/UserSignUp';
import Profile from '../pages/Profile';
import PlayerPage from '../pages/PlayerPage';
import Forgot from '../components/Forgot';

class ContentSwitch extends Component {

    render() {
        return (
            <Container>
                <main>
                    <Switch>
                        <Route exact path="/home" component={MainPage} />
                        <Route path="/signin" component={UserSignIn} />
                        <Route path="/signup" component={UserSignUp} />
                        <Route path="/database" component={Database} />
                        <Route exact path="/news" component={News} />
                        <Route path="/news/:post" component={Post} />
                        <Route path="/us" component={OurContent} />
                        <Route path="/services" component={Services} />
                        {/* <Route path="/rankings" component={Rankings} /> */}
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

export default ContentSwitch;