import React from 'react'
// const bg_1 = require("../images/bg_1.jpg")
// const bg_2 = require("../images/bg_2.jpg")
const bg_3 = require("../images/bg_3.jpg")
// const person_1 = require("../images/person_1.jpg")
// const person_2 = require("../images/person_2.jpg")
// const person_3 = require("../images/person_3.jpg")
// const person_4 = require("../images/person_4.jpg")
const car1 = require("../images/car-1.jpg")
const car2 = require("../images/car-2.jpg")
const car3 = require("../images/car-3.jpg")
const car4 = require("../images/car-4.jpg")
const car5 = require("../images/car-5.jpg")
const car6 = require("../images/car-6.jpg")
// const car7 = require("../images/car-7.jpg")
// const car8 = require("../images/car-8.jpg")
// const car9 = require("../images/car-9.jpg")
// const car10 = require("../images/car-10.jpg")
// const car11 = require("../images/car-11.jpg")
// const car12 = require("../images/car-12.jpg")
// const image1 = require("../images/image_1.jpg")
// const image2 = require("../images/image_2.jpg")
// const image3 = require("../images/image_3.jpg")

const Pricing = () => {
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
  <section
    className="hero-wrap hero-wrap-2 js-fullheight"
    style={{ backgroundImage: `url(${bg_3})`}}
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
              Pricing <i className="ion-ios-arrow-forward" />
            </span>
          </p>
          <h1 className="mb-3 bread">Pricing</h1>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-cart">
    <div className="container">
      <div className="row">
        <div className="col-md-12 ftco-animate">
          <div className="car-list">
            <table className="table">
              <thead className="thead-primary">
                <tr className="text-center">
                  <th>&nbsp;</th>
                  <th>&nbsp;</th>
                  <th className="bg-primary heading">Per Hour Rate</th>
                  <th className="bg-dark heading">Per Day Rate</th>
                  <th className="bg-black heading">Leasing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="car-image">
                    <div
                      className="img"
                      style={{ backgroundImage: `url(${car1})`}}
                    />
                  </td>
                  <td className="product-name">
                    <h3>Cheverolet SUV Car</h3>
                    <p className="mb-0 rated">
                      <span>rated:</span>
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </p>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 10.99
                        </span>
                        <span className="per">/per hour</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 60.99
                        </span>
                        <span className="per">/per day</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 995.99
                        </span>
                        <span className="per">/per month</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                </tr>
                {/* END TR*/}
                <tr className="">
                  <td className="car-image">
                    <div
                      className="img"
                      style={{ backgroundImage: `url(${car2})`}}
                    />
                  </td>
                  <td className="product-name">
                    <h3>Cheverolet SUV Car</h3>
                    <p className="mb-0 rated">
                      <span>rated:</span>
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </p>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 10.99
                        </span>
                        <span className="per">/per hour</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 60.99
                        </span>
                        <span className="per">/per day</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 995.99
                        </span>
                        <span className="per">/per month</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                </tr>
                {/* END TR*/}
                <tr className="">
                  <td className="car-image">
                    <div
                      className="img"
                      style={{ backgroundImage: `url(${car3})`}}
                    />
                  </td>
                  <td className="product-name">
                    <h3>Cheverolet SUV Car</h3>
                    <p className="mb-0 rated">
                      <span>rated:</span>
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </p>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 10.99
                        </span>
                        <span className="per">/per hour</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 60.99
                        </span>
                        <span className="per">/per day</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 995.99
                        </span>
                        <span className="per">/per month</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                </tr>
                {/* END TR*/}
                <tr className="">
                  <td className="car-image">
                    <div
                      className="img"
                      style={{ backgroundImage: `url(${car4})`}}
                    />
                  </td>
                  <td className="product-name">
                    <h3>Cheverolet SUV Car</h3>
                    <p className="mb-0 rated">
                      <span>rated:</span>
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </p>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 10.99
                        </span>
                        <span className="per">/per hour</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 60.99
                        </span>
                        <span className="per">/per day</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 995.99
                        </span>
                        <span className="per">/per month</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                </tr>
                {/* END TR*/}
                <tr className="">
                  <td className="car-image">
                    <div
                      className="img"
                      style={{ backgroundImage: `url(${car5})`}}
                    />
                  </td>
                  <td className="product-name">
                    <h3>Cheverolet SUV Car</h3>
                    <p className="mb-0 rated">
                      <span>rated:</span>
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </p>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 10.99
                        </span>
                        <span className="per">/per hour</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 60.99
                        </span>
                        <span className="per">/per day</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 995.99
                        </span>
                        <span className="per">/per month</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                </tr>
                {/* END TR*/}
                <tr className="">
                  <td className="car-image">
                    <div
                      className="img"
                      style={{ backgroundImage: `url(${car6})`}}
                    />
                  </td>
                  <td className="product-name">
                    <h3>Cheverolet SUV Car</h3>
                    <p className="mb-0 rated">
                      <span>rated:</span>
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </p>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 10.99
                        </span>
                        <span className="per">/per hour</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 60.99
                        </span>
                        <span className="per">/per day</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 995.99
                        </span>
                        <span className="per">/per month</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                </tr>
                {/* END TR*/}
              </tbody>
            </table>
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
        
      </div>
    </div>
  </footer>
</>

    </div>
  )
}

export default Pricing
