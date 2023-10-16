import PageHero from "../PagesHeroSection/PageHero";

const People = () => {
  return (
    <PageHero
    background = {`https://images.unsplash.com/photo-1442328166075-47fe7153c128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`}
      title={"People"}
      paragraph={
        "People are the focal point of this category, where photographers skillfully depict the human experience. From candid moments to formal portraits, this category showcases the myriad emotions, cultures, and stories that define us."
      }
      sectionHeading={"People"}
    />
  );
};
export default People;
