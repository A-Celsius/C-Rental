import React from 'react'

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
    style={{ backgroundImage: 'url("images/bg_3.jpg")' }}
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
                      style={{ backgroundImage: "url(images/car-1.jpg)" }}
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
                      style={{ backgroundImage: "url(images/car-2.jpg)" }}
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
                      style={{ backgroundImage: "url(images/car-3.jpg)" }}
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
                      style={{ backgroundImage: "url(images/car-4.jpg)" }}
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
                      style={{ backgroundImage: "url(images/car-5.jpg)" }}
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
                      style={{ backgroundImage: "url(images/car-6.jpg)" }}
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

export default Pricing
