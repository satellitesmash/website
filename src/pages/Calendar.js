import React, { Component } from 'react';

export default class Calendar extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>Event Calendar</h1>
                <p className="lead">Check out the upcoming events for Washington!</p>
                <iframe title="calendar" width="100%" height="720px" src="https://calendar.google.com/calendar/embed?src=kimv14a28ldv8frb07m9lma130@group.calendar.google.com&ctz=America/Los_Angeles&pli=1"></iframe>
            </React.Fragment>   
        );
    }

}