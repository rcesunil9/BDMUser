import React, { Component } from "react";
import HomeComponent from "../components/home";

class Home extends Component {
  render() {
    return <HomeComponent {...this.props} />;
  }
}
export default Home;
