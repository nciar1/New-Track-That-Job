import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import logo from './logo.png';
const NavBar = () => {
return (
    <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">

  <a class="navbar-brand" href="./views/Homepage">
  <img src={logo} style={{width:40, marginTop: -7}} />
  Track That Job
  </a>

  <a class="navbar-brand" href="./Homepage">Logo</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">

      <li class="nav-item">

      <li class="nav-item active">

        <a class="nav-link" href="./Homepage">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/tracker-list">App Tracker <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./LogoutPage">Log Out <span class="sr-only">(current)</span></a>
      </li>
    </li>
    </ul>
  </div>
</nav> 
</div>
)
}

export default NavBar;
