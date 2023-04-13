import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.scss";
import TraverseLogo from "../../assets/logo/traverse-logo.png";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="header">
        <div>
          <Link className="navBar__list-link" to="/">
            <img
              className="header__logo"
              src={TraverseLogo}
              alt="Traverse logo"
            ></img>
          </Link>
        </div>
        <div>
          <button className="hamburger" onClick={toggleMenu}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
          <nav className={`navBar ${showMenu ? "show" : ""}`}>
            <ul className="navBar__list">
              {/* {isAuth && ( */}
              <>
                <Link className="navBar__list-link" to="/">
                  <li className="navBar__list-item">Home</li>
                </Link>
                <Link className="navBar__list-link" to="/favorites">
                  <li className="navBar__list-item">Favorites</li>
                </Link>
                <Link className="navBar__list-link" to="/bulletin">
                  <li className="navBar__list-item">Bulletin</li>
                </Link>
              </>
              {/* )} */}
              {/* {!isAuth ? ( */}
              <>
                <Link className="navBar__list-link" to="/login">
                  <li className="navBar__list-item navBar__auth">Login</li>
                </Link>
                <Link className="navBar__list-link" to="/signup">
                  <li className="navBar__list-item navBar__auth">Sign up</li>
                </Link>
              </>
              {/* ) : ( */}
              <Link className="navBar__list-link" to="/login">
                <li className="navBar__list-item navBar__auth">Logout</li>
                {/* onClick={handleLogout} */}
              </Link>
              {/* )} */}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
