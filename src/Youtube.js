import React, { Component } from "react";
import axios from "axios";

import youtubeApi from "./secrets";
import YoutubeFeatured from "./components/videos/YoutubeFeatured";
import Videos from "./components/videos/Videos";

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
      videos: res.data.items,
      featured: {
        videoId: res.data.items[0].id.videoId,
        title: res.data.items[0].snippet.title,
        description: res.data.items[0].snippet.description
      }
    });
  }

  render() {
    const { videos, featured } = this.state;
    return (
      <div>
        {featured === undefined ? null : (
          <div className="youtube">
            <YoutubeFeatured featured={featured} />
            <Videos videos={videos} />
          </div>
        )}
      </div>
    );
  }
}
