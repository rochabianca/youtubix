import propTypes from "prop-types";
import axios from "axios";
import youtubeApi from "./secrets";

const getVideoViews = async videoId => {
  const statistics = await axios.get(
    `https://content.googleapis.com/youtube/v3/videos?id=${videoId},CeIho2S0ZahI&part=statistics&key=${
      youtubeApi.key
    }`
  );

  const views = statistics.data.items[0].statistics.viewCount;

  return views;
};

getVideoViews.propTypes = {
  videoId: propTypes.string.isRequired,
  key: propTypes.string.isRequired
};

export default getVideoViews;
