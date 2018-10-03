import React, { Component } from "react";
import propTypes from "prop-types";

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      thumb: "",
      views: ""
    };
  }

  // toDo: ajeitar essa parte para pegar os dados de props e então mostra-los na view
  // componentDidMount() {
  //   console.log(this.props.video);
  //   const { snipped } = this.props.video;
  //   const { title, thumbnails } = snipped;
  //   console.log(title);
  //   this.setState({
  //     title: snipped
  //   });
  // }
  render() {
    const { title, thumb, views } = this.state;
    return <div>{title === undefined ? null : <div>{title}</div>}</div>;
  }
}

Video.propTypes = {
  video: propTypes.object.isRequired
};

export default Video;
