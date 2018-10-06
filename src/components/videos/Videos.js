import React, { Component } from "react";
import axios from "axios";
import Video from "./Video";
import youtubeApi from "../../secrets";

export default class Videos extends Component {
  state = {
    videos: []
  };

  getMore = async token => {
    console.log("clicou");
    const { key, channelId } = youtubeApi;

    console.log(token);
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${channelId}&pageToken=${token}&part=snippet,id&order=date`
    );
    console.log(res.data.nextPageToken);
  };

  async componentDidMount() {
    const { videos } = await this.props;
    console.log(videos);
    this.setState({
      videos: videos
    });
  }

  render() {
    const { videos, token } = this.props;
    return (
      <div>
        <h1 className="youtube__title">+ Vídeos</h1>
        <div className="videos youtube__box youtube__box--fixed">
          {videos === undefined
            ? null
            : videos.map(video => {
                return (
                  <Video
                    key={video.id.videoId}
                    title={video.snippet.title}
                    thumbnail={video.snippet.thumbnails.default.url}
                    videoId={video.id.videoId}
                  />
                );
              })}
          <button onClick={this.getMore.bind(this, token)} className="btn">
            Carregar Mais Vídeos...
          </button>
        </div>
      </div>
    );
  }
}
