import React from "react";

class Card extends React.Component {
  render() {
    return (
      <ul>
        <li className="card">
          <div className="menu">
            <h4>{this.props.label}</h4>
            <p>{this.props.description}</p>
            <p>{this.props.price}</p>
          </div>
          <div className="card-picture">
            <img alt="" src={this.props.image} />
          </div>
        </li>
      </ul>
    );
  }
}
export default Card;
