import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Nav";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.css";

function Homepage() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                   Home Page
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            </header>
        </div>
    );
}

export default Homepage;
