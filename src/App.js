import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Restaurant from "./components/Restaurant";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Menu /> */}
          <Route exact={true} path="/" component={Home} />
          <Route path="/restaurant" component={Restaurant} />
        </div>
      </Router>
    );
  }
}

export default App;
