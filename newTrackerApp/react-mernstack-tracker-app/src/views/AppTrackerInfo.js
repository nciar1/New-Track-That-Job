import progressForm from './components/progressForm/'
import React, { Component } from 'react'

export default class AppTrackerInfo extends Component {

    constructor(props) {
    super(props)
    
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