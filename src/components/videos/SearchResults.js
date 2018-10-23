import React, { Component } from "react";
import axios from "axios";
import youtubeApi from "../../secrets";
import uuid from "uuid";
import Video from "../featured/Video";

export default class SearchResults extends Component {
  state = {
    videos: []
  };

  async componentDidMount() {
    const { videos } = await this.state;
    this.setState({
      videos
    });
  }

  static getDerivedStateFromProps(props, state) {
    const { query } = props.match.params;
    const { uploadsId, key } = youtubeApi;
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?playlistId=${uploadsId}&q=${query}&key=${key}&part=snippet&maxResults=25`
      )
      .then(function(result) {
        // console.log("result", result.data.items);

        return {
          videos: result.data.items
        };
      })
      .catch(error => {
        console.log(error.response);
        return null;
      });
  }

  render() {
    // console.log("state: ", this.state);
    const { videos } = this.state;
    // console.log("videos ", videos);

    if (videos) {
      return (
        <div>
          {videos.map(video => (
            <Video
              key={uuid()}
              title={video.snippet.title}
              thumbnail={video.snippet.thumbnails.default.url}
              videoId={video.id.videoId}
            />
          ))}
        </div>
      );
    } else {
      return null;
    }
  }
}
