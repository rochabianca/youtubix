import React from "react";
import propTypes from "prop-types";

import viewsGray from "../../images/views-gray.png";

const Video = ({ title, thumbnail }) => {
  return (
    <div className="thumbnail">
      <img className="thumbnail__image" src={thumbnail} alt={title} />
      <div className="thumbnail__info">
        <p className="thumbnail__title">{title}</p>

        <div className="thumbnail__views">
          <img src={viewsGray} alt="views" />
          <span>720 views</span>
        </div>
      </div>
    </div>
  );
};

Video.propTypes = {
  title: propTypes.string.isRequired,
  thumbnail: propTypes.string.isRequired
};

export default Video;
