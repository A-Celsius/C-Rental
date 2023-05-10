import React from 'react'
const bg_1 = require("../images/bg_1.jpg")
// const bg_2 = require("../images/bg_2.jpg")
const bg_3 = require("../images/bg_3.jpg")
const person_1 = require("../images/person_1.jpg")
const person_2 = require("../images/person_2.jpg")
const person_3 = require("../images/person_3.jpg")
// const person_4 = require("../images/person_4.jpg")
const car1 = require("../images/car-1.jpg")
const car2 = require("../images/car-2.jpg")
const car3 = require("../images/car-3.jpg")
const car4 = require("../images/car-4.jpg")
// const car5 = require("../images/car-5.jpg")
// const car6 = require("../images/car-6.jpg")
// const car7 = require("../images/car-7.jpg")
// const car8 = require("../images/car-8.jpg")
// const car9 = require("../images/car-9.jpg")
// const car10 = require("../images/car-10.jpg")
// const car11 = require("../images/car-11.jpg")
// const car12 = require("../images/car-12.jpg")
const image1 = require("../images/image_1.jpg")
const image2 = require("../images/image_2.jpg")
const image3 = require("../images/image_3.jpg")

const Index = () => {
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
            <a href="\contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* END nav */}
  <div
    className="hero-wrap ftco-degree-bg"
    style={{ backgroundImage: `url(${bg_1})`}}
    data-stellar-background-ratio="0.5"
  >
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text justify-content-start align-items-center justify-content-center">
        <div className="col-lg-8 ftco-animate">
          <div className="text w-100 text-center mb-md-5 pb-md-5">
            <h1 className="mb-4">Fast &amp; Easy Way To Rent A Car</h1>
            <p style={{ fontSize: 18 }}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts
            </p>
            <a
              href="https://vimeo.com/45830194"
              className="icon-wrap popup-vimeo d-flex align-items-center mt-4 justify-content-center"
            >
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="ion-ios-play" />
              </div>
              <div className="heading-title ml-5">
                <span>Easy steps for renting a car</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="ftco-section ftco-no-pt bg-light">
    <div className="container">
      <div className="row no-gutters">
        <div className="col-md-12	featured-top">
          <div className="row no-gutters">
            <div className="col-md-4 d-flex align-items-center">
              <form action="#" className="request-form ftco-animate bg-primary">
                <h2>Make your trip</h2>
                <div className="form-group">
                  <label htmlFor="" className="label">
                    Pick-up location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City, Airport, Station, etc"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="" className="label">
                    Drop-off location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City, Airport, Station, etc"
                  />
                </div>
                <div className="d-flex">
                  <div className="form-group mr-2">
                    <label htmlFor="" className="label">
                      Pick-up date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="book_pick_date"
                      placeholder="Date"
                    />
                  </div>
                  <div className="form-group ml-2">
                    <label htmlFor="" className="label">
                      Drop-off date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="book_off_date"
                      placeholder="Date"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="" className="label">
                    Pick-up time
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="time_pick"
                    placeholder="Time"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    defaultValue="Rent A Car Now"
                    className="btn btn-secondary py-3 px-4"
                  />
                </div>
              </form>
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <div className="services-wrap rounded-right w-100">
                <h3 className="heading-section mb-4">
                  Better Way to Rent Your Perfect Cars
                </h3>
                <div className="row d-flex mb-4">
                  <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                    <div className="services w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-route" />
                      </div>
                      <div className="text w-100">
                        <h3 className="heading mb-2">
                          Choose Your Pickup Location
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                    <div className="services w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-handshake" />
                      </div>
                      <div className="text w-100">
                        <h3 className="heading mb-2">Select the Best Deal</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                    <div className="services w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-rent" />
                      </div>
                      <div className="text w-100">
                        <h3 className="heading mb-2">
                          Reserve Your Rental Car
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  <a href="#" className="btn btn-primary py-3 px-4">
                    Reserve Your Perfect Car
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-no-pt bg-light">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 heading-section text-center ftco-animate mb-5">
          <span className="subheading">What we offer</span>
          <h2 className="mb-2">Feeatured Vehicles</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="carousel-car owl-carousel">
            <div className="item">
              <div className="car-wrap rounded ftco-animate">
                <div
                  className="img rounded d-flex align-items-end"
                  style={{ backgroundImage: `url(${car1})`}}
                ></div>
                <div className="text">
                  <h2 className="mb-0">
                    <a href="#">Mercedes Grand Sedan</a>
                  </h2>
                  <div className="d-flex mb-3">
                    <span className="cat">Cheverolet</span>
                    <p className="price ml-auto">
                      $500 <span>/day</span>
                    </p>
                  </div>
                  <p className="d-flex mb-0 d-block">
                    <a href="#" className="btn btn-primary py-2 mr-1">
                      Book now
                    </a>{" "}
                    <a href="#" className="btn btn-secondary py-2 ml-1">
                      Details
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="car-wrap rounded ftco-animate">
                <div
                  className="img rounded d-flex align-items-end"
                  style={{ backgroundImage: `url(${car2})`}}
                ></div>
                <div className="text">
                  <h2 className="mb-0">
                    <a href="#">Mercedes Grand Sedan</a>
                  </h2>
                  <div className="d-flex mb-3">
                    <span className="cat">Cheverolet</span>
                    <p className="price ml-auto">
                      $500 <span>/day</span>
                    </p>
                  </div>
                  <p className="d-flex mb-0 d-block">
                    <a href="#" className="btn btn-primary py-2 mr-1">
                      Book now
                    </a>{" "}
                    <a href="#" className="btn btn-secondary py-2 ml-1">
                      Details
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="car-wrap rounded ftco-animate">
                <div
                  className="img rounded d-flex align-items-end"
                  style={{ backgroundImage: `url(${car3})`}}
                ></div>
                <div className="text">
                  <h2 className="mb-0">
                    <a href="#">Mercedes Grand Sedan</a>
                  </h2>
                  <div className="d-flex mb-3">
                    <span className="cat">Cheverolet</span>
                    <p className="price ml-auto">
                      $500 <span>/day</span>
                    </p>
                  </div>
                  <p className="d-flex mb-0 d-block">
                    <a href="#" className="btn btn-primary py-2 mr-1">
                      Book now
                    </a>{" "}
                    <a href="#" className="btn btn-secondary py-2 ml-1">
                      Details
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="car-wrap rounded ftco-animate">
                <div
                  className="img rounded d-flex align-items-end"
                  style={{ backgroundImage: `url(${car4})`}}
                ></div>
                <div className="text">
                  <h2 className="mb-0">
                    <a href="#">Mercedes Grand Sedan</a>
                  </h2>
                  <div className="d-flex mb-3">
                    <span className="cat">Cheverolet</span>
                    <p className="price ml-auto">
                      $500 <span>/day</span>
                    </p>
                  </div>
                  <p className="d-flex mb-0 d-block">
                    <a href="#" className="btn btn-primary py-2 mr-1">
                      Book now
                    </a>{" "}
                    <a href="#" className="btn btn-secondary py-2 ml-1">
                      Details
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-about">
    <div className="container">
      <div className="row no-gutters">
        <div
          className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center"
          style={{ backgroundImage: "url(images/about.jpg)" }}
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
              <a href="#" className="btn btn-primary py-3 px-4">
                Search Vehicle
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-md-7 text-center heading-section ftco-animate">
          <span className="subheading">Services</span>
          <h2 className="mb-3">Our Latest Services</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="services services-2 w-100 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-wedding-car" />
            </div>
            <div className="text w-100">
              <h3 className="heading mb-2">Wedding Ceremony</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="services services-2 w-100 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-transportation" />
            </div>
            <div className="text w-100">
              <h3 className="heading mb-2">City Transfer</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="services services-2 w-100 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-car" />
            </div>
            <div className="text w-100">
              <h3 className="heading mb-2">Airport Transfer</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="services services-2 w-100 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-transportation" />
            </div>
            <div className="text w-100">
              <h3 className="heading mb-2">Whole City Tour</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    className="ftco-section ftco-intro"
    style={{ backgroundImage: "url(images/bg_3.jpg)" }}
  >
    <div className="overlay" />
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-md-6 heading-section heading-section-white ftco-animate">
          <h2 className="mb-3">
            Do You Want To Earn With Us? So Don't Be Late.
          </h2>
          <a href="#" className="btn btn-primary btn-lg">
            Become A Driver
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section testimony-section bg-light">
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-md-7 text-center heading-section ftco-animate">
          <span className="subheading">Testimonial</span>
          <h2 className="mb-3">Happy Clients</h2>
        </div>
      </div>
      <div className="row ftco-animate">
        <div className="col-md-12">
          <div className="carousel-testimony owl-carousel ftco-owl">
            <div className="item">
              <div className="testimony-wrap rounded text-center py-4 pb-5">
                <div
                  className="user-img mb-2"
                  style={{ backgroundImage: `url(${person_1})`}}
                ></div>
                <div className="text pt-4">
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p className="name">Roger Scott</p>
                  <span className="position">Marketing Manager</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap rounded text-center py-4 pb-5">
                <div
                  className="user-img mb-2"
                  style={{ backgroundImage: `url(${person_2})`}}
                ></div>
                <div className="text pt-4">
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p className="name">Roger Scott</p>
                  <span className="position">Interface Designer</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap rounded text-center py-4 pb-5">
                <div
                  className="user-img mb-2"
                  style={{ backgroundImage: `url(${person_3})`}}
                ></div>
                <div className="text pt-4">
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p className="name">Roger Scott</p>
                  <span className="position">UI Designer</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap rounded text-center py-4 pb-5">
                <div
                  className="user-img mb-2"
                  style={{ backgroundImage: `url(${person_1})`}}
                ></div>
                <div className="text pt-4">
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p className="name">Roger Scott</p>
                  <span className="position">Web Developer</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap rounded text-center py-4 pb-5">
                <div
                  className="user-img mb-2"
                  style={{ backgroundImage: `url(${person_1})`}}
                ></div>
                <div className="text pt-4">
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p className="name">Roger Scott</p>
                  <span className="position">System Analyst</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-md-7 heading-section text-center ftco-animate">
          <span className="subheading">Blog</span>
          <h2>Recent Blog</h2>
        </div>
      </div>
      <div className="row d-flex">
        <div className="col-md-4 d-flex ftco-animate">
          <div className="blog-entry justify-content-end">
            <a
              href="blog-single.html"
              className="block-20"
              style={{ backgroundImage: 'url("images/image_1.jpg")' }}
            ></a>
            <div className="text pt-4">
              <div className="meta mb-3">
                <div>
                  <a href="#">Oct. 29, 2019</a>
                </div>
                <div>
                  <a href="#">Admin</a>
                </div>
                <div>
                  <a href="#" className="meta-chat">
                    <span className="icon-chat" /> 3
                  </a>
                </div>
              </div>
              <h3 className="heading mt-2">
                <a href="#">Why Lead Generation is Key for Business Growth</a>
              </h3>
              <p>
                <a href="#" className="btn btn-primary">
                  Read more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex ftco-animate">
          <div className="blog-entry justify-content-end">
            <a
              href="blog-single.html"
              className="block-20"
              style={{ backgroundImage: 'url("images/image_2.jpg")' }}
            ></a>
            <div className="text pt-4">
              <div className="meta mb-3">
                <div>
                  <a href="#">Oct. 29, 2019</a>
                </div>
                <div>
                  <a href="#">Admin</a>
                </div>
                <div>
                  <a href="#" className="meta-chat">
                    <span className="icon-chat" /> 3
                  </a>
                </div>
              </div>
              <h3 className="heading mt-2">
                <a href="#">Why Lead Generation is Key for Business Growth</a>
              </h3>
              <p>
                <a href="#" className="btn btn-primary">
                  Read more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex ftco-animate">
          <div className="blog-entry">
            <a
              href="blog-single.html"
              className="block-20"
              style={{ backgroundImage: 'url("images/image_3.jpg")' }}
            ></a>
            <div className="text pt-4">
              <div className="meta mb-3">
                <div>
                  <a href="#">Oct. 29, 2019</a>
                </div>
                <div>
                  <a href="#">Admin</a>
                </div>
                <div>
                  <a href="#" className="meta-chat">
                    <span className="icon-chat" /> 3
                  </a>
                </div>
              </div>
              <h3 className="heading mt-2">
                <a href="#">Why Lead Generation is Key for Business Growth</a>
              </h3>
              <p>
                <a href="#" className="btn btn-primary">
                  Read more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    className="ftco-counter ftco-section img bg-light"
    id="section-counter"
  >
    <div className="overlay" />
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
          <div className="block-18">
            <div className="text text-border d-flex align-items-center">
              <strong className="number" data-number={60}>
                0
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
                0
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
                0
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
                0
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

export default Index
