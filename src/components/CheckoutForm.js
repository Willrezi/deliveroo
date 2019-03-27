import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";

let style = {
  base: {
    color: "#32325d",
    lineHeight: "18px",
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: "antialiased",
    fontSize: "16px",
    "::placeholder": {
      color: "#aab7c4"
    },
    border: "solid 1px #333333"
  },
  invalid: {
    color: "#fa755a",
    iconColor: "#fa755a"
  }
};

class CheckoutForm extends Component {
  handleSubmit = event => {
    // On empêche le formulaire d'être envoyé grâce à `event.preventDefault();`
    event.preventDefault();
    // On utilise la fonction createToken pour envoyer la demande de Tokenization à Stripe
    this.props.stripe
      .createToken({
        name: "Xavier Colombel",
        address_line1: this.props.address1,
        address_city: this.props.city,
        address_line2: this.props.zip
      })
      .then(({ token }) => {
        console.log("Token:", token);
        // On poste l'objet Token à notre back-end
        axios
          .post("https://668c42db.ngrok.io/api", {
            token,
            amount: Number(this.props.amountPayed) * 100
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      });
  };

  render() {
    return (
      <form className="checkout-form" onSubmit={this.handleSubmit}>
        <div style={{ width: "100%" }}>
          <div
            style={{
              border: "solid 1px #f4f5f5",
              padding: 10,
              borderRadius: 3,
              marginTop: "20px"
            }}
          >
            <CardElement style={style} />
          </div>
        </div>
        <button className="btn-confirmed" type="submit">
          {" "}
          Confirmer & payer
        </button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
