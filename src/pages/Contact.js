import React from 'react'
// const bg_1 = require("../images/bg_1.jpg")
// const bg_2 = require("../images/bg_2.jpg")
// const bg_3 = require("../images/bg_3.jpg")
const bg_6 = require("../images/bg_6.jpg")
// const person_1 = require("../images/person_1.jpg")
// const person_2 = require("../images/person_2.jpg")
// const person_3 = require("../images/person_3.jpg")
// const person_4 = require("../images/person_4.jpg")
// const car1 = require("../images/car-1.jpg")
// const car2 = require("../images/car-2.jpg")
// const car3 = require("../images/car-3.jpg")
// const car4 = require("../images/car-4.jpg")
// const car5 = require("../images/car-5.jpg")
// const car6 = require("../images/car-6.jpg")
// const car7 = require("../images/car-7.jpg")
// const car8 = require("../images/car-8.jpg")
// const car9 = require("../images/car-9.jpg")
// const car10 = require("../images/car-10.jpg")
// const car11 = require("../images/car-11.jpg")
// const car12 = require("../images/car-12.jpg")

const Contanct = () => {
  return (
    <div>
      <>
      <nav
    className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div className="container">
      <a className="navbar-brand" href="\index">
        Car<span>Book</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="oi oi-menu" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a href="\index" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="\about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="\services" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="\pricing" className="nav-link">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="\car" className="nav-link">
              Cars
            </a>
          </li>
          <li className="nav-item">
            <a href="\blog" className="nav-link">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href="\contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* END nav */}
  <section
    className="hero-wrap hero-wrap-2 js-fullheight"
    style={{ backgroundImage: `url(${bg_6})`}}
    data-stellar-background-ratio="0.5"
  >
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
        <div className="col-md-9 ftco-animate pb-5">
          <p className="breadcrumbs">
            <span className="mr-2">
              <a href="\">
                Home <i className="ion-ios-arrow-forward" />
              </a>
            </span>{" "}
            <span>
              Contact <i className="ion-ios-arrow-forward" />
            </span>
          </p>
          <h1 className="mb-3 bread">Contact Us</h1>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section contact-section">
    <div className="container">
      <div className="row d-flex mb-5 contact-info">
        <div className="col-md-4">
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="border w-100 p-4 rounded mb-2 d-flex">
                <div className="icon mr-3">
                  <span className="icon-map-o" />
                </div>
                <p>
                  <span>Address:</span> 198 West 21th Street, Suite 721 New York
                  NY 10016
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="border w-100 p-4 rounded mb-2 d-flex">
                <div className="icon mr-3">
                  <span className="icon-mobile-phone" />
                </div>
                <p>
                  <span>Phone:</span>{" "}
                  <a href="tel://1234567920">+ 1235 2355 98</a>
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="border w-100 p-4 rounded mb-2 d-flex">
                <div className="icon mr-3">
                  <span className="icon-envelope-o" />
                </div>
                <p>
                  <span>Email:</span>{" "}
                  <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 block-9 mb-md-5">
          <form action="#" className="bg-light p-5 contact-form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                name=""
                id=""
                cols={30}
                rows={7}
                className="form-control"
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                defaultValue="Send Message"
                className="btn btn-primary py-3 px-5"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div id="map" className="bg-white" />
        </div>
      </div>
    </div>
  </section>
  <footer className="ftco-footer ftco-bg-dark ftco-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">
              <a href="#" className="logo">
                Car<span>book</span>
              </a>
            </h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <li className="ftco-animate">
                <a href="#">
                  <span className="icon-twitter" />
                </a>
              </li>
              <li className="ftco-animate">
                <a href="#">
                  <span className="icon-facebook" />
                </a>
              </li>
              <li className="ftco-animate">
                <a href="#">
                  <span className="icon-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4 ml-md-5">
            <h2 className="ftco-heading-2">Information</h2>
            <ul className="list-unstyled">
              <li>
                <a href="\about" className="py-2 d-block">
                  About
                </a>
              </li>
              <li>
                <a href="\services" className="py-2 d-block">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="py-2 d-block">
                  Term and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="py-2 d-block">
                  Best Price Guarantee
                </a>
              </li>
              <li>
                <a href="#" className="py-2 d-block">
                  Privacy &amp; Cookies Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Customer Support</h2>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="py-2 d-block">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="py-2 d-block">
                  Payment Option
                </a>
              </li>
              <li>
                <a href="#" className="py-2 d-block">
                  Booking Tips
                </a>
              </li>
              <li>
                <a href="#" className="py-2 d-block">
                  How it works
                </a>
              </li>
              <li>
                <a href="\contact" className="py-2 d-block">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Have a Questions?</h2>
            <div className="block-23 mb-3">
              <ul>
                <li>
                  <span className="icon icon-map-marker" />
                  <span className="text">
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </span>
                </li>
                <li>
                  <a href="#">
                    <span className="icon icon-phone" />
                    <span className="text">+2 392 3929 210</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon icon-envelope" />
                    <span className="text">info@yourdomain.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with{" "}
            <i className="icon-heart color-danger" aria-hidden="true" /> by{" "}
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </div>
  </footer>
</>

    </div>
  )
}

export default Contanct
