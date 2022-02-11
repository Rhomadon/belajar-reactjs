import React, { Component } from 'react'

export default class ClassAbout extends Component {
  render() {
    return (
        <section>
        <div class="container">
          <div class="row text-center mb-4">
            <div class="col"><h3>About</h3></div>
          </div>
          <div class="row justify-content-center fs-5 text-center">
            <div class="col-md-4 mb-3">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam voluptates ipsa, fuga ad deleniti ab unde obcaecati voluptatum enim, ipsum ducimus est labore blanditiis dolor et ipsam expedita voluptatem?</p>
            </div>
            <div class="col-md-4 mb-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, mollitia vel? Eaque assumenda odio minus perspiciatis nostrum sapiente asperiores aliquam iure esse ad suscipit est quam quidem tenetur magnam illum,
                voluptates nihil voluptas veritatis nemo? Soluta eaque alias nam sunt accusamus ratione quaerat temporibus ad.
              </p>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff8dc"
            fill-opacity="1"
            d="M0,128L0,96L120,96L120,0L240,0L240,224L360,224L360,64L480,64L480,192L600,192L600,96L720,96L720,160L840,160L840,128L960,128L960,224L1080,224L1080,256L1200,256L1200,64L1320,64L1320,224L1440,224L1440,320L1320,320L1320,320L1200,320L1200,320L1080,320L1080,320L960,320L960,320L840,320L840,320L720,320L720,320L600,320L600,320L480,320L480,320L360,320L360,320L240,320L240,320L120,320L120,320L0,320L0,320Z"
          ></path>
        </svg>
      </section>
    )
  }
}
