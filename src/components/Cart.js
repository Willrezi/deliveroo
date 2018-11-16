import React from "react";
import { link, Link } from "react-router-dom";

class Cart extends React.Component {
  render() {
    if (this.props.cart.length === 0) {
      return <p>Votre panier est vide</p>;
    }

    const products = [];

    for (let i = 0; i < this.props.cart.length; i++) {
      products.push(
        <li key={this.props.cart[i]}>
          <div className="update">
            <button
              className="colored"
              onClick={() => {
                if (this.props.cart[i].quantity > 0) {
                  this.props.onUpdate(this.props.cart[i].id, -1);
                }
              }}
            >
              -
            </button>
            <span>{this.props.cart[i].quantity}</span>
            <button
              className="colored"
              onClick={() => {
                this.props.onUpdate(this.props.cart[i].id, +1);
              }}
            >
              +
            </button>
          </div>

          <span className="product">{this.props.cart[i].name}</span>
          <span className="price">
            {(this.props.cart[i].price * this.props.cart[i].quantity)
              .toFixed(2)
              .replace(".", ",") + " €"}
          </span>
        </li>
      );
    }

    let sousTotal = 0;

    for (let i = 0; i < this.props.cart.length; i++) {
      sousTotal =
        sousTotal +
        this.props.cart[i].quantity * Number(this.props.cart[i].price);
    }
    let fees = Number(2.5);

    let total = sousTotal + fees;

    return (
      <div className="basket-component">
        <Link
          to={{
            pathname: "/checkout",
            total: total,
            submittedCart: this.props.cart
          }}
        >
          <button className="validate">Valider mon panier</button>
        </Link>
        <div>
          <ul>{products}</ul>
        </div>

        <hr />
        <div className="total">
          <ul>
            <li>
              <span>Sous-Total</span>
              <span className="price">
                {sousTotal.toFixed(2).replace(".", ",") + " €"}
              </span>
            </li>
            <li>
              <span>Frais de livraison</span>
              <span>{fees.toFixed(2).replace(".", ",") + " €"}</span>
            </li>
          </ul>
        </div>
        <hr />
        <div className="total">
          <ul>
            <li>
              {" "}
              <span className="price">Total</span>
              <span>{total.toFixed(2).replace(".", ",") + " €"}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Cart;
