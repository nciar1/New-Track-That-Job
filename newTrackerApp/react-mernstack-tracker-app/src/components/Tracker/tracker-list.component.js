import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TrackerTableRow from './TrackerTableRow';


export default class TrackerList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      trackers: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/trackers/')
      .then(res => {
        this.setState({
          trackers: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.trackers.map((res, i) => {
      return <TrackerTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Company</th>
            <th>Link to App</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}