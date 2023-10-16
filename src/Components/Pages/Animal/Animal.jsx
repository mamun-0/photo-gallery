import PageHero from "../PagesHeroSection/PageHero";

const Animal = () => {
  return (
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
  );
};
export default Animal;
