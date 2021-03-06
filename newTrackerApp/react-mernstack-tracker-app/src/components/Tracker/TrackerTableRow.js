import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import "./TrackerTableRow.css";
import Stepper from 'react-stepper-horizontal';


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
           
           <div className="tracker-container">
                <div className="card">
				<div className="wrapper row">
					<div className="container">
                    </div>
					<div className="container">
						<h3 className="props">{this.props.obj.jobTitle}</h3>
						<p className="product-description">{this.props.obj.companyName}</p>
						<p className="product-description">
                        <a href={this.props.obj.linkToApp} target="_blank">{this.props.obj.linkToApp}</a>




                        </p>
                        <p className="product-description">{this.props.obj.appDeadline}</p>
                        <Stepper steps={ [{title: 'App Started'}, {title:'App Submitted'}, {title: 'Interview Scheduled'}, {title: 'Interview Complete, Awaiting Response'}] } activeStep={ this.props.obj.progress } />
                        <div class="row">
                        <div class="col-md-3">
                        <Link className="edit-link" to={"/edit-tracker/" + this.props.obj._id}>
                        Edit
                    </Link>
                    </div>
                    
                    <div class="col-md-6">
                    <Link className="link" to={"/view-tracker/" + this.props.obj._id}>
                        View More Info
                    </Link>
                    </div>

                    <div class="col-md-3">
                    <Button onClick={this.deleteTracker} size="sm" variant="danger">Delete</Button>
					</div>
					</div>
				</div>
			</div>
            </div>
            </div>

			

          
		


/*
            <Container>
                                

            <tr>


                <td>{this.props.obj.jobTitle}</td>
                <td>{this.props.obj.companyName}</td>
                <td>{this.props.obj.linkToApp }</td>
                <td>new Date({this.props.obj.appDeadline }) 
</td>

               
                <td>
                    <Link className="edit-link" to={"/edit-tracker/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteTracker} size="sm" variant="danger">Delete</Button>
                </td>
            
            </tr>
            </Container>
            */

        );
    }
}