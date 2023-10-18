import React from "react";
class ImageCard extends React.Component {
  render() {
    return <img src={this.props.img} alt="img" className="m-2" />;
  }
}
export default ImageCard;
