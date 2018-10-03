import React, { Component } from "react";
import axios from "axios";

import youtubeApi from "./secrets";

export default class Youtube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      featured: {}
    };
  }
  async componentDidMount() {
    const { key, channelId, maxResults } = youtubeApi;

    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
    );
    this.setState({
      videos: res.data,
      featured: {
        videoId: res.data.items[0].id.videoId,
        title: res.data.items[0].snippet.title,
        description: res.data.items[0].snippet.description
      }
    });
  }

  render() {
    const { videos, featured } = this.state;
    console.log(featured);
    return (
      <div className="youtube">
        <h1 className="youtube__title">Vídeo em destaque</h1>
        {featured === undefined ? null : (
          <div className="youtube__featured">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${featured.videoId}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />

            <div className="youtube__resume">
              <h3>{featured.title}</h3>
              <p>{featured.description}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
