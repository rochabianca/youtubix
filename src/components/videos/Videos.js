import React, { Component } from "react";
import Video from "./Video";

export default class Videos extends Component {
  state = {
    title: "",
    thumbnail: []
  };

  getTitleAndThumb = async video => {
    const { snippet } = await video;
    console.log(snippet);
    return (
      <Video
        key={video.id.videoId}
        title={snippet.title}
        thumbnail={snippet.thumbnails.default.url}
      />
    );
  };

  render() {
    const { videos } = this.props;
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
        </div>
      </div>
    );
  }
}
