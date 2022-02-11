import React, { Component } from 'react'

export default class ClassHero extends Component {
  render() {
    return (
        <section class="jumbotron text-center">
        <img src="https://www.kibrispdr.org/dwn/3/foto-luffy.jpg" alt="luffy" width="200px" class="rounded-circle img-thumbnail" />
        <h1 class="display-6">RHOMADON</h1>
        <p class="lead">Full Stack Developer | mrrhomadon@gmail.com</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffe4b5"
          fill-opacity="1"
          d="M0,256L0,160L120,160L120,288L240,288L240,96L360,96L360,288L480,288L480,192L600,192L600,288L720,288L720,96L840,96L840,224L960,224L960,0L1080,0L1080,128L1200,128L1200,160L1320,160L1320,96L1440,96L1440,320L1320,320L1320,320L1200,320L1200,320L1080,320L1080,320L960,320L960,320L840,320L840,320L720,320L720,320L600,320L600,320L480,320L480,320L360,320L360,320L240,320L240,320L120,320L120,320L0,320L0,320Z"
        ></path>
      </svg>
      </section>
    )
  }
}
