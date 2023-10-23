import { useState, useEffect } from "react";
import PageHero from "../PagesHeroSection/PageHero";
import axios from "axios";
import ImageCard from "../../ImageCard/ImageCard";
import Popup from "../../Modal/Modal";
const Nature = () => {
  const [natures, setNatures] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("http://localhost:3001/pictures");
        const filteredNatures = data.filter((nature) => {
          return nature.category === "nature";
        });
        setNatures(filteredNatures);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData();
  }, []);

  const showImages = () => {
    if (!natures) {
      return (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    } else {
      const images = natures.map((image) => {
        return (
          <div key={image.id} className="mb-3">
            <ImageCard img={image.url} />
            <Popup {...image} />
          </div>
        );
      });
      return <div className="image-list container">{images}</div>;
    }
  };
  return (
    <>
      <PageHero
        background={`https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`}
        title={"Nature"}
        paragraph={
          "Nature's wonders take center stage in this category, where photographers capture the breathtaking landscapes, diverse flora and fauna, and mesmerizing natural phenomena that adorn our planet. From grand vistas to macro shots, these images transport viewers into the heart of the great outdoors"
        }
        sectionHeading={"Nature"}
      />
      {showImages()}
    </>
  );
};
export default Nature;
