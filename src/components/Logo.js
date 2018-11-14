import React from "react";
import mainLogo from "../assets/logo-green.svg";

class Logo extends React.Component {
  render() {
    return (
      <div>
        <a href={this.props.url}>
          <img className="logo" src={mainLogo} alt="" />
        </a>
      </div>
    );
  }
}

export default Logo;
