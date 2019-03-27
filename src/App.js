import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Restaurant from './components/Restaurant';
import Checkout from './components/Checkout';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact={true} path="/" component={Restaurant} />
          <Route path="/restaurant" component={Restaurant} />
          <Route path="/checkout" component={Checkout} />
        </div>
      </Router>
    );
  }
}

export default App;
