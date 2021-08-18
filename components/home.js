import React, { Component } from "react";

class HomeComponent extends Component {
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
                    <a href="/login"> Login </a>
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
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/order">Order </a>
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
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="/review">Review</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
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

        {/* <!-- Start: Slides  --> */}
        <div className="slides_wrapper">
          <div className="slider_home" id="slider_owl">
            {/* <!-- Slider 1 --> */}
            <div className="single_slider slide_bg_1">
              <div className="slider_item_tb">
                <div className="slider_item_tbcell">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 col-sm-12 animated fadeInDown">
                        <h5>Representing Since 2002</h5>
                        <h2>
                          We are here to provide <span>the best service</span>
                        </h2>
                        <div className="slider_btn">
                          <a
                            href="menu.html"
                            className="slider_btn_one more-link "
                          >
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End: Slider 1 --> */}
            {/* <!-- Slider 2 --> */}
            <div className="single_slider slide_bg_2">
              <div className="slider_item_tb">
                <div className="slider_item_tbcell">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 col-sm-12 animated fadeInDown">
                        <h5>Representing Since 2002</h5>
                        <h2>
                          We are here to provide <span>the best service</span>
                        </h2>
                        <div className="slider_btn">
                          <a
                            href="menu.html"
                            className="slider_btn_one more-link "
                          >
                            Contact Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End: Slider 2 --> */}
          </div>

          {/* <!--  Social Icom --> */}
          <div className="slider_social">
            <ul>
              <li>
                <a href="#" className="fab fa-facebook-f"></a>
              </li>
              <li>
                <a href="#" className="fab fa-twitter"></a>
              </li>
              <li>
                <a href="#" className="fab fa-youtube"></a>
              </li>
              <li>
                <a href="#" className="fab fa-instagram"></a>
              </li>
              <li>
                <a href="#" className="fa fa-map-marker-alt"></a>
              </li>
            </ul>
          </div>
          {/* <!-- End: Social Icom --> */}
        </div>
        {/* <!-- End:  Slider Section --> */}

        {/* <!-- Start:  Delivery Coverage and Branches Section --> */}
        <section className="delivery_branc_section">
          <div className="container">
            <div className="row">
              {/* <!-- Start: Contact Info --> */}
              <div className="col-sm-7 col-xs-12">
                <div id="branche_carousel" className="owl-carousel">
                  <div className="items">
                    <div className="branche-wrap">
                      <img
                        src="https://seedemo.co.uk/public/branch//1614516403.png"
                        alt=""
                      />
                      <h4> USA Branche </h4>
                      <p>
                        {" "}
                        85 Bay Meadows Drive Woodstock, 30188, United States{" "}
                      </p>
                      <a href="#" className="more-link ">
                        {" "}
                        View On Map{" "}
                      </a>
                    </div>
                    {/* <!-- /.branche-wrap --> */}
                  </div>
                  {/* <!-- /.col-md-4 .col-sm-12 --> */}

                  <div className="items">
                    <div className="branche-wrap">
                      <img
                        src="https://seedemo.co.uk/public/branch//1614516403.png"
                        alt=""
                      />
                      <h4> UK Branche </h4>
                      <p>
                        {" "}
                        85 Bay Meadows Drive Woodstock, 30188, United States{" "}
                      </p>
                      <a href="#" className="more-link">
                        {" "}
                        View On Map{" "}
                      </a>
                    </div>
                    {/* <!-- /.branche-wrap --> */}
                  </div>
                  {/* <!-- /.col-md-4 .col-sm-12 --> */}
                </div>
                {/* <!-- End: Contact Info --> */}
              </div>
              {/* <!-- End: col-md-4 col-sm-12 --> */}

              {/* <!-- Start:  Delivery Coverage Form--> */}
              <div className="col-sm-5 col-xs-12">
                <div className="fmenu-Delivery-form">
                  <h4> Delivery Coverage Checker </h4>
                  <form>
                    <div className="del-post-code">
                      <input
                        type="text"
                        id="post-code-input"
                        placeholder="Post Code Entry"
                      />
                      <button type="button" id="post-code-btn">
                        <i className="icofont-search-1"></i>
                      </button>
                    </div>
                    <div className="del-branch">
                      <input
                        type="text"
                        id="fmenu-branch"
                        placeholder="Branch (Your Nearest)"
                      />
                      <input
                        type="text"
                        id="fmenu-charge"
                        placeholder="Delivery Charge"
                      />
                    </div>
                  </form>
                </div>
                {/* <!-- End: Delivery Coverage Form --> */}
              </div>
              {/* <!-- End: col-md-4 col-sm-12 --> */}
            </div>
          </div>
        </section>
        {/* <!-- End: Delivery Coverage and Branches Section --> */}

        {/* <!-- Start: Promotion of Product --> */}
        <section className="promo-product-area">
          <div className="container">
            {/* <!-- Start: Heading --> */}
            <div className="base-header">
              <small>Our Product </small>
              <h2>Product Promotion</h2>
            </div>
            {/* <!-- End: Heading --> */}
            <div className="row">
              <div className="col-sm-12" id="product_pro">
                {/* <!-- Start: Product 1 --> */}
                <div className="product-list">
                  <div className="product-img">
                    <img src="../images/product_1.jpg" alt="" />
                    <div className="pro_back">
                      <p>
                        Lorem ipsum dolor sit amet cons ectetur adipisicing
                        elit. Veniam const equatur us saepe eligendi, rerum mole
                        stiae conse quuntur vel nisi cumque vitae quisquam.
                      </p>
                      <a href="menu.html" className="more-link ">
                        Order Now
                      </a>
                    </div>
                  </div>
                  <div className="product-title">
                    <h4> Chicken Tikka </h4>
                    <p className="price-product mb-0">
                      <span className="price">$12.00</span>
                    </p>
                    <span className="badge-starrating">
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </span>
                  </div>
                </div>
                {/* <!-- End: Product 1 --> */}
                {/* <!-- Start: Product 2 --> */}
                <div className="product-list">
                  <div className="product-img">
                    <img src="../images/product_2.jpg" alt="" />
                    <div className="pro_back">
                      <p>
                        Lorem ipsum dolor sit amet cons ectetur adipisicing
                        elit. Veniam const equatur us saepe eligendi, rerum mole
                        stiae conse quuntur vel nisi cumque vitae quisquam.
                      </p>
                      <a href="menu.html" className="more-link ">
                        Order Now
                      </a>
                    </div>
                  </div>
                  <div className="product-title">
                    <h4> Shahi Samosa </h4>
                    <p className="price-product mb-0">
                      <span className="price">$14.00</span>
                    </p>
                    <span className="badge-starrating">
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </span>
                  </div>
                </div>
                {/* <!--  ENd: Product 2 --> */}
                {/* <!-- Start: Product 3 --> */}
                <div className="product-list">
                  <div className="product-img">
                    <img src="../images/product_3.jpg" alt="" />
                    <div className="pro_back">
                      <p>
                        Lorem ipsum dolor sit amet cons ectetur adipisicing
                        elit. Veniam const equatur us saepe eligendi, rerum mole
                        stiae conse quuntur vel nisi cumque vitae quisquam.
                      </p>
                      <a href="menu.html" className="more-link ">
                        Order Now
                      </a>
                    </div>
                  </div>
                  <div className="product-title">
                    <h4> Shahi Samosa</h4>
                    <p className="price-product mb-0">
                      <span className="price">$18.00</span>
                    </p>
                    <span className="badge-starrating">
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </span>
                  </div>
                </div>
                {/* <!--  ENd: Product 3 --> */}
                {/* <!-- Start: Product 4 --> */}
                <div className="product-list">
                  <div className="product-img">
                    <img src="../images/product_2.jpg" alt="" />
                    <div className="pro_back">
                      <p>
                        Lorem ipsum dolor sit amet cons ectetur adipisicing
                        elit. Veniam const equatur us saepe eligendi, rerum mole
                        stiae conse quuntur vel nisi cumque vitae quisquam.
                      </p>
                      <a href="menu.html" className="more-link ">
                        Order Now
                      </a>
                    </div>
                  </div>
                  <div className="product-title">
                    <h4> Shahi Samosa </h4>
                    <p className="price-product mb-0">
                      <span className="price">$14.00</span>
                    </p>
                    <span className="badge-starrating">
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </span>
                  </div>
                </div>
                {/* <!--  ENd: Product 4 --> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End: Promotion of Product --> */}

        {/* <!-- Start: Promo Section --> */}
        <div className="promo-area">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="promo-list">
                  <div id="click-me-heart" data-heart="1">
                    <a href="#">
                      <i className="fa fa-heart" aria-hidden="true"></i>
                      <h3 id="heart-count">
                        {" "}
                        Click Me <br /> 88
                      </h3>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="promo-list">
                  <a href="#">
                    <i className="fa fa-download" aria-hidden="true"></i>
                  </a>
                  <h3>
                    <a href="#" target="_blank">
                      Download <br /> Menu
                    </a>
                  </h3>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="promo-list">
                  <i className="fa fa-home" aria-hidden="true"></i>
                  <h3>
                    <a href="#">
                      Find <br /> Branches
                    </a>
                  </h3>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="promo-list last">
                  <i className="fa fa-gift" aria-hidden="true"></i>
                  <h3>
                    <a href="#">
                      Our <br /> Offers
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End:Promo Section --> */}

        {/* <!--  Start: Event Section  --> */}
        <section className="event-section">
          <div className="container">
            {/* <!-- Start: Heading --> */}
            <div className="base-header">
              <small> Our Event </small>
              <h2>Our Latest Event</h2>
            </div>
            {/* <!-- End: Heading --> */}
            <div className="row">
              <div className="col-sm-12" id="event_carousel">
                {/* <!--Start: event 1--> */}
                <div className="event_item">
                  <div className="enent_img">
                    <img
                      alt="team"
                      className="img-responsive"
                      src="../images/event_2.jpg"
                    />
                  </div>
                  <div className="event_info">
                    <a href="#">
                      <h4>Happy New Year</h4>
                    </a>
                    <span className="event_date">
                      {" "}
                      <i className="far fa-calendar"></i> 1st Jannuary 2021
                    </span>
                  </div>
                </div>
                {/* <!--End: event 1--> */}

                {/* <!--Start: event 1--> */}
                <div className="event_item">
                  <div className="enent_img">
                    <img
                      alt="team"
                      className="img-responsive"
                      src="../images/event_1.jpg"
                    />
                  </div>
                  <div className="event_info">
                    <a href="#">
                      <h4>Happy New Year</h4>
                    </a>
                    <span className="event_date">
                      {" "}
                      <i className="far fa-calendar"></i> 1st Jannuary 2021
                    </span>
                  </div>
                </div>
                {/* <!--End: event 1--> */}

                {/* <!--Start: event 1--> */}
                <div className="event_item">
                  <div className="enent_img">
                    <img
                      alt="team"
                      className="img-responsive"
                      src="../images/event_3.jpg"
                    />
                  </div>
                  <div className="event_info">
                    <a href="#">
                      <h4>Happy New Year</h4>
                    </a>
                    <span className="event_date">
                      {" "}
                      <i className="far fa-calendar"></i> 1st Jannuary 2021
                    </span>
                  </div>
                </div>
                {/* <!--End: event 1--> */}

                {/* <!--Start: event 1--> */}
                <div className="event_item">
                  <div className="enent_img">
                    <img
                      alt="team"
                      className="img-responsive"
                      src="../images/event_1.jpg"
                    />
                  </div>
                  <div className="event_info">
                    <a href="#">
                      <h4>Happy New Year</h4>
                    </a>
                    <span className="event_date">
                      {" "}
                      <i className="far fa-calendar"></i> 1st Jannuary 2021
                    </span>
                  </div>
                </div>
                {/* <!--End: event 1--> */}

                {/* <!--Start: event 1--> */}
                <div className="event_item">
                  <div className="enent_img">
                    <img
                      alt="team"
                      className="img-responsive"
                      src="../images/event_3.jpg"
                    />
                  </div>
                  <div className="event_info">
                    <a href="#">
                      <h4>Happy New Year</h4>
                    </a>
                    <span className="event_date">
                      {" "}
                      <i className="far fa-calendar"></i> 1st Jannuary 2021
                    </span>
                  </div>
                </div>
                {/* <!--End: event 1--> */}
              </div>
              {/* <!--/.col-sm-12 --> */}
            </div>
            {/* <!--/.row --> */}
          </div>
          {/* <!--/.container --> */}
        </section>
        {/* <!--  End: Event Section --> */}

        {/* <!-- Start: Gallery Section --> */}
        <section className="gallery-section">
          <div className="container-fluid">
            <div className="base-header">
              <small> Our Latest Work </small>
              <h2>Special Gallery</h2>
            </div>
            <div className="row">
              <div className="gallery_carousel">
                <div className="gallery-col">
                  <div className="gallery-item">
                    <img src="../images/pro1.jpg" alt="" />
                    <div className="gallery-hover">
                      <a className="project-link" href="../images/pro1.jpg">
                        <img src="../images/search-icon.svg" alt="icon" />
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-video">
                    <a href="#" target="_blank">
                      {" "}
                      view recipes video
                    </a>
                  </div>
                  {/* <!-- End: Work Item 1 --> */}

                  <div className="gallery-item">
                    <img src="../images/pro5.jpg" alt="" />
                    <div className="gallery-hover">
                      <a className="project-link" href="../images/pro5.jpg">
                        <img src="../images/search-icon.svg" alt="icon" />
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-video">
                    <a href="#" target="_blank">
                      {" "}
                      view recipes video
                    </a>
                  </div>
                  {/* <!-- End: Work Item 2 --> */}
                </div>
                {/* <!-- End: gallery-col --> */}

                <div className="gallery-col">
                  <div className="gallery-item">
                    <img src="../images/pro2.jpg" alt="" />
                    <div className="gallery-hover">
                      <a className="project-link" href="../images/pro2.jpg">
                        <img src="../images/search-icon.svg" alt="icon" />
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-video">
                    <a href="#" target="_blank">
                      {" "}
                      view recipes video
                    </a>
                  </div>
                  {/* <!-- End: Work Item 3 --> */}
                  <div className="gallery-item">
                    <img src="../images/pro6.jpg" alt="" />
                    <div className="gallery-hover">
                      <a className="project-link" href="../images/pro6.jpg">
                        <img src="../images/search-icon.svg" alt="icon" />
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-video">
                    <a href="#" target="_blank">
                      {" "}
                      view recipes video
                    </a>
                  </div>
                  {/* <!-- End: Work Item 4 --> */}
                </div>
                {/* <!-- End: gallery-col --> */}

                <div className="gallery-col">
                  <div className="gallery-item">
                    <img src="../images/pro3.jpg" alt="" />
                    <div className="gallery-hover">
                      <a className="project-link" href="../images/pro3.jpg">
                        <img src="../images/search-icon.svg" alt="icon" />
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-video">
                    <a href="#" target="_blank">
                      {" "}
                      view recipes video
                    </a>
                  </div>
                  {/* <!-- End: Work Item 5 --> */}
                  <div className="gallery-item">
                    <img src="../images/pro7.jpg" alt="" />
                    <div className="gallery-hover">
                      <a className="project-link" href="../images/pro7.jpg">
                        <img src="../images/search-icon.svg" alt="icon" />
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-video">
                    <a href="#" target="_blank">
                      {" "}
                      view recipes video
                    </a>
                  </div>
                  {/* <!-- End: Work Item 5 --> */}
                </div>
                {/* <!-- End: gallery-col --> */}

                <div className="gallery-col">
                  <div className="gallery-item">
                    <img src="../images/pro4.jpg" alt="" />
                    <div className="gallery-hover">
                      <a className="project-link" href="../images/pro4.jpg">
                        <img src="../images/search-icon.svg" alt="icon" />
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-video">
                    <a href="#" target="_blank">
                      {" "}
                      view recipes video
                    </a>
                  </div>
                  {/* <!-- End: Work Item 5 --> */}
                  <div className="gallery-item">
                    <img src="../images/pro8.jpg" alt="" />
                    <div className="gallery-hover">
                      <a className="project-link" href="../images/pro8.jpg">
                        {" "}
                        <img src="../images/search-icon.svg" alt="icon" />
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-video">
                    <a href="#" target="_blank">
                      {" "}
                      view recipes video
                    </a>
                  </div>
                  {/* <!-- End: Work Item 6 --> */}
                </div>
                {/* <!-- End: gallery-col --> */}
              </div>
            </div>
            {/* <!--/.row --> */}
          </div>
          {/* <!--/.container --> */}
        </section>
        {/* <!-- End: Gallery Section --> */}

        {/* <!-- Start: Testimonial Section --> */}
        <section className="testimonials-section">
          <div className="container">
            {/* <!-- Start: Heading --> */}
            <div className="base-header">
              <small>Our Testimonial </small>
              <h2>Customers Reviews </h2>
            </div>
            {/* <!-- End: Heading --> */}
            <div className="row">
              {/* <!-- Testimonials--> */}
              <div className="col-sm-12" id="testimonial">
                {/* <!-- Start: Testimonial 1 --> */}
                <div className="testimonial-item">
                  <div className="testimonial-box">
                    <div className="testimonial_content">
                      <p>
                        {" "}
                        <i className="fas fa-quote-left"></i> Lorem ipsum dolor
                        sit ametet infor verear in infor noluisse eumdiam congue
                        refor midan was at atomorum his id, pri tae expetenda.
                        Ests as mundi.
                      </p>
                      <div className="testi_star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                    </div>
                    <div className="testi_../images">
                      <a href="#" className="testi_social">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <img alt="testimonial" src="../images/testimonial1.jpg" />
                    </div>
                    <div className="cus-title">
                      <h4 className="tes-nam">John Watson</h4>
                      <span className="tes-degree">CEO At Google</span>
                    </div>
                  </div>
                  {/* <!--End: Testimonial 1 --> */}
                </div>
                {/* <!-- Start: Testimonial 2 --> */}
                <div className="testimonial-item">
                  <div className="testimonial-box">
                    <div className="testimonial_content">
                      <p>
                        {" "}
                        <i className="fas fa-quote-left"></i> Lorem ipsum dolor
                        sit ametet infor verear in infor noluisse eumdiam congue
                        refor midan was at atomorum his id, pri tae expetenda.
                        Ests as mundi.
                      </p>
                      <div className="testi_star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                    </div>
                    <div className="testi_../images">
                      <a href="#" className="testi_social">
                        <i className="fab fa-pinterest"></i>
                      </a>
                      <img alt="testimonial" src="../images/testimonial2.jpg" />
                    </div>
                    <div className="cus-title">
                      <h4 className="tes-nam">John Watson</h4>
                      <span className="tes-degree">CEO At Facebook</span>
                    </div>
                  </div>
                  {/* <!--End: Testimonial 2 --> */}
                </div>
                {/* <!-- Start: Testimonial 3 --> */}
                <div className="testimonial-item">
                  <div className="testimonial-box">
                    <div className="testimonial_content">
                      <p>
                        {" "}
                        <i className="fas fa-quote-left"></i> Lorem ipsum dolor
                        sit ametet infor verear in infor noluisse eumdiam congue
                        refor midan was at atomorum his id, pri tae expetenda.
                        Ests as mundi.
                      </p>
                      <div className="testi_star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                    </div>
                    <div className="testi_../images">
                      <a href="#" className="testi_social">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <img alt="testimonial" src="../images/testimonial3.jpg" />
                    </div>
                    <div className="cus-title">
                      <h4 className="tes-nam">John Watson</h4>
                      <span className="tes-degree">CEO At Facebook</span>
                    </div>
                  </div>
                  {/* <!--End: Testimonial 3 --> */}
                </div>
                {/* <!-- Start: Testimonial 3 --> */}
                <div className="testimonial-item">
                  <div className="testimonial-box">
                    <div className="testimonial_content">
                      <p>
                        {" "}
                        <i className="fas fa-quote-left"></i> Lorem ipsum dolor
                        sit ametet infor verear in infor noluisse eumdiam congue
                        refor midan was at atomorum his id, pri tae expetenda.
                        Ests as mundi.
                      </p>
                      <div className="testi_star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                    </div>
                    <div className="testi_../images">
                      <a href="#" className="testi_social">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <img alt="testimonial" src="../images/testimonial4.jpg" />
                    </div>
                    <div className="cus-title">
                      <h4 className="tes-nam">John Watson</h4>
                      <span className="tes-degree">CEO At Facebook</span>
                    </div>
                  </div>
                  {/* <!--End: Testimonial 3 --> */}
                </div>
              </div>
            </div>
            {/* <!--/.row--> */}
          </div>
          {/* <!--/.container--> */}
        </section>
        {/* <!-- End: Testimonial Section --> */}

        {/* <!-- Start: Client Section --> */}
        <section className="client-section">
          {/* <!-- Container --> */}
          <div className="container">
            <div className="row">
              {/* <!-- client list  --> */}
              <div className="client_carousel" id="client_carousel">
                {/* <!-- client 1 --> */}
                <div className="item">
                  <a href="#" className="client-box">
                    <img alt="client" src="../images/client-1.png" />
                    <h5>Cinnamon Stick</h5>
                  </a>
                </div>
                {/* <!-- client 2 --> */}
                <div className="item">
                  <a href="#" className="client-box">
                    <img alt="client" src="../images/client-2.png" />
                    <h5>Black Seeds </h5>
                  </a>
                </div>
                {/* <!-- client 3 --> */}
                <div className="item">
                  <a href="#" className="client-box">
                    <img alt="client" src="../images/client-3.png" />
                    <h5>Black Seeds </h5>
                  </a>
                </div>
                {/* <!-- client 4 --> */}
                <div className="item">
                  <a href="#" className="client-box">
                    <img alt="client" src="../images/client-4.png" />
                    <h5>Cinnamon Stick</h5>
                  </a>
                </div>
                {/* <!-- client 5 --> */}
                <div className="item">
                  <a href="#" className="client-box">
                    <img alt="client" src="../images/client-1.png" />
                    <h5>Cinnamon Stick</h5>
                  </a>
                </div>
                {/* <!-- client 6 --> */}
                <div className="item">
                  <a href="#" className="client-box">
                    <img alt="client" src="../images/client-2.png" />
                    <h5>Cinnamon Stick</h5>
                  </a>
                </div>
                {/* <!-- client 7 --> */}
                <div className="item">
                  <a href="#" className="client-box">
                    <img alt="client" src="../images/client-3.png" />
                    <h5>Cinnamon Stick</h5>
                  </a>
                </div>
              </div>
              {/* <!--/ client list  --> */}
            </div>
            {/* <!--/ row - --> */}
          </div>
          {/* <!--/ Container - --> */}
        </section>
        {/* <!--   End:Client Section --> */}

        {/* <!-- Start:Footer Section --> */}
        <footer className="footer-section">
          <div className="container">
            <div className="row">
              {/* <!-- Start: About --> */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="widget">
                  <div className="footer_logo">
                    <img
                      className="img-responsive"
                      src="../images/logo.png"
                      alt=""
                    />
                  </div>
                  <div className="footer_p">
                    <p className="footer_para">
                      Loren ipsum dolor conse ctetur at adipis cing elit sed do
                      eiu smod of tempor inci didunt know youlab{" "}
                    </p>
                  </div>
                  <div className="footer_socil">
                    <ul className="list-icons link-list footer_soc">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-behance"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- End: About --> */}

              {/* <!-- Start: Contact Info --> */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="widget contact_info">
                  <h5>Contact Info</h5>
                  <ul>
                    <li>
                      <i className="icofont-location-pin"></i>{" "}
                      <a href="#">59 Hullbridge Road.SS6</a>
                    </li>
                    <li>
                      <i className="icofont-email"></i>{" "}
                      <a href="#">nfo@spicehutonline.co.uk</a>
                    </li>
                    <li>
                      <i className="icofont-web"></i>{" "}
                      <a href="#"> spicehut.co.uk </a>
                    </li>
                    <li>
                      <i className="icofont-ui-call"></i>{" "}
                      <a href="#"> +88 01268 785 818 </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- End: Contact Info --> */}

              {/* <!-- Start: Quick Link --> */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="widget quick_lnk">
                  <h5>Quick Link</h5>
                  <ul>
                    <li>
                      <a href="#">Help and Ordering</a>
                    </li>
                    <li>
                      <a href="#">Return & Cancellation</a>
                    </li>
                    <li>
                      <a href="#">Online Organic Service</a>
                    </li>
                    <li>
                      <a href="#">Delevery Schedule</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- End: Quick Link --> */}

              {/* <!-- Start:Newsletter --> */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="widget">
                  <h5>Newsletter</h5>
                  {/* <!-- Start Subscribe --> */}
                  <div className="news_letter_wrp">
                    <p>
                      Subscribe our newsletter to get more update & join to
                      Tastery
                    </p>
                    <form className="mailchimp">
                      {/* <!-- SUBSCRIPTION SUCCESSFUL OR ERROR MESSAGES --> */}
                      <input
                        className="email_field"
                        type="text"
                        name="email"
                        id="subscriber-email"
                        placeholder="Email Address"
                      />
                      <button
                        className="submit-contact"
                        type="submit"
                        id="subscribe-button"
                      >
                        <i className="icofont-paper-plane"></i>
                      </button>
                      <span className="subscription-success"> </span>
                      <span className="subscription-error"> </span>
                      <label
                        className="subscription-label"
                        for="subscriber-email"
                      ></label>
                    </form>
                    {/* <!-- /END MAILCHIMP FORM STARTS --> */}
                  </div>
                </div>
              </div>
              {/* <!-- End: Newsletter --> */}
            </div>
            {/* <!-- End: row --> */}

            {/* <!-- Start: Subfooter --> */}
            <div className="subfooter_wrap">
              <div className="subfooter">
                <p>
                  2021 © Copyright <a href="index.html">Tastery.</a> All rights
                  Reserved.
                </p>
              </div>
              <a href="#top" className="scrollup">
                <i className="icon-glyph-266"></i>
              </a>
              {/* <!-- End:Subfooter --> */}
            </div>
            {/* <!-- End: Subfooter --> */}
          </div>
          {/* <!-- End: Container --> */}
        </footer>
        {/* <!-- End: Footer Section --> */}
      </>
    );
  }
}

export default HomeComponent;
