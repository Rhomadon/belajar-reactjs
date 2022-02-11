import React, { Component } from 'react'

export default class ClassSkills extends Component {
  render() {
    return (
        <section>
        <div class="container">
          <div class="row text-center mb-4">
            <div class="col"><h3>Skills</h3></div>
          </div>
          <div class="row justify-content-center fs-5 text-center">
            <div class="col-md-4 mb-3">
              <h5>Hard Skills</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
              </ul>
            </div>
            <div class="col-md-4 mb-3">
              <h5>Soft Skills</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
              </ul>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffe4b5"
            fill-opacity="1"
            d="M0,224L0,192L130.9,192L130.9,96L261.8,96L261.8,96L392.7,96L392.7,192L523.6,192L523.6,256L654.5,256L654.5,160L785.5,160L785.5,224L916.4,224L916.4,160L1047.3,160L1047.3,288L1178.2,288L1178.2,96L1309.1,96L1309.1,160L1440,160L1440,320L1309.1,320L1309.1,320L1178.2,320L1178.2,320L1047.3,320L1047.3,320L916.4,320L916.4,320L785.5,320L785.5,320L654.5,320L654.5,320L523.6,320L523.6,320L392.7,320L392.7,320L261.8,320L261.8,320L130.9,320L130.9,320L0,320L0,320Z"
          ></path>
        </svg>
      </section>
    )
  }
}
