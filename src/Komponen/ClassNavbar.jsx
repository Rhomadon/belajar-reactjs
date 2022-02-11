import React, { Component } from 'react'

export default class ClassNavbar extends Component {
  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light shadow-sm fixed-top"><div class="container">My Portfolio<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#Hero">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#About">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Skills">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Projects">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Testi">Testimoni</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
