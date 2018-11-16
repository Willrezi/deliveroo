import React from "react";
import Header from "./Header";

class Checkout extends React.Component {
  state = {
    appart: "",
    digicode: "",
    adress: "",
    zipCode: Number,
    city: "",
    phone: Number,
    instructions: ""
  };

  render() {
    console.log(this.props.location.submittedCart);
    console.log(this.props.location.submittedRestaurant);
    return (
      <div>
        <Header />
        <div className="bg-colored">
          <h2>{this.props.location.submittedRestaurant}</h2>
          <div className="formulaire">
            <h2>Adresse de livraison</h2>
            <form>
              <div>
                <label>Etage et numéro d'appartement</label>
                <input
                  type="text"
                  placeholder="ex : Appartement n°15"
                  onChange={event => {
                    this.setState({ appart: event.target.value });
                  }}
                  value={this.state.appart}
                />
                <label>Digicode</label>
                <input
                  type="text"
                  placeholder="ex : B123"
                  onChange={event => {
                    this.setState({ digicode: event.target.value });
                  }}
                  value={this.state.digicode}
                />
                <div>
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
                <div>
                  <label>Code postal</label>
                  <input
                    type="text"
                    placeholder="ex : 75001"
                    onChange={event => {
                      this.setState({ zipCode: event.target.value });
                    }}
                    value={this.state.zipCode}
                  />
                  <label>city</label>
                  <input
                    type="text"
                    placeholder="ex : Paris"
                    onChange={event => {
                      this.setState({ city: event.target.value });
                    }}
                    value={this.state.city}
                  />
                </div>
                <div>
                  <label>Numéro de téléphone</label>
                  <input
                    type="text"
                    placeholder="ex : + 33 9 77 55 03 30"
                    onChange={event => {
                      this.setState({ phone: event.target.value });
                    }}
                    value={this.state.phone}
                  />
                </div>
                <div>
                  <label>Instructions pour votre livreur</label>
                  <textarea>
                    ex: C'est la porte noir près de l'animalerie
                  </textarea>
                </div>
              </div>
            </form>
            <hr />
            <span>Votre commande arrivera dans 15 - 25 minutes</span>
            <button type="submit">Confirmer et payer</button>
            {/* {this.props.location.submittedCart} */}
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
