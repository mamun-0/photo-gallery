import ImageCard from "./ImageCard";
import "./ImageList.css";
import Popup from "../Modal/Modal";
import photoFetch from "../../axios/photoFetch";
import React from "react";
class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: null };
  }

  async componentDidMount() {
    try {
      const { data } = await photoFetch();
      this.setState({
        images: data,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  render() {
    if (!this.state.images) {
      return (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    } else {
      const images = this.state.images.map((image) => {
        return (
          <div key={image.id} className="mb-3">
            <ImageCard img={image.url} />
            <Popup {...image} />
          </div>
        );
      });
      return <div className="image-list container">{images}</div>;
    }
  }
}

export default ImageList;
