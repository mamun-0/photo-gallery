import SectionHeading from "../../SectionHeading/SectionHeading";
import "./PageHero.css";
const PageHero = (props) => {
  // console.log("PageHero", props.background);
  return (
    <>
      <div
        style={{ backgroundImage: `url(${props.background})` }}
        className="page-hero"
      >
        <div className="hero-content">
          <h2 className="display-2 gradient-text">{props.title}</h2>
          <p>{props.paragraph}</p>
        </div>
      </div>
      <SectionHeading title={props.sectionHeading} />
    </>
  );
};

export default PageHero;
