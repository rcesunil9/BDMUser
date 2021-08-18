import React, { Component } from "react";
import ContactComponent from "../components/contact";

class Contact extends Component {
  render() {
    return <ContactComponent {...this.props} />;
  }
}

export default Contact;
