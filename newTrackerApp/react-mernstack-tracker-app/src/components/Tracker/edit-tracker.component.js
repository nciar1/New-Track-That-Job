import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Stepper from 'react-stepper-horizontal';


export default class EditTracker extends Component {

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
      star: ''
      
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
      star: res.data.star

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


    axios.put('http://localhost:4000/trackers/update-tracker/' + this.props.match.params.id, trackerObject)
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
  
      <div className="form-wrapper">
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
            <Form.Label>Rank Your Progress </Form.Label>
            <Form.Control type="Number" min="0" max="4" value={this.state.progress} onChange={this.onChangeTrackerAppProgress} />
          </Form.Group>

          <Stepper steps={ [{title: 'App Started'}, {title:'App Submitted'}, {title: 'Interview Scheduled'}, {title: 'Interview Complete, Awaiting Response'}] } activeStep={ this.state.progress } />
     
        
  
  
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
  
          <Form.Group controlId="text">
            <Form.Label>Skills Required </Form.Label>
            <Form.Control type="textarea" value={this.state.skillsRequired} onChange={this.onChangeTrackerSkillsRequired} />
          </Form.Group>
  
          <Form.Group controlId="text">
            <Form.Label>additionalNotes </Form.Label>
            <Form.Control type="textarea" value={this.state.additionalNotes} onChange={this.onChangeTrackerAdditionalNotes} />
          </Form.Group>
  
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
        
        <Form.Group controlId="text">
            <Form.Label>Company Values </Form.Label>
            <Form.Control type="textarea" value={this.state.companyValues} onChange={this.onChangeTrackerCompanyValues} />
          </Form.Group>
  
          <Form.Group controlId="text">
            <Form.Label> What they Do </Form.Label>
            <Form.Control type="textarea" value={this.state.whatTheyDo} onChange={this.onChangeTrackerWhatTheyDo} />
          </Form.Group>
  
          <Form.Group controlId="text">
            <Form.Label> Website </Form.Label>
            <Form.Control type="text" value={this.state.website} onChange={this.onChangeTrackerWebsite} />
          </Form.Group>
  
  
  
  
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
  
        <Button variant="danger" size="lg" block="block" type="submit">
          Update Tracker
        </Button>
      </Form>
    
    </div>);
  }
}