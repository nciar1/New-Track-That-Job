import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

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
      appDeadline: this.state.appDeadline
    };
    axios.post('http://localhost:4000/trackers/create-tracker',trackerObject)
      .then(res => console.log(res.data));

    this.setState({ jobTitle: '',
    companyName: '',
    linkToApp: '',
    appDeadline: '' })
  }

  render() {
    return (<div className="form-wrapper">
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

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Tracker
        </Button>
      </Form>
    </div>);
  }
}