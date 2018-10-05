import React, { Component } from "react";

export default class YoutubeFeatured extends Component {
  render() {
    const { featured } = this.props;
    return (
      <div className="youtube__featured">
        <h1 className="youtube__title">Vídeo em destaque</h1>
        <iframe
          title={featured.videoId}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${featured.videoId}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />

        <div className="youtube__resume youtube__box">
          <h3>{featured.title}</h3>
          <p>{featured.description}</p>
        </div>
      </div>
    );
  }
}
