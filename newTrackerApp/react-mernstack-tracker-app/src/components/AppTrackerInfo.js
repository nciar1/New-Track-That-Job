import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Stepper from 'react-stepper-horizontal';
import { Link } from 'react-router-dom';


export default class AppTrackerInfo extends Component {

  constructor(props) {
    super(props)

    this.onChangeTrackerJobTitle = this.onChangeTrackerJobTitle.bind(this);
    this.onChangeTrackerCompanyName = this.onChangeTrackerCompanyName.bind(this);
    this.onChangeTrackerLinkToApp = this.onChangeTrackerLinkToApp.bind(this);
    this.onChangeTrackerAppDeadline = this.onChangeTrackerAppDeadline.bind(this);
    this.onChangeTrackerAppProgress = this.onChangeTrackerAppProgress.bind(this);
    this.onChangeTrackerSalary = this.onChangeTrackerSalary.bind(this);
    this.onChangeTrackerSkillsRequired = this.onChangeTrackerSkillsRequired.bind(this);
    this.onChangeTrackerAdditionalNotes = this.onChangeTrackerAdditionalNotes.bind(this);
    this.onChangeTrackerCompanyValues = this.onChangeTrackerCompanyValues.bind(this);
    this.onChangeTrackerWhatTheyDo = this.onChangeTrackerWhatTheyDo.bind(this);
    this.onChangeTrackerWebsite= this.onChangeTrackerWebsite.bind(this);
    this.onChangeTrackerStar= this.onChangeTrackerStar.bind(this);
    this.onChangeTrackerLocation= this.onChangeTrackerLocation.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      jobTitle: '',
      companyName: '',
      linkToApp: '',
      appDeadline: '',
      progress: '',
      salary: '',
      skillsRequired: '',
      additionalNotes:'',
      companyValues:'',
      whatTheyDo:'',
      website:'',
      star: '',
      location:''
      
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/trackers/edit-tracker/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          jobTitle:res.data.jobTitle,
      companyName: res.data.companyName,
      linkToApp: res.data.linkToApp,
      appDeadline:res.data.appDeadline,
       progress: res.data.progress,
      salary: res.data.salary,
      skillsRequired: res.data.skillsRequired,
      additionalNotes:res.data.additionalNotes,
      companyValues:res.data.companyValues,
      whatTheyDo:res.data.whatTheyDo,
      website:res.data.website,
      star: res.data.star,
      location: res.data.location

        });

      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeTrackerJobTitle(e) {
    this.setState({ jobTitle: e.target.value })
  }

  onChangeTrackerCompanyName(e) {
    this.setState({ companyName: e.target.value })
  }

  onChangeTrackerLinkToApp(e) {
    this.setState({ linkToApp: e.target.value })
  }

  onChangeTrackerAppDeadline(e) {
    this.setState({ appDeadline: e.target.value })
  }

  onChangeTrackerAppProgress(e) {
    this.setState({ progress: e.target.value })
  }

  onChangeTrackerSalary(e) {
    this.setState({ salary: e.target.value })
  }

  onChangeTrackerSkillsRequired(e) {
    this.setState({ skillsRequired: e.target.value })
  }

  onChangeTrackerAdditionalNotes(e) {
    this.setState({ additionalNotes: e.target.value })
  }

  onChangeTrackerCompanyValues(e) {
    this.setState({ companyValues: e.target.value })
  }


  onChangeTrackerWhatTheyDo(e) {
    this.setState({ whatTheyDo: e.target.value })
  }

  onChangeTrackerWebsite(e) {
    this.setState({ website: e.target.value })
  }

  onChangeTrackerStar(e) {
    this.setState({ star: e.target.value })
  }

  onChangeTrackerLocation(e) {
    this.setState({ location: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const trackerObject = {
      jobTitle: this.state.jobTitle,
      companyName: this.state.companyName,
      linkToApp: this.state.linkToApp,
      appDeadline: this.state.appDeadline,
      progress: this.state.progress,
      location: this.state.location,
      salary: this.state.salary,
      skillsRequired: this.state.skillsRequired,
      additionalNotes:this.state.additionalNotes,
      companyValues:this.state.companyValues,
      whatTheyDo:this.state.whatTheyDo,
      website:this.setState.website,
      star: this.setState.star
    };


    axios.put('http://localhost:4000/trackers/edit-tracker/' + this.props.match.params.id, trackerObject)
      .then((res) => {
        console.log(res.data)
        console.log('Tracker successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to List 
    this.props.history.push('/tracker-list')
  }


  render() {
    return (
      <div class="mt-lg-4">

      <div className="form-wrapper">
      <Card.Header>General Tracker</Card.Header>
          
      <h1 className="product-description">{this.state.jobTitle}</h1>  
   
      <p className="product-description">   <b>Company Name: </b>{this.state.companyName}</p>  
      <p className="product-description"> <b>App: </b>
      <a href={this.state.linkToApp}target="_blank">{this.state.linkToApp}</a>
      </p>  
      <p className="product-description"><b>Deadline: </b>{this.state.appDeadline}</p>  
      <Stepper steps={ [{title: 'App Started'}, {title:'App Submitted'}, {title: 'Interview Scheduled'}, {title: 'Interview Complete, Awaiting Response'}] } activeStep={ this.state.progress } />


     
        
  
  
    <Accordion>
      <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          + View Notes
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
      

        <p className="product-description"><b>Location: </b>{this.state.location} </p>
        <p className="product-description"><b>Salary: </b>{this.state.salary} </p>

        <p className="product-description"><b>Skills Required: </b>{this.state.skillsRequired} </p>

        <p className="product-description"><b>Additional Notes: </b>{this.state.additionalNotes} </p>

        </Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="1">
          +Company Bio
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
        <Card.Body>
        
        <p className="product-description"><b>Company Values: </b>{this.state.companyValues} </p>

        <p className="product-description"><b>What They Do: </b>{this.state.whatTheyDo} </p>
        <a href={this.state.website}target="_blank"><b>Website: </b>{this.state.website}</a>
        


  
  
  
  
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>


  
  <Link to="/tracker-list">
     <button type="button">
          Back to List
     </button>
 </Link>
  
    
    </div>
    </div>
    );
 
  }
}