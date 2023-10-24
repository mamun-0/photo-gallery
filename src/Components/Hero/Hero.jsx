import SectionHeading from "../SectionHeading/SectionHeading";
import "./Hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Photo Gallery Website </h1>
          <p>
            Explore the amazing features of our website and discover a new world
            of possibilities.
          </p>
          <Link className="btn btn-warning p-2" to="/login">
            Get Started
          </Link>
        </div>
      </div>
      <SectionHeading title={"Photos"} />
    </>
  );
};

export default Hero;
