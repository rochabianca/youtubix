import React, { Component } from "react";
import axios from "axios";
import Video from "./Video";
import youtubeApi from "../../secrets";
import uuid from "uuid";

export default class Videos extends Component {
  state = {
    videos: [],
    token: ""
  };

  initializeState = props => {
    this.setState({
      videos: props.videos,
      token: props.token
    });
  };

  componentDidMount() {
    this.initializeState(this.props);
  }

  getMore = async token => {
    const { key, uploadsId } = youtubeApi;
    const { videos } = this.state;
    let moreVideos = [];
    videos.map(video => {
      moreVideos.push(video);
    });
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${uploadsId}&key=${key}&part=snippet&pageToken=${token}`
    );
    res.data.items.map(item => {
      moreVideos.push(item);
    });

    this.setState({
      videos: moreVideos,
      token: res.data.nextPageToken
    });

    return this.state;
  };

  static getDerivedStateFromProps(props, state) {
    const { videos, token } = props;

    if (state.token === "") {
      return {
        videos: videos,
        token: token
      };
    }
    return state;
  }

  render() {
    const { videos, token } = this.state;

    if (videos && token) {
      return (
        <div>
          <h1 className="youtube__title">+ Vídeos</h1>
          <div className="videos youtube__box youtube__box--fixed">
            {videos.map(video => (
              <Video
                key={uuid()}
                title={video.snippet.title}
                thumbnail={video.snippet.thumbnails.default.url}
                videoId={video.id.videoId}
              />
            ))}
            <button onClick={this.getMore.bind(this, token)} className="btn">
              Carregar Mais Vídeos...
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
