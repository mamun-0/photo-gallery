import { useState, useEffect } from "react";
import PageHero from "../PagesHeroSection/PageHero";
import axios from "axios";
import ImageCard from "../../ImageCard/ImageCard";
import Popup from "../../Modal/Modal";
const People = () => {
  const [peoples, setPeoples] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("http://localhost:3001/pictures");
        const filteredPeoples = data.filter((people) => {
          return people.category === "people";
        });
        setPeoples(filteredPeoples);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData();
  }, []);

  const showImages = () => {
    if (!peoples) {
      return (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    } else {
      const images = peoples.map((image) => {
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
        background={`https://images.unsplash.com/photo-1442328166075-47fe7153c128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`}
        title={"People"}
        paragraph={
          "People are the focal point of this category, where photographers skillfully depict the human experience. From candid moments to formal portraits, this category showcases the myriad emotions, cultures, and stories that define us."
        }
        sectionHeading={"People"}
      />
      {showImages()}
    </>
  );
};
export default People;
