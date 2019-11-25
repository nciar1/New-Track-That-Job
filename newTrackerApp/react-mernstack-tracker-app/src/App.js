import React from "react";
import React, { Component } from 'react';
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar"
 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateTracker from "./components/create-tracker.component";
import EditTracker from "./components/edit-tracker.component";
import TrackerList from "./components/tracker-list.component";

function App() {
  return (<Router>
    <div className="App">
     <NavBar />
      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateTracker} />
                <Route path="/create-tracker" component={CreateTracker} />
                <Route path="/edit-tracker/:id" component={EditTracker} />
                <Route path="/tracker-list" component={TrackerList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

class App extends Component {
  state =  {
    selectedFile: null,
    imagePreviewUrl: null
	
  };
 
  fileChangedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
 
    let reader = new FileReader();
     
    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result
      });
    }
 
    reader.readAsDataURL(event.target.files[0])
 
  }
 
  submit = () => {
 
    var fd = new FormData();
 
    fd.append('file', this.state.selectedFile);
 
    var request = new XMLHttpRequest();
 
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        alert('Uploaded!');
      }
    };
    request.open("POST", "https://us-central1-tutorial-e6ea7.cloudfunctions.net/fileUpload", true);
    request.send(fd);
  }
 
  render() {
 
    let $imagePreview = (<div className="previewText image-container">Please select an Image for Preview</div>);
    if (this.state.imagePreviewUrl) {
      $imagePreview = (<div className="image-container" ><img src={this.state.imagePreviewUrl} alt="icon" width="200" /> </div>);
    }
 
    return (
      <div className="App">
         <input type="file" name="avatar" onChange={this.fileChangedHandler} />
         <button type="button" onClick={this.submit} > Upload </button>
         { $imagePreview }
      </div>
    );
  }
}
export default App;