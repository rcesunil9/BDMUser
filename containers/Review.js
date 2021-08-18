import React, { Component } from "react";
import ReviewComponent from "../components/review";

class Review extends Component {
  render() {
    return <ReviewComponent {...this.props} />;
  }
}

export default Review;
