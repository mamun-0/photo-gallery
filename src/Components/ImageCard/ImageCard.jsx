import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imgRef = React.createRef();
  }
  componentDidMount() {
    this.imgRef.current.addEventListener("load", () => {
      const clientHeight = this.imgRef.current.clientHeight;
      const spans = Math.ceil(clientHeight / 10);
      this.setState({ spans });
    });
  }
  render() {
    return (
      <div style={{gridRowEnd:`span ${this.state.spans}`}}>
        <img ref={this.imgRef} src={this.props.img} alt="img" />
      </div>
    );
  }
}
export default ImageCard;
