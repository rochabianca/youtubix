import React, { Component } from "react";
import axios from "axios";
import Video from "../featured/Video";
import youtubeApi from "../../secrets";
import uuid from "uuid";
import getVideos from "../../getVideos";

export default class List extends Component {
  state = {
    videos: [],
    token: ""
  };

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

  async componentDidMount() {
    const { videos, token } = await getVideos;
    this.setState({
      videos,
      token
    });
  }

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
          <h1 className="youtube__title">Todos os Vídeos do Canal</h1>
          <div className="list">
            {videos.map(video => (
              <div key={uuid()}>
                <Video
                  title={video.snippet.title}
                  thumbnail={video.snippet.thumbnails.default.url}
                  videoId={video.id.videoId}
                />
              </div>
            ))}
            <button onClick={this.getMore.bind(this, token)} className="btn">
              Carregar Mais Vídeos...
            </button>
          </div>
        </div>
      );
    } else {
      return "Loading...";
    }
  }
}
