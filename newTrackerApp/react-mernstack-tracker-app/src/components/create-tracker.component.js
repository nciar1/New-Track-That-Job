import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'


export default class CreateTracker extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeTrackerJobTitle = this.onChangeTrackerJobTitle.bind(this);
    this.onChangeTrackerCompanyName = this.onChangeTrackerCompanyName.bind(this);
    this.onChangeTrackerLinkToApp = this.onChangeTrackerLinkToApp.bind(this);
    this.onChangeTrackerAppDeadline = this.onChangeTrackerAppDeadline.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      jobTitle: '',
      companyName: '',
      linkToApp: '',
      appDeadline: ''
    }
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
    axios.post('http://localhost:4000/trackers/create-tracker',trackerObject)
      .then(res => console.log(res.data));

    this.setState({ 
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
    star: ''
  })

    // Redirect to List 
    this.props.history.push('/tracker-list')
  }

  render() {
    return (
      <div className="form-wrapper">
    <Card>
    <Card.Header>General Tracker</Card.Header>
    
    
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Job Title</Form.Label>
          <Form.Control type="text" value={this.state.jobTitle} onChange={this.onChangeTrackerJobTitle} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="text" value={this.state.companyName} onChange={this.onChangeTrackerCompanyName} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Link to App</Form.Label>
          <Form.Control type="text" value={this.state.linkToApp} onChange={this.onChangeTrackerLinkToApp} />
        </Form.Group>

        <Form.Group controlId="Date">
          <Form.Label>App Deadline </Form.Label>
          <Form.Control type="Date" value={this.state.AppDeadline} onChange={this.onChangeTrackerAppDeadline} />
        </Form.Group>

        <Form.Group controlId="Number">
          <Form.Label>Progress</Form.Label>
          <select value={this.state.progress} onChange={this.onChangeTrackerProgress}>
          <option value="1">Application Started</option>
          <option value="2">Application Submmitted</option>
          <option value="3">Interview Scheduled</option>
          <option value="4">Interview Complete, Awaiting Response</option>
            </select>
        </Form.Group>
        </Form>
        </Card>
      


  <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        + Add Notes
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>

      <Form.Group controlId="Name">
          <Form.Label>Location </Form.Label>
          <Form.Control type="text" value={this.state.location} onChange={this.onChangeTrackerLocation} />
        </Form.Group>

        <Form.Group controlId="Number">
          <Form.Label>Salary </Form.Label>
          <Form.Control type="Number" value={this.state.salary} onChange={this.onChangeTrackerSalary} />
        </Form.Group>

        <Form.Group controlId="Number">
          <Form.Label>Salary </Form.Label>
          <Form.Control type="Number" value={this.state.salary} onChange={this.onChangeTrackerSalary} />
        </Form.Group>



      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

  

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Tracker
        </Button>
        </div>



       
    );
  }
}