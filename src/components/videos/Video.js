import React from "react";
import propTypes from "prop-types";

const Video = ({ title, thumbnail }) => {
  return (
    <div>
      <img src={thumbnail} alt={title} />
      {title}
    </div>
  );
};

Video.propTypes = {
  video: propTypes.object
};

export default Video;
