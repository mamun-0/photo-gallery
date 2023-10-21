import { useState } from "react";
import PageHero from "../PagesHeroSection/PageHero";
import { useEffect } from "react";
import axios from "axios";
import ImageCard from "../../ImageCard/ImageCard";
import Popup from "../../Modal/Modal";

const Animal = () => {
  const [animals, setAnimals] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("http://localhost:3001/pictures");
      const filteredAnimals = data.filter((animal) => {
        return animal.category === "animal";
      });
      setAnimals(filteredAnimals);
    }
    fetchData();
  }, []);

  const showImages = () => {
    if (!animals) {
      return (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    } else {
      const images = animals.map((image) => {
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
        background={
          "https://images.unsplash.com/photo-1696934688443-7cd806cf8937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D&dpr=1&auto=format%2Ccompress&fit=crop&w=1399&h=594"
        }
        title={"Animals"}
        paragraph={
          "This category pays homage to the fascinating world of animals. Photographers capture the diversity, behavior, and beauty of creatures from across the globe, bringing the animal kingdom closer to the viewer's heart and lens."
        }
        sectionHeading={"Animals"}
      />
      {showImages()}
    </>
  );
};
export default Animal;
