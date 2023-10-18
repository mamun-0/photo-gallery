import DB from "../../Data/photos";
import ImageCard from "./ImageCard";
import "./ImageList.css";
import Popup from "../Modal/Modal";
const ImageList = () => {
  const images = DB.map((image) => {
    return (
      <div key={image.id} className="mb-3">
        <ImageCard img={image.url} />
        <Popup  {...image} />
      </div>
    );
  });
  return <div className="image-list container">{images}</div>;
};

export default ImageList;
