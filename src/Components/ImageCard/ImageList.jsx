import DB from "../../Data/photos";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = () => {
  const images = DB.map((image) => {
    return <ImageCard key={image.id} img={image.url} />;
  });
  return <div className="image-list container">{images}</div>;
};

export default ImageList;
