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
        <div class="row">
          
      <Link className="edit-link" to={"/create-tracker/"}>
                        + Add Tracker
                    </Link>
                    <div class="col-sm-7"></div>
                    <div class="col-sm-3"></div>
                   
         

                    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Sort
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Date</a>
    <a class="dropdown-item" href="#">Job</a>
    <a class="dropdown-item" href="#">Company</a>
    <a class="dropdown-item" href="#">Favorites</a>

  </div>
</div>  

</div> 

  
          {this.DataTable()}
          
  
    </Container>
    
    );

  }
}