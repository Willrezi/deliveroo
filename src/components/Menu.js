import React from "react";
import axios from "axios";

class Menu extends React.Component {
  state = {
    restaurant: {},
    menu: {}
  };

  render() {
    const menuItems = [];
    const menuKey = Object.entries(this.state.menu);

    for (let i = 0; i < menuKey.length; i++) {
      menuItems.push(
        <div>
          <h3>{menuKey[i][0]}</h3>
        </div>
      );
      for (let j = 0; j < menuKey[i][1].length; j++) {
        menuItems.push(
          <ul>
            <li className="card">
              <div className="menu">
                <h4>{menuKey[i][1][j].title}</h4>
                <p>{menuKey[i][1][j].description.slice(0, 50)}</p>
                <p>{menuKey[i][1][j].price.replace(".", ",") + " €"}</p>
              </div>
              <div className="card-picture">
                <img alt="" src={menuKey[i][1][j].picture} />
              </div>
            </li>
          </ul>
        );
      }
    }
    return (
      <div>
        <div className="container">
          <div className="resto">
            <div className="description">
              {" "}
              <h1>{this.state.restaurant.name}</h1>
              <p>{this.state.restaurant.description}</p>
            </div>
            <div>
              {" "}
              <img
                className="resto-picture"
                alt=""
                src={this.state.restaurant.picture}
              />
            </div>
          </div>
        </div>
        <div className="bg-colored">
          <div className="container">
            <div className="items">{menuItems}</div>
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
