import React from "react";
// const bg_1 = require("../images/bg_1.jpg");
// const bg_2 = require("../images/bg_2.jpg");
const bg_3 = require("../images/bg_3.jpg");
const bg_5 = require("../images/bg_5.jpg");
const person_1 = require("../images/person_1.jpg");
const person_2 = require("../images/person_2.jpg");
const person_3 = require("../images/person_3.jpg");
const person_4 = require("../images/person_4.jpg");
// const car1 = require("../images/car-1.jpg");
// const car2 = require("../images/car-2.jpg");
// const car3 = require("../images/car-3.jpg");
// const car4 = require("../images/car-4.jpg");
// const car5 = require("../images/car-5.jpg");
// const car6 = require("../images/car-6.jpg");
// const car7 = require("../images/car-7.jpg");
// const car8 = require("../images/car-8.jpg");
// const car9 = require("../images/car-9.jpg");
// const car10 = require("../images/car-10.jpg");
// const car11 = require("../images/car-11.jpg");
// const car12 = require("../images/car-12.jpg");
// const image1 = require("../images/image_1.jpg");
// const image2 = require("../images/image_2.jpg");
// const image3 = require("../images/image_3.jpg");

const About = () => {
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
    style={{ backgroundImage: `url(${bg_5})` }}
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
              About us <i className="ion-ios-arrow-forward" />
            </span>
          </p>
          <h1 className="mb-3 bread">About Us</h1>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-about">
    <div className="container">
      <div className="row no-gutters">
        <div
          className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center"
          style={{ backgroundImage: `url(${bg_3})` }}
        ></div>
        <div className="col-md-6 wrap-about ftco-animate">
          <div className="heading-section heading-section-white pl-md-5">
            <span className="subheading">About us</span>
            <h2 className="mb-4">Welcome to Carbook</h2>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <p>
              On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word "and" and the Little Blind Text should turn around and return
              to its own, safe country. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <p>
              <a href="\car" className="btn btn-primary py-3 px-4">
                Search Vehicle
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="ftco-counter ftco-section img" id="section-counter">
    <div className="overlay" />
    <div className="container">
    <div className="row">
        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
          <div className="block-18">
            <div className="text text-border d-flex align-items-center">
              <strong className="number" data-number={60}>
                12
              </strong>
              <span>
                Year <br />
                Experienced
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
          <div className="block-18">
            <div className="text text-border d-flex align-items-center">
              <strong className="number" data-number={1090}>
                1090
              </strong>
              <span>
                Total <br />
                Cars
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
          <div className="block-18">
            <div className="text text-border d-flex align-items-center">
              <strong className="number" data-number={2590}>
                2590
              </strong>
              <span>
                Happy <br />
                Customers
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
          <div className="block-18">
            <div className="text d-flex align-items-center">
              <strong className="number" data-number={67}>
                63
              </strong>
              <span>
                Total <br />
                Branches
              </span>
            </div>
          </div>
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

    </div>
  </footer>
</>

    </div>
  );
};

export default About;
