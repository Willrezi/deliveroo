import React from "react";

class MenuRestaurant extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="resto">
          <div className="description">
            {" "}
            <h1>{this.props.myRestaurant.name}</h1>
            <p>{this.props.myRestaurant.description}</p>
          </div>
          <div>
            {" "}
            <img
              className="resto-picture"
              alt=""
              src={this.props.myRestaurant.picture}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MenuRestaurant;
