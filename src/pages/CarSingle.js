import React from 'react'

const CarSingle = () => {
  return (
    <div>
      <>
  <nav
    className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div className="container">
      <a className="navbar-brand" href="index.html">
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
          <li className="nav-item">
            <a href="index.html" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="about.html" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="services.html" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="pricing.html" className="nav-link">
              Pricing
            </a>
          </li>
          <li className="nav-item active">
            <a href="car.html" className="nav-link">
              Cars
            </a>
          </li>
          <li className="nav-item">
            <a href="blog.html" className="nav-link">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href="contact.html" className="nav-link">
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
              <a href="index.html">
                Home <i className="ion-ios-arrow-forward" />
              </a>
            </span>{" "}
            <span>
              Car details <i className="ion-ios-arrow-forward" />
            </span>
          </p>
          <h1 className="mb-3 bread">Car Details</h1>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-car-details">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="car-details">
            <div
              className="img rounded"
              style={{ backgroundImage: "url(images/bg_1.jpg)" }}
            />
            <div className="text text-center">
              <span className="subheading">Cheverolet</span>
              <h2>Mercedes Grand Sedan</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services">
            <div className="media-body py-md-4">
              <div className="d-flex mb-3 align-items-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-dashboard" />
                </div>
                <div className="text">
                  <h3 className="heading mb-0 pl-3">
                    Mileage
                    <span>40,000</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services">
            <div className="media-body py-md-4">
              <div className="d-flex mb-3 align-items-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-pistons" />
                </div>
                <div className="text">
                  <h3 className="heading mb-0 pl-3">
                    Transmission
                    <span>Manual</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services">
            <div className="media-body py-md-4">
              <div className="d-flex mb-3 align-items-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-car-seat" />
                </div>
                <div className="text">
                  <h3 className="heading mb-0 pl-3">
                    Seats
                    <span>5 Adults</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services">
            <div className="media-body py-md-4">
              <div className="d-flex mb-3 align-items-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-backpack" />
                </div>
                <div className="text">
                  <h3 className="heading mb-0 pl-3">
                    Luggage
                    <span>4 Bags</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services">
            <div className="media-body py-md-4">
              <div className="d-flex mb-3 align-items-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-diesel" />
                </div>
                <div className="text">
                  <h3 className="heading mb-0 pl-3">
                    Fuel
                    <span>Petrol</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 pills">
          <div className="bd-example bd-example-tabs">
            <div className="d-flex justify-content-center">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="pills-description-tab"
                    data-toggle="pill"
                    href="#pills-description"
                    role="tab"
                    aria-controls="pills-description"
                    aria-expanded="true"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-manufacturer-tab"
                    data-toggle="pill"
                    href="#pills-manufacturer"
                    role="tab"
                    aria-controls="pills-manufacturer"
                    aria-expanded="true"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-review-tab"
                    data-toggle="pill"
                    href="#pills-review"
                    role="tab"
                    aria-controls="pills-review"
                    aria-expanded="true"
                  >
                    Review
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-description"
                role="tabpanel"
                aria-labelledby="pills-description-tab"
              >
                <div className="row">
                  <div className="col-md-4">
                    <ul className="features">
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Airconditions
                      </li>
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Child Seat
                      </li>
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        GPS
                      </li>
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Luggage
                      </li>
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Music
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="features">
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Seat Belt
                      </li>
                      <li className="remove">
                        <span className="ion-ios-close" />
                        Sleeping Bed
                      </li>
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Water
                      </li>
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Bluetooth
                      </li>
                      <li className="remove">
                        <span className="ion-ios-close" />
                        Onboard computer
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="features">
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Audio input
                      </li>
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Long Term Trips
                      </li>
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Car Kit
                      </li>
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Remote central locking
                      </li>
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Climate control
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-manufacturer"
                role="tabpanel"
                aria-labelledby="pills-manufacturer-tab"
              >
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life One day however a
                  small line of blind text by the name of Lorem Ipsum decided to
                  leave for the far World of Grammar.
                </p>
                <p>
                  When she reached the first hills of the Italic Mountains, she
                  had a last view back on the skyline of her hometown
                  Bookmarksgrove, the headline of Alphabet Village and the
                  subline of her own road, the Line Lane. Pityful a rethoric
                  question ran over her cheek, then she continued her way.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="pills-review"
                role="tabpanel"
                aria-labelledby="pills-review-tab"
              >
                <div className="row">
                  <div className="col-md-7">
                    <h3 className="head">23 Reviews</h3>
                    <div className="review d-flex">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(images/person_1.jpg)" }}
                      />
                      <div className="desc">
                        <h4>
                          <span className="text-left">Jacob Webb</span>
                          <span className="text-right">14 March 2018</span>
                        </h4>
                        <p className="star">
                          <span>
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                          </span>
                          <span className="text-right">
                            <a href="#" className="reply">
                              <i className="icon-reply" />
                            </a>
                          </span>
                        </p>
                        <p>
                          When she reached the first hills of the Italic
                          Mountains, she had a last view back on the skyline of
                          her hometown Bookmarksgrov
                        </p>
                      </div>
                    </div>
                    <div className="review d-flex">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(images/person_2.jpg)" }}
                      />
                      <div className="desc">
                        <h4>
                          <span className="text-left">Jacob Webb</span>
                          <span className="text-right">14 March 2018</span>
                        </h4>
                        <p className="star">
                          <span>
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                          </span>
                          <span className="text-right">
                            <a href="#" className="reply">
                              <i className="icon-reply" />
                            </a>
                          </span>
                        </p>
                        <p>
                          When she reached the first hills of the Italic
                          Mountains, she had a last view back on the skyline of
                          her hometown Bookmarksgrov
                        </p>
                      </div>
                    </div>
                    <div className="review d-flex">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(images/person_3.jpg)" }}
                      />
                      <div className="desc">
                        <h4>
                          <span className="text-left">Jacob Webb</span>
                          <span className="text-right">14 March 2018</span>
                        </h4>
                        <p className="star">
                          <span>
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                          </span>
                          <span className="text-right">
                            <a href="#" className="reply">
                              <i className="icon-reply" />
                            </a>
                          </span>
                        </p>
                        <p>
                          When she reached the first hills of the Italic
                          Mountains, she had a last view back on the skyline of
                          her hometown Bookmarksgrov
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="rating-wrap">
                      <h3 className="head">Give a Review</h3>
                      <div className="wrap">
                        <p className="star">
                          <span>
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            (98%)
                          </span>
                          <span>20 Reviews</span>
                        </p>
                        <p className="star">
                          <span>
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            (85%)
                          </span>
                          <span>10 Reviews</span>
                        </p>
                        <p className="star">
                          <span>
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            (70%)
                          </span>
                          <span>5 Reviews</span>
                        </p>
                        <p className="star">
                          <span>
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            (10%)
                          </span>
                          <span>0 Reviews</span>
                        </p>
                        <p className="star">
                          <span>
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            <i className="ion-ios-star" />
                            (0%)
                          </span>
                          <span>0 Reviews</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-no-pt">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 heading-section text-center ftco-animate mb-5">
          <span className="subheading">Choose Car</span>
          <h2 className="mb-2">Related Cars</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="car-wrap rounded ftco-animate">
            <div
              className="img rounded d-flex align-items-end"
              style={{ backgroundImage: "url(images/car-1.jpg)" }}
            ></div>
            <div className="text">
              <h2 className="mb-0">
                <a href="car-single.html">Mercedes Grand Sedan</a>
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
                <a
                  href="car-single.html"
                  className="btn btn-secondary py-2 ml-1"
                >
                  Details
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="car-wrap rounded ftco-animate">
            <div
              className="img rounded d-flex align-items-end"
              style={{ backgroundImage: "url(images/car-2.jpg)" }}
            ></div>
            <div className="text">
              <h2 className="mb-0">
                <a href="car-single.html">Range Rover</a>
              </h2>
              <div className="d-flex mb-3">
                <span className="cat">Subaru</span>
                <p className="price ml-auto">
                  $500 <span>/day</span>
                </p>
              </div>
              <p className="d-flex mb-0 d-block">
                <a href="#" className="btn btn-primary py-2 mr-1">
                  Book now
                </a>{" "}
                <a
                  href="car-single.html"
                  className="btn btn-secondary py-2 ml-1"
                >
                  Details
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="car-wrap rounded ftco-animate">
            <div
              className="img rounded d-flex align-items-end"
              style={{ backgroundImage: "url(images/car-3.jpg)" }}
            ></div>
            <div className="text">
              <h2 className="mb-0">
                <a href="car-single.html">Mercedes Grand Sedan</a>
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
                <a
                  href="car-single.html"
                  className="btn btn-secondary py-2 ml-1"
                >
                  Details
                </a>
              </p>
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
                <a href="#" className="py-2 d-block">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="py-2 d-block">
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
                <a href="#" className="py-2 d-block">
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

export default CarSingle
