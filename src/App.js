import React, { Component } from "react";
import { BrowserRouter as Router, Route, link } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route exact={true} path="/" component={Home} />
        </div>
      </Router>
    );
  }
  componentDidMount() {
    axios.get("https://deliveroo-api.now.sh/menu").then(response => {});
  }
}

export default App;
