import React from "react";

class MenuContainer extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.label}</h3>
        <div className="menu-container"> {this.props.cards}</div>
      </div>
    );
  }
}

export default MenuContainer;
