import React from "react";
import Header from "./Header";

class Checkout extends React.Component {
  state = {
    appart: "",
    digicode: "",
    adress: "",
    zipCode: "",
    city: "",
    phone: "",
    instructions: ""
  };

  render() {
    console.log(this.props.location.submittedRestaurant);
    console.log(this.props.location.submittedCart);
    console.log(this.props.location.sousTotal);
    console.log(this.props.location.fees);
    console.log(this.props.location.total);

    const confirmedCart = [];

    for (let i = 0; i < this.props.location.submittedCart.length; i++) {
      confirmedCart.push(
        <li>
          <span>{this.props.location.submittedCart[i].quantity}</span>
          <span className="multiply">x</span>
          <span className="product">
            {this.props.location.submittedCart[i].name}
          </span>
          <span className="price">
            {(
              this.props.location.submittedCart[i].price *
              this.props.location.submittedCart[i].quantity
            )
              .toFixed(2)
              .replace(".", ",") + " €"}
          </span>
        </li>
      );
    }

    return (
      <div>
        <Header />
        <div className="bg-colored">
          <div />

          <div className="container">
            <div className="formulaire">
              <h1>{this.props.location.submittedRestaurant}</h1>
              <h2 className="adresse">Adresse de livraison</h2>
              <form
                onSubmit={() => {
                  // axios.post("", {});
                }}
              >
                <div className="two-columns">
                  <div className="input left">
                    <label>Etage et numéro d'appartement</label>
                    <input
                      type="text"
                      placeholder="ex : Appartement n°15"
                      onChange={event => {
                        this.setState({ appart: event.target.value });
                      }}
                      value={this.state.appart}
                    />
                  </div>
                  <div className="input right">
                    <label>Digicode</label>
                    <input
                      type="text"
                      placeholder="ex : B123"
                      onChange={event => {
                        this.setState({ digicode: event.target.value });
                      }}
                      value={this.state.digicode}
                    />
                  </div>
                </div>

                <div className="input">
                  <label>Adresse</label>
                  <input
                    type="text"
                    placeholder="ex : 100 rue de Rivoli"
                    onChange={event => {
                      this.setState({ adress: event.target.value });
                    }}
                    value={this.state.adress}
                  />
                  <p>
                    Inclut le nom de votre rue et le numéro de votre batiment
                  </p>
                </div>
                <div className="two-columns">
                  <div className="input left">
                    <label>Code postal</label>
                    <input
                      type="number"
                      placeholder="ex : 75001"
                      onChange={event => {
                        this.setState({ zipCode: event.target.value });
                      }}
                      value={this.state.zipCode}
                    />
                  </div>
                  <div className="input right">
                    <label>Ville</label>
                    <input
                      type="text"
                      placeholder="ex : Paris"
                      onChange={event => {
                        this.setState({ city: event.target.value });
                      }}
                      value={this.state.city}
                    />
                  </div>
                </div>
                <div className="input">
                  <label>Numéro de téléphone</label>
                  <input
                    type="tel"
                    placeholder="ex : + 33 9 77 55 03 30"
                    onChange={event => {
                      this.setState({ phone: event.target.value });
                    }}
                    value={this.state.phone}
                  />
                </div>
                <div className="input">
                  <label>Instructions pour votre livreur</label>
                  <textarea className="textarea" rows="3" placeholder="ex: C'est la porte noir près de l'animalerie. Merci d'appeler lorsque vous arrivez." />
                </div>
              </form>
              <div className="payed">
                <span>
                  Votre commande arrivera dans <strong>15 - 25 minutes</strong>
                </span>
                <button className="btn-confirmed" type="submit">
                  Confirmer & payer
                </button>
              </div>
            </div>
            <div className="basket-component">
              {" "}
              <ul>{confirmedCart}</ul>
              <hr />
              <div className="total">
                <ul>
                  <li>
                    <span>Sous-Total</span>
                    <span className="price">
                      {this.props.location.sousTotal
                        .toFixed(2)
                        .replace(".", ",") + " €"}
                    </span>
                  </li>
                  <li>
                    <span>Frais de livraison</span>
                    <span>
                      {this.props.location.fees.toFixed(2).replace(".", ",") +
                        " €"}
                    </span>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="total">
                <ul>
                  <li>
                    {" "}
                    <span className="price">Total</span>
                    <span>
                      {this.props.location.total.toFixed(2).replace(".", ",") +
                        " €"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
