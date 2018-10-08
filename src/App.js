import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Youtube from "./Youtube";
import "./App.css";
import List from "./components/videos/List";
import SearchResults from "./components/videos/SearchResults";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Youtube} />
              <Route exact path="/videos" component={List} />
              <Route exact path="/search/:query" component={SearchResults} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
