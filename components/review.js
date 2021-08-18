import React, { Component } from "react";

class ReviewComponent extends Component {
  render() {
    return (
      <>
        {/* <!--::::::::::::::::::::::::::: Start: Preloader section :::::::::::::::::::::::::::--> */}
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
        {/* <!-- ::::::::::::::::::::::::::: End: Preloader section :::::::::::::::::::::::::::--> */}

        {/* <!-- Start: Header Section --> */}
        <div className="header_topbar" id="top">
          {/* <!-- Logo --> */}
          <div className="container">
            <div className="row">
              <div className="header_top_right list-unstyled">
                {/* <!-- Header Contact  --> */}
                <ul className="header_contact">
                  <li>
                    <i className="fas fa-envelope"></i>nfo@tastery.co.uk
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
                    {" "}
                    <i className="fas fa-business-time"></i> Hours : 9am-5pm &
                    9am-11pm{" "}
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
                    <a href="checkout.html" className="icofont-cart-alt cart"></a>
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
        {/* <!-- End: Header Info --> */}

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
                    <li>
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
                    <li className="active">
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

        {/* <!-- header --> */}
        <header id="page-top" className="single-banner">
          {/* <!-- Start: Header Content --> */}
          <div className="container">
            <div className="row banner-text">
              <div className="col-sm-12">
                {/* <!-- Headline Goes Here --> */}
                <h3>Our Reviews </h3>
                <p>
                  <a href="index.html"> Home </a>{" "}
                  <i className="icofont-rounded-right"></i> Reviews{" "}
                </p>
              </div>
            </div>
            {/* <!-- End: .row --> */}
          </div>
          {/* <!-- End: Header Content --> */}
        </header>
        {/* <!--/. header --> */}

        {/* <!-- Start: Review Section --> */}
        <section className="review-form-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                {/* <!--  Contact Form  --> */}
                <div className="contact-form">
                  {/* <!-- Start: Heading --> */}
                  <div className="base-header">
                    <h2> GIve us feedback </h2>
                  </div>
                  {/* <!-- End: Heading --> */}
                  <form method="post" action="mailer.php" id="contact-form">
                    <div className="row">
                      <div className="col-lg-6 col-sm-12">
                        <input
                          className="con-field"
                          name="fname"
                          id="fname"
                          type="text"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <input
                          className="con-field"
                          name="dsignation"
                          id="dsignation"
                          type="text"
                          placeholder="Designation"
                        />
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <input type="file" name="image" id="image" />
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <div className="select-group">
                          <select name="total_review">
                            <option value="0"> Select Review Points </option>
                            <option value="1">1 Star</option>
                            <option value="2">2 Star</option>
                            <option value="3">3 Star</option>
                            <option value="4">4 Star</option>
                            <option value="5">5 Star</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-sm-12">
                        <textarea
                          className="con-field"
                          name="message"
                          id="message"
                          rows="6"
                          placeholder="Your Message"
                        ></textarea>
                        <div className="submit-area">
                          <input
                            type="submit"
                            className="submit-contact"
                            value="Submit Now"
                          />
                          <div id="msg" className="message"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* <!-- End:Contact Form  --> */}
              </div>
            </div>
            {/* <!-- row /- --> */}
          </div>
          {/* <!-- container /- --> */}
        </section>
        {/* <!-- End : Review Section --> */}

        {/* <!-- Start: Testimonial Section --> */}
        <section className="testimonials-section review-pg-testi">
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
                        <i className="fas fa-quote-left"></i> Lorem ipsum dolor sit
                        ametet infor verear in infor noluisse eumdiam congue
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
                    <div className="testi_images">
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
                        <i className="fas fa-quote-left"></i> Lorem ipsum dolor sit
                        ametet infor verear in infor noluisse eumdiam congue
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
                    <div className="testi_images">
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
                        <i className="fas fa-quote-left"></i> Lorem ipsum dolor sit
                        ametet infor verear in infor noluisse eumdiam congue
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
                    <div className="testi_images">
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
                        <i className="fas fa-quote-left"></i> Lorem ipsum dolor sit
                        ametet infor verear in infor noluisse eumdiam congue
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
                    <div className="testi_images">
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
                  <a href="" className="client-box">
                    <img alt="client" src="../images/client-1.png" />
                    <h5>Cinnamon Stick</h5>
                  </a>
                </div>
                {/* <!-- client 2 --> */}
                <div className="item">
                  <a href="" className="client-box">
                    <img alt="client" src="../images/client-2.png" />
                    <h5>Black Seeds </h5>
                  </a>
                </div>
                {/* <!-- client 3 --> */}
                <div className="item">
                  <a href="" className="client-box">
                    <img alt="client" src="../images/client-3.png" />
                    <h5>Black Seeds </h5>
                  </a>
                </div>
                {/* <!-- client 4 --> */}
                <div className="item">
                  <a href="" className="client-box">
                    <img alt="client" src="../images/client-4.png" />
                    <h5>Cinnamon Stick</h5>
                  </a>
                </div>
                {/* <!-- client 5 --> */}
                <div className="item">
                  <a href="" className="client-box">
                    <img alt="client" src="../images/client-1.png" />
                    <h5>Cinnamon Stick</h5>
                  </a>
                </div>
                {/* <!-- client 6 --> */}
                <div className="item">
                  <a href="" className="client-box">
                    <img alt="client" src="../images/client-2.png" />
                    <h5>Cinnamon Stick</h5>
                  </a>
                </div>
                {/* <!-- client 7 --> */}
                <div className="item">
                  <a href="" className="client-box">
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

export default ReviewComponent;
