import React from "react";
import axios from "axios";
import Restaurant from "./Restaurant";
import Header from "./Header";
import Card from "./Card";
import MenuContainer from "./MenuContainer";
import Basket from "./Basket";

class Menu extends React.Component {
  state = {
    restaurant: {},
    menu: {},
    basket: []
  };

  render() {
    const menuContainer = [];
    const entries = Object.entries(this.state.menu);

    for (let i = 0; i < entries.length; i++) {
      const menuItems = [];
      for (let j = 0; j < entries[i][1].length; j++) {
        menuItems.push(
          <Card
            label={entries[i][1][j].title}
            description={entries[i][1][j].description.slice(0, 50)}
            price={entries[i][1][j].price.replace(".", ",") + " €"}
            image={entries[i][1][j].picture}
          />
        );
      }
      menuContainer.push(
        <MenuContainer label={entries[i][0]} cards={menuItems} />
      );
    }
    return (
      <div>
        <Header />
        <Restaurant myRestaurant={this.state.restaurant} />
        <div className="bg-colored">
          <div className="container">
            {" "}
            <Basket />
            <div className="items">{menuContainer}</div>
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
export default Menu;
