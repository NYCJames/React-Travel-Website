import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "../../public/vite.svg";
import "../App.css";
import "./NavBar.css";
import Button from "./Button";
import Footer from "./Footer";

export default function NavBar() {
  const menuItems = ["Home", "Services", "Products"];
  const hamburgerIcon = `https://www.svgrepo.com/show/313139/hamburger-menu.svg`;
  const closeIcon = `https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Icon_close.svg/2048px-Icon_close.svg.png`;
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  function closeMobileMenu() {}

  function changeButton() {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  window.addEventListener(`resize`, changeButton);

  return (
    <>
      <nav className="navbar" onLoad={changeButton}>
        <div className="navbar-container">
          <Link to="/" onClick={closeMobileMenu} className="navbar-logo">
            TRAVEL
            <img
              src="https://cdn.discordapp.com/emojis/625190790586433537.webp?size=128&quality=lossless"
              height="35"
              width="35"
              className="fab fa-typo3"
            ></img>
          </Link>
          <div className="menu-icon">
            <img
              onClick={handleClick}
              height="35"
              width="35"
              className={click ? "fas fa-times" : "fas fa-bars"}
              src={click ? closeIcon : hamburgerIcon}
            ></img>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {menuItems.map(function (value) {
              return (
                <li className="nav-item" key={value}>
                  <Link
                    to={`/${value === "Home" ? `` : value.toLowerCase()}`}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    {value}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item">
              <Link
                to="/signup"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign-Up
              </Link>
            </li>
          </ul>
          {button && (
            <Button to="/signup" buttonStyle="btn--outline">
              Sign-Up
            </Button>
          )}
        </div>
      </nav>

      <Outlet></Outlet>

      <Footer></Footer>
    </>
  );
}
