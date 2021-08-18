import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Contact from "./Contact";
import Review from "./Review";

class DefaultLayout extends Component {
  render() {
    return (
      <>
        {/* --::::::::::::::::::::::::::: Start: Preloader section :::::::::::::::::::::::::::-- */}
        <div className="preloader">
          <div className="loader loader1"></div>
          <div className="loader loader2"></div>
          <div className="loader loader3"></div>
          <div className="loader loader4"></div>
          <div className="loader loader5"></div>
          <div className="loader loader6"></div>
          <div className="loader loader7"></div>
          <div className="loader loader8"></div>
        </div>
        {/* --::::::::::::::::::::::::::: End: Preloader section :::::::::::::::::::::::::::-- */}

        {/* -- Start: Header Section -- */}
        <div className="header_topbar" id="top">
          {/* -- Logo -- */}
          <div className="container">
            <div className="row">
              <div className="header_top_right list-unstyled">
                {/* <!-- Header Contact  --> */}
                <ul className="header_contact">
                  <li>
                    <i className="fas fa-envelope"></i>info@tastery.co.uk
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>+234 567 234 875
                  </li>
                </ul>
                {/* <!-- End: Header Contact --> */}
              </div>
              <div className="header_top_left">
                <div className="opening-hrs">
                  <p>
                    <i className="fas fa-business-time"></i> Hours : 9am-5pm &
                    9am-11pm
                  </p>
                  <div className="opening-table-wrap">
                    <table className="table opening-table">
                      <thead>
                        <tr>
                          <th colspan="2">Evening Opening Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td> Sunday </td>
                          <td>5pm-10:30pm</td>
                        </tr>
                        <tr>
                          <td> Monday </td>
                          <td>5pm-10:30pm</td>
                        </tr>
                        <tr>
                          <td> Tuesday </td>
                          <td>5pm-10:30pm</td>
                        </tr>
                        <tr>
                          <td> Wednesday</td>
                          <td>5pm-10:30pm</td>
                        </tr>
                        <tr>
                          <td> Thusday </td>
                          <td>5pm-10:30pm</td>
                        </tr>
                        <tr>
                          <td> Friday </td>
                          <td>5pm-11pm</td>
                        </tr>
                        <tr>
                          <td> Statarday </td>
                          <td>5pm-11pm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* <!--  End: Opening Hrs Table --> */}
                </div>
                {/* <!--  Endd: opening-hrs --> */}

                <ul className="header_cart">
                  <li>
                    <a href="my-account.html"> Login </a>
                  </li>
                  <li>
                    <a
                      href="checkout.html"
                      className="icofont-cart-alt cart"
                    ></a>
                  </li>
                </ul>
                {/* <!--  Endd: Header  Login & Cart --> */}
              </div>
              {/* <!-- End: header_top_left --> */}
            </div>
            {/* <!-- End: row  --> */}
          </div>
          {/* <!-- End: Container  --> */}
        </div>
        {/* -- End: Header Info -- */}

        {/* <!-- Start: header navigation --> */}
        <div className="navigation">
          <div className="container">
            <div className="row">
              <div className="logo col-md-3 col-sm-12">
                <a href="index.html">
                  <img
                    className="img-responsive"
                    src="../images/logo.png"
                    alt="tastery"
                  />
                </a>
              </div>
              {/* <!-- end: logo --> */}

              <div className="col-md-9 col-sm-12">
                <div id="navigation">
                  <ul>
                    <li className="active">
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="menu.html">Order </a>
                    </li>
                    <li>
                      <a href="shop.html">Menus </a>
                    </li>
                    <li className="has-sub">
                      <a href="#">Pages</a>
                      <ul>
                        <li>
                          <a href="catering.html">Event Categing</a>{" "}
                        </li>
                        <li>
                          <a href="branches.html">Our Branches </a>{" "}
                        </li>
                        <li>
                          <a href="single-event.html"> Single Event </a>{" "}
                        </li>
                        <li>
                          <a href="event.html">Event</a>{" "}
                        </li>
                        <li>
                          <a href="offer.html"> Offer </a>{" "}
                        </li>
                        <li>
                          <a href="faq.html"> Faq </a>{" "}
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="review.html">Review</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- End: navigation  --> */}
              </div>
              {/* <!--/ col-md-9 col-sm-12 --> */}
            </div>
            {/* <!--/ row --> */}
          </div>
          {/* <!--/ container --> */}
        </div>
        {/* <!-- End: header navigation --> */}

        <Router>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/review" component={Review} />
            <Redirect to="/home" />
          </Switch>
        </Router>
      </>
    );
  }
}

export default withRouter(DefaultLayout);
