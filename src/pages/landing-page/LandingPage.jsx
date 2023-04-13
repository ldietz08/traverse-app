import "./LandingPage.scss";
import { Link } from "react-router-dom";
import Hikers from "../../assets/images/hikers.jpg";
import Meadow from "../../assets/images/meadow.jpg";
import Button from "../../components/button/Button";

export default function LandingPage() {
  return (
    <main className="main">
      <div className="hero">
        <h1 className="hero__title">Discover Your Next Adventure</h1>
        <p className="hero__body">
          Find new hiking trails and connect with fellow hikers.
        </p>
        <Link to="/signup">
          <Button text="Get Started" />
        </Link>
      </div>
      <div className="features">
        <div className="feature">
          <img src={Meadow} alt="Grassy meadow" className="feature__img" />
          <div className="feature__text">
            <h2 className="feature__text-title">Favorite Hikes</h2>
            <p className="feature__text-body">
              Save your favorite hikes and access them later for future
              reference. Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </p>
          </div>
        </div>
        <span className="break" />
        <div className="feature">
          <div className="feature__text">
            <h2 className="feature__text-title">Bulletin Board</h2>
            <p className="feature__text-body">
              Connect with other hikers and share your experiences on our
              virtual bulletin board. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          <img
            src={Hikers}
            alt="Hikers with their arms around each other"
            className="feature__img"
          />
        </div>
      </div>
      <div className="cta">
        <h2 className="cta__title">Ready to Start Hiking?</h2>
        <Link to="/signup">
          <Button text="signup" />
        </Link>
      </div>
    </main>
  );
}
