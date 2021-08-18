import React, { Component } from "react";
import LoginComponent from "../components/login";

class Login extends Component {
  render() {
    return <LoginComponent {...this.props} />;
  }
}

export default Login;
