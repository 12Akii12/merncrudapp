import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:'#e3f2fd'}}>
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Table Data</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
        )
    }
}
