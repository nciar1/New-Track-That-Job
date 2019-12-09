import React, { Component } from 'react';
import "./Calendar.css"

class Calendar extends Component {
    render() {
        return (
            <div className=".calendarStyle">
                <iframe src="https://calendar.google.com/calendar/embed?src=48n4se9ocvo2kemhtjh5g2cnfo%40group.calendar.google.com&ctz=America%2FNew_York"></iframe>
            </div>
        )
    }
}

export default Calendar;