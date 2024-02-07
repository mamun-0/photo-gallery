import SectionHeading from "../../SectionHeading/SectionHeading";
import "./PageHero.css";
const PageHero = (props) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(
          180deg,
          rgba(19, 19, 24, 0.8) 0%,
          rgba(19, 19, 24, 0) 100%
        ), url(${props.background})`,
        }}
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
