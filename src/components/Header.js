import React, { Component } from "react";
import facebook from "../assets/facebook.png";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img width="150" src={facebook} />
        <div className="header-right">
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </div>
    );
  }
}

export default Header;
