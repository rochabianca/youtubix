import React, { Component } from "react";
import logo from "../../images/logo.png";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container navbar__container">
          <div className="navbar__logo">
            <img src={logo} alt="Fictícia Vídeos" />
          </div>
          <div>
            <ul className="navbar__items">
              <li>Search</li>
              <li>Menu</li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
