import React, { Component } from 'react'

export default class AppTrackerView extends Component {
    render() {
        return (
            <div>
            <Link to={"/create-tracker"} className="nav-link">
                  Create Tracker
                </Link>
                <Link to={"/edit-tracker/:id"} className="nav-link">
                  Edit Tracker
                </Link>
                <Link to={"/tracker-list"} className="nav-link">
                  Tracker List
                </Link>

            </div>
        )
    }
}
