import axios from "axios";
import youtubeApi from "./secrets";

const { key, channelId, maxResults } = youtubeApi;

const getVideos = axios
  .get(
    `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}&pageToken`
  )
  .then(function(res) {
    return {
      videos: res.data.items,
      token: res.data.nextPageToken
    };
  });

export default getVideos;
