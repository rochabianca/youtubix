import React, { Component } from "react";
import axios from "axios";

import { key, channelId, maxResults } from "./secrets";
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LIST":
      return;
    case "SEARCH":
      return;
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    videos: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
    );
    this.setState({ videos: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
