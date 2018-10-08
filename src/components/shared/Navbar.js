import React, { Component } from "react";
import axios from "axios";
import logo from "../../images/logo.png";
import busca from "../../images/busca.png";
import youtubeApi from "../../secrets";
export default class Navbar extends Component {
  onSubmit = e => {
    e.preventDefault();
    //get query and redirect to /search/query
  };
  render() {
    return (
      <nav className="navbar">
        <div className="container navbar__container">
          <div className="navbar__logo">
            <img src={logo} alt="Fictícia Vídeos" />
          </div>
          <div>
            <ul className="navbar__items">
              <li>
                <form onSubmit={this.onSubmit}>
                  <input type="text" />
                </form>
                <img src={busca} alt="Buscar" />
              </li>
              <li>Menu</li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
