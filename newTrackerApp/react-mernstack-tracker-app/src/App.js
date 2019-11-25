import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar"
 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateTracker from "./components/Tracker/create-tracker.component";
import EditTracker from "./components/Tracker/edit-tracker.component";
import TrackerList from "./components/Tracker/tracker-list.component";

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

export default App;