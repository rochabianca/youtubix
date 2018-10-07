import React, { Component } from "react";
import axios from "axios";

import youtubeApi from "./secrets";
import YoutubeFeatured from "./components/videos/YoutubeFeatured";
import Videos from "./components/videos/Videos";
import getVideoViews from "./getVideoViews";

export default class Youtube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      featured: {},
      token: ""
    };
  }
  async componentDidMount() {
    const { key, channelId, maxResults } = youtubeApi;

    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}&pageToken`
    );
    const statistics = await getVideoViews(res.data.items[0].id.videoId, key);

    this.setState({
      videos: res.data.items,
      token: res.data.nextPageToken,
      featured: {
        videoId: res.data.items[0].id.videoId,
        title: res.data.items[0].snippet.title,
        description: res.data.items[0].snippet.description,
        date: res.data.items[0].snippet.publishedAt,
        views: statistics
      }
    });
  }

  render() {
    const { videos, featured, token } = this.state;
    return (
      <div>
        {featured === undefined ? null : (
          <div className="youtube">
            <YoutubeFeatured featured={featured} />
            <Videos videos={videos} token={token} />
          </div>
        )}
      </div>
    );
  }
}
