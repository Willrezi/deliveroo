import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Route exact={true} path="/" component={Home} />
          <Route path="/menu" component={Menu} />
        </div>
      </Router>
    );
  }
}

export default App;
