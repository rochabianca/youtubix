import React, { Component } from "react";
import axios from "axios";
import youtubeApi from "../../secrets";
import uuid from "uuid";
import Video from "../featured/Video";

export default class SearchResults extends Component {
  state = {
    videos: []
  };
  getQueryResults = query => {
    const { uploadsId, key } = youtubeApi;
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?playlistId=${uploadsId}&q=${query}&key=${key}&part=snippet&maxResults=25`
      )
      .then(function(result) {
        console.log(result.data);
        return result.data;
      });
  };

  async componentDidMount() {
    const { query } = this.props.match.params;
    const videos = await this.getQueryResults(query);
    this.setState({
      videos
    });
  }
  render() {
    const { videos } = this.state;
    console.log(videos);
    return (
      <div>
        {videos === undefined
          ? null
          : videos.map(video => (
              <Video
                key={uuid()}
                title={video.snippet.title}
                thumbnail={video.snippet.thumbnails.default.url}
                videoId={video.id.videoId}
              />
            ))}
      </div>
    );
  }
}
