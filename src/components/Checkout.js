import React, { Component } from "react";
import Header from "./Header";

class Checkout extends Component {
  render() {
    console.log(this.props.location.cart);
    return (
      <div>
        <Header />
        Checkout
      </div>
    );
  }
}

export default Checkout;
