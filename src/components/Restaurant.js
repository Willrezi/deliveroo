import React from "react";
import axios from "axios";
import MenuRestaurant from "./MenuRestaurant";
import Header from "./Header";
import Card from "./Card";
import MenuContainer from "./MenuContainer";
import Cart from "./Cart";

class Restaurant extends React.Component {
  state = {
    restaurant: {},
    menu: {},
    cart: []
  };

  render() {
    const menuContainer = [];
    const entries = Object.entries(this.state.menu);

    for (let i = 0; i < entries.length; i++) {
      const menuItems = [];
      for (let j = 0; j < entries[i][1].length; j++) {
        menuItems.push(
          <Card
            key={j}
            label={entries[i][1][j].title}
            description={entries[i][1][j].description.slice(0, 50)}
            price={entries[i][1][j].price.replace(".", ",") + " €"}
            image={entries[i][1][j].picture}
            onClick={() => {
              const oldCart = this.state.cart;
              const newCart = [...oldCart];

              let productFound = false;
              for (let k = 0; k < newCart.length; k++) {
                if (newCart[k].id === entries[i][1][j].id) {
                  productFound = true;
                  newCart[k].quantity++;
                }
              }
              if (productFound === false) {
                newCart.push({
                  id: entries[i][1][j].id,
                  quantity: 1,
                  name: entries[i][1][j].title,
                  price: Number(entries[i][1][j].price)
                });
              }
              this.setState({
                cart: newCart
              });
            }}
          />
        );
      }
      menuContainer.push(
        <MenuContainer label={entries[i][0]} cards={menuItems} />
      );
    }

    return (
      <div>
        {/* <Header /> */}
        <MenuRestaurant myRestaurant={this.state.restaurant} />
        <div className="bg-colored">
          <div className="container">
            {" "}
            <div className="items">{menuContainer}</div>
            <Cart
              cart={this.state.cart}
              myRestaurant={this.state.restaurant.name}
              onUpdate={(id, qty) => {
                const newCart = [...this.state.cart];
                for (let i = 0; i < newCart.length; i++) {
                  if (newCart[i].id === id) {
                    newCart[i].quantity += qty;
                  }
                }
                this.setState({
                  cart: newCart
                });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
componentDidMount() {
    axios.get("https://deliveroo-api.now.sh/menu").then(response => {
      this.setState({
        restaurant: response.data.restaurant,
        menu: response.data.menu
      });
    });
  }
}
export default Restaurant;
