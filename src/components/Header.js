import React from "react";

import mainLogo from "../assets/Deliveroo_logo.png";

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div className="container">
          <img className="logo" src={mainLogo} alt="" />
        </div>
      </div>
    );
  }
}

export default Header;
