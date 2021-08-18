import React, { Component } from "react";
import { BrowserRouter as Router ,Route, Switch, Redirect, withRouter } from "react-router-dom";
import { ToastContainer, toast, Zoom } from "react-toastify";
import ReactBreakpoints from "react-breakpoints";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Contact from "./containers/Contact";
import Review from "./containers/Review";
const breakpoints = {
  xs: 461,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1171,
  xxl: 1201,
};
class App extends Component {
  render() {
    return (
      <Router>
        <ReactBreakpoints
          breakpoints={breakpoints}
          debounceResize={true}
          debounceDelay={50}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/review" component={Review} />
            <Redirect to="/" />
          </Switch>
          <ToastContainer
            position={toast.POSITION.TOP_RIGHT}
            autoClose={8000}
            hideProgressBar
            pauseOnFocusLoss={false}
            pauseOnHover={false}
            transition={Zoom}
          />
        </ReactBreakpoints>
      </Router>
    );
  }
}

export default App;
