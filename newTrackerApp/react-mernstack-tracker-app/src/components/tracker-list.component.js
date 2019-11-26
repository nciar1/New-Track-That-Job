import React, { Component } from "react";
import axios from 'axios';
import TrackerTableRow from './TrackerTableRow';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';



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
    return (
      <Container>
      <Link className="edit-link" to={"/create-tracker/"}>
                        Add Tracker
                    </Link>
  
          {this.DataTable()}
       
  
    </Container>
    
    );

  }
}