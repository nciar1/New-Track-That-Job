import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class TrackerTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteTracker = this.deleteTracker.bind(this);
    }

    deleteTracker() {
        axios.delete('http://localhost:4000/trackers/delete-tracker/' + this.props.obj._id)
            .then((res) => {
                console.log('Tracker successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.jobTitle}</td>
                <td>{this.props.obj.companyName}</td>
                <td>{this.props.obj.linkToApp }</td>
                <td>{this.props.obj.appDeadline }</td>

               
                <td>
                    <Link className="edit-link" to={"/edit-student/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteTracker} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}