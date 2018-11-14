import React from "react";
import Logo from "./Logo";

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <Logo url="http://www.deliveroo.fr/" />
      </div>
    );
  }
}

export default Header;
