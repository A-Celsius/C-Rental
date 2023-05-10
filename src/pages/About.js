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
                style={{ backgroundImage: "url(images/about.jpg)" }}
              ></div>
              <div className="col-md-6 wrap-about ftco-animate">
                <div className="heading-section heading-section-white pl-md-5">
                  <span className="subheading">About us</span>
                  <h2 className="mb-4">Welcome to Carbook</h2>
                  <p>Welcome to our Car Rental App! </p>
                  <p>
                    Our mission is to provide
                    affordable and convenient car rental services to travelers
                    around the world. We understand that renting a car can be a
                    stressful experience, which is why we aim to make the
                    process as easy and hassle-free as possible.
                  </p>
                  <p>
                  Our company was founded in [year] with a simple goal in mind: to provide customers with high-quality rental vehicles at competitive prices. Since then, we have grown to become one of the leading car rental providers in the industry, with a reputation for exceptional service and customer satisfaction. 
                  </p>
                  <p>At [company name], we are committed to putting our customers first. We believe that renting a car should be a seamless and enjoyable experience, which is why we offer a wide range of vehicles to choose from, including economy cars, SUVs, and luxury vehicles. Our rental rates are competitive, and we offer flexible rental options to meet the needs of every traveler.Our team is comprised of experienced professionals who are passionate about providing the best possible service to our customers. We work tirelessly to ensure that every rental experience is a positive one, and we are always looking for ways to improve and innovate our services.</p>
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
        <section
          className="ftco-section ftco-intro"
          style={{ backgroundImage: `url(${bg_3})` }}
        >
          <div className="overlay" />
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-md-6 heading-section heading-section-white ftco-animate">
                <h2 className="mb-3">
                  Do You Want To Join Us? So Don't Be Late.
                </h2>
                <a href="#" className="btn btn-primary btn-lg">
                  Become A User
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section testimony-section bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7 text-center heading-section ftco-animate fadeInUp ftco-animated">
                <span className="subheading">Testimonial</span>
                <h2 className="mb-3">Happy Clients</h2>
              </div>
            </div>
            <div className="row ftco-animate fadeInUp ftco-animated">
              <div className="col-md-12">
                <div class="carousel-testimony owl-carousel ftco-owl owl-loaded owl-drag">
                  <div class="owl-stage-outer">
                    <div
                      class="owl-stage"
                      style={{
                        transition: "all 0.25s ease 0s",
                        width: "4180px",
                        transform: "translate3d(-760px, 0px, 0px)",
                      }}
                    >
                      <div
                        class="owl-item active center cloned"
                        style={{ width: "350px", marginRight: "30px" }}
                      >
                        <div class="item">
                          <div class="testimony-wrap rounded text-center py-4 pb-5">
                            <div
                              class="user-img mb-2"
                              style={{ backgroundImage: `url(${person_1})` }}
                            ></div>
                            <div class="text pt-4">
                              <p class="mb-4">
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts.
                              </p>
                              <p class="name">Roger Scott</p>
                              <span class="position">UI Designer</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="owl-item active center cloned"
                        style={{ width: "350px", marginRight: "30px" }}
                      >
                        <div class="item">
                          <div class="testimony-wrap rounded text-center py-4 pb-5">
                            <div
                              class="user-img mb-2"
                              style={{ backgroundImage: `url(${person_1})` }}
                            ></div>
                            <div class="text pt-4">
                              <p class="mb-4">
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts.
                              </p>
                              <p class="name">Roger Scott</p>
                              <span class="position">Web Developer</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="owl-item active center cloned active"
                        style={{ width: "350px", marginRight: "30px" }}
                      >
                        <div class="item">
                          <div class="testimony-wrap rounded text-center py-4 pb-5">
                            <div
                              class="user-img mb-2"
                              style={{ backgroundImage: `url(${person_1})` }}
                            ></div>
                            <div class="text pt-4">
                              <p class="mb-4">
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts.
                              </p>
                              <p class="name">Roger Scott</p>
                              <span class="position">System Analyst</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="owl-item active center active center"
                        style={{ width: "350px", marginRight: "30px" }}
                      >
                        <div class="item">
                          <div class="testimony-wrap rounded text-center py-4 pb-5">
                            <div
                              class="user-img mb-2"
                              style={{ backgroundImage: `url(${person_2})` }}
                            ></div>
                            <div class="text pt-4">
                              <p class="mb-4">
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts.
                              </p>
                              <p class="name">Roger Scott</p>
                              <span class="position">Marketing Manager</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="owl-item active center active"
                        style={{ width: "350px", marginRight: "30px" }}
                      >
                        <div class="item">
                          <div class="testimony-wrap rounded text-center py-4 pb-5">
                            <div
                              class="user-img mb-2"
                              style={{ backgroundImage: `url(${person_3})` }}
                            ></div>
                            <div class="text pt-4">
                              <p class="mb-4">
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts.
                              </p>
                              <p class="name">Roger Scott</p>
                              <span class="position">Interface Designer</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="owl-item active center"
                        style={{ width: "350px", marginRight: "30px" }}
                      >
                        <div class="item">
                          <div class="testimony-wrap rounded text-center py-4 pb-5">
                            <div
                              class="user-img mb-2"
                              style={{ backgroundImage: `url(${person_4})` }}
                            ></div>
                            <div class="text pt-4">
                              <p class="mb-4">
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts.
                              </p>
                              <p class="name">Roger Scott</p>
                              <span class="position">UI Designer</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="owl-item active center"
                        style={{ width: "350px", marginRight: "30px" }}
                      >
                        <div class="item">
                          <div class="testimony-wrap rounded text-center py-4 pb-5">
                            <div
                              class="user-img mb-2"
                              style={{ backgroundImage: `url(${person_2})` }}
                            ></div>
                            <div class="text pt-4">
                              <p class="mb-4">
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts.
                              </p>
                              <p class="name">Roger Scott</p>
                              <span class="position">Web Developer</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="owl-item active center"
                        style={{ width: "350px", marginRight: "30px" }}
                      >
                        <div class="item">
                          <div class="testimony-wrap rounded text-center py-4 pb-5">
                            <div
                              class="user-img mb-2"
                              style={{ backgroundImage: `url(${person_1})` }}
                            ></div>
                            <div class="text pt-4">
                              <p class="mb-4">
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts.
                              </p>
                              <p class="name">Roger Scott</p>
                              <span class="position">System Analyst</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="owl-item active center cloned"
                        style={{ width: "350px", marginRight: "30px" }}
                      >
                        <div class="item">
                          <div class="testimony-wrap rounded text-center py-4 pb-5">
                            <div
                              class="user-img mb-2"
                              style={{ backgroundImage: `url(${person_2})` }}
                            ></div>
                            <div class="text pt-4">
                              <p class="mb-4">
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts.
                              </p>
                              <p class="name">Roger Scott</p>
                              <span class="position">Marketing Manager</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="owl-item active center cloned"
                        style={{ width: "350px", marginRight: "30px" }}
                      >
                        <div class="item">
                          <div class="testimony-wrap rounded text-center py-4 pb-5">
                            <div
                              class="user-img mb-2"
                              style={{ backgroundImage: `url(${person_3})` }}
                            ></div>
                            <div class="text pt-4">
                              <p class="mb-4">
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts.
                              </p>
                              <p class="name">Roger Scott</p>
                              <span class="position">Interface Designer</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="owl-item active center cloned"
                        style={{ width: "350px", marginRight: "30px" }}
                      >
                        <div class="item">
                          <div class="testimony-wrap rounded text-center py-4 pb-5">
                            <div
                              class="user-img mb-2"
                              style={{ backgroundImage: `url(${person_4})` }}
                            ></div>
                            <div class="text pt-4">
                              <p class="mb-4">
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts.
                              </p>
                              <p class="name">Roger Scott</p>
                              <span class="position">UI Designer</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="owl-nav disabled">
                    <button role="presentation" class="owl-prev">
                      <span class="ion-ios-arrow-back"></span>
                    </button>
                    <button role="presentation" class="owl-next">
                      <span class="ion-ios-arrow-forward"></span>
                    </button>
                  </div>
                  <div class="owl-dots">
                    <button class="owl-dot active">
                      <span></span>
                    </button>
                    <button class="owl-dot">
                      <span></span>
                    </button>
                    <button class="owl-dot">
                      <span></span>
                    </button>
                    <button class="owl-dot">
                      <span></span>
                    </button>
                    <button class="owl-dot">
                      <span></span>
                    </button>
                  </div>
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
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
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
                          203 Fake St. Mountain View, San Francisco, California,
                          USA
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
                  <i className="icon-heart color-danger" aria-hidden="true" />{" "}
                  by{" "}
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
  );
};

export default About;
