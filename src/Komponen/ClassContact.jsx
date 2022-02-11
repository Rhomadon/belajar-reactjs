import React, { Component } from 'react'

export default class ClassContact extends Component {
  render() {
    return (
        <section>
        <div class="container">
          <div class="row text-center">
            <div class="col mb-3">
              <h3>Contact Me</h3>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6">
              <form>
                <div class="mb-3">
                  <label for="name" class="form-label">Full Name</label>
                  <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Full Name" />
                </div>
                <div class="mb-3">
                  <label for="email1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="email1" aria-describedby="email" placeholder="Email@example.com" />
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">Message</label>
                  <textarea class="form-control" id="message" rows="3" placeholder="Message" ></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff8dc"
            fill-opacity="1"
            d="M0,64L0,96L130.9,96L130.9,160L261.8,160L261.8,96L392.7,96L392.7,64L523.6,64L523.6,192L654.5,192L654.5,160L785.5,160L785.5,64L916.4,64L916.4,224L1047.3,224L1047.3,64L1178.2,64L1178.2,224L1309.1,224L1309.1,288L1440,288L1440,320L1309.1,320L1309.1,320L1178.2,320L1178.2,320L1047.3,320L1047.3,320L916.4,320L916.4,320L785.5,320L785.5,320L654.5,320L654.5,320L523.6,320L523.6,320L392.7,320L392.7,320L261.8,320L261.8,320L130.9,320L130.9,320L0,320L0,320Z"
          ></path>
        </svg>
      </section>
    )
  }
}
