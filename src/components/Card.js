import React from "react";

class Card extends React.Component {
  renderImage(url) {
    if (url) {
      return <img src={this.props.image} alt="" />;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="card" onClick={this.props.onClick}>
        <div className="menu">
          <h4>{this.props.label}</h4>
          <p>{this.props.description}</p>
          <p>{this.props.price}</p>
        </div>
        <div className="card-picture">{this.renderImage(this.props.image)}</div>
      </div>
    );
  }
}
export default Card;
