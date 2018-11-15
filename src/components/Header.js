import React from "react";
import Logo from "./Logo";

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div className="container">
          <Logo url="http://www.deliveroo.fr/" />
        </div>
      </div>
    );
  }
}

export default Header;
