import React, { Component } from "react";

class Basket extends Component {
  render() {
    const products = [];

    return (
      <div className="basket-component">
        <button className="validate">Valider mon panier</button>
        <ul>
          <li>
            <button>-</button>
            <span>quantity</span>
            <button>+</button>
            <span>name</span>
            <span>price</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Basket;
