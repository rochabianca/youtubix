import React, { Component } from "react";
import axios from "axios";
import Video from "./Video";
import youtubeApi from "../../secrets";

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
    console.log("clicou");
    const { key, channelId } = youtubeApi;
    const { videos } = this.props;
    let moreVideos = [];

    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${channelId}&pageToken=${token}&part=snippet,id&order=date`
    );
    console.log(res.data);
    videos.map(video => {
      moreVideos.push(video);
    });
    res.data.items.map(item => {
      moreVideos.push(item);
    });
    this.setState({
      videos: moreVideos,
      token: res.data.nextPageToken
    });
    return this.state;
  };

  render() {
    // próximo objetivo: fazer isso vir do state
    const { videos, token } = this.props;

    return (
      <div>
        <h1 className="youtube__title">+ Vídeos</h1>
        <div className="videos youtube__box youtube__box--fixed">
          {videos === undefined
            ? null
            : videos.map(video => (
                <Video
                  key={video.id.videoId}
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
  }
}
