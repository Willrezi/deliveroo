import React, { Component } from "react";

class Basket extends Component {
  render() {
    const products = [];

    for (let i = 0; i < this.props.selectedProducts.length; i++) {
      products.push(
        <li>
          <button
            onClick={() => {
              if (this.props.selectedProducts[i].quantity > 0) {
                this.props.onUpdate(this.props.selectedProducts[i].id, -1);
              }
            }}
          >
            -
          </button>
          <span>{this.props.selectedProducts[i].quantity}</span>
          <button
            onClick={() => {
              this.props.onUpdate(this.props.selectedProducts[i].id, +1);
            }}
          >
            +
          </button>
          <span>{this.props.selectedProducts[i].name}</span>
          <span>
            {this.props.selectedProducts[i].price *
              this.props.selectedProducts[i].quantity}
          </span>
        </li>
      );
    }

    return (
      <div className="basket-component">
        <button className="validate">Valider mon panier</button>
        <ul>{products}</ul>
      </div>
    );
  }
}

export default Basket;
