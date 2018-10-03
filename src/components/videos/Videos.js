import React, { Component } from "react";
import Video from "./Video";

export default class Videos extends Component {
  render() {
    const { videos } = this.props;
    return (
      <div>
        <h1 className="youtube__title">+ Vídeos</h1>
        <div className="videos youtube__box">
          {videos.map(video => (
            <Video key={video.id.videoId} video={video} />
          ))}
        </div>
      </div>
    );
  }
}
