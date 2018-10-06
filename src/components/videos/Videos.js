import React, { Component } from "react";
import Video from "./Video";

export default class Videos extends Component {
  state = {
    title: "",
    thumbnail: []
  };

  render() {
    const { videos } = this.props;
    console.log(videos);
    return (
      <div>
        <h1 className="youtube__title">+ Vídeos</h1>
        <div className="videos youtube__box">
          {videos === undefined
            ? null
            : videos.map(video => (
                <Video
                  key={video.id.videoId}
                  title={video.snippet.title}
                  thumbnail={video.snippet.thumbnails.default.url}
                />
              ))}
          <button className="btn">Carregar Mais Vídeos...</button>
        </div>
      </div>
    );
  }
}
