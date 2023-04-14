import "./Explore.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <Link className="hero__link" to={"hikes"}>
          <button className="hero__title">Start Exploring</button>
        </Link>
      </div>
    </>
  );
};

export default Hero;
