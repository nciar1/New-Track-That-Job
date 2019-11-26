import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

export default class EditTracker extends Component {

  constructor(props) {
    super(props)

    this.onChangeTrackerJobTitle = this.onChangeTrackerJobTitle.bind(this);
    this.onChangeTrackerCompanyName = this.onChangeTrackerCompanyName.bind(this);
    this.onChangeTrackerLinkToApp = this.onChangeTrackerLinkToApp.bind(this);
    this.onChangeTrackerAppDeadline = this.onChangeTrackerAppDeadline.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      jobTitle: '',
      companyName: '',
      linkToApp: '',
      appDeadline: ''
      
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/trackers/edit-tracker/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          jobTitle:res.data.jobTitle,
      companyName: res.data.companyName,
      linkToApp: res.data.linkToApp,
      appDeadline:res.data.appDeadline
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
  onSubmit(e) {
    e.preventDefault()

    const trackerObject = {
    jobTitle:this.state.jobTitle,
      companyName: this.state.companyName,
      linkToApp: this.state.linkToApp,
      appDeadline:this.state.appDeadline
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
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Job Title</Form.Label>
          <Form.Control type="text" value={this.state.jobTitle} onChange={this.onChangeTrackerJobTitle} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" value={this.state.companyName} onChange={this.onChangeTrackerCompanyName} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Link to App</Form.Label>
          <Form.Control type="text" value={this.state.linkToApp} onChange={this.onChangeTrackerLinkToApp} />
        </Form.Group>

        <Form.Group controlId="Date">
          <Form.Label>App Deadline</Form.Label>
          <Form.Control type="date" value={this.state.appDeadline} onChange={this.onChangeTrackerAppDeadline} />
        </Form.Group>


        <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
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
          Update Tracker
        </Button>
      </Form>
    </div>);
  }
}