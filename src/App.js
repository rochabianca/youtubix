import React, { Component } from "react";
import Navbar from "./components/shared/Navbar";
import Youtube from "./Youtube";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Youtube />
        </div>
      </div>
    );
  }
}

export default App;
