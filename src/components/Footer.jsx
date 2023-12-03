import React from "react";
import Button from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Join the newsletter today
          </p>
          <p className="footer-subscription-text">
            You can unsubscribe anytime
          </p>
          <div className="input-areas">
            <form>
              <input
                type="email"
                name="email"
                placeholder="email@email.com"
                className="footer-input"
              />
              <Button buttonStyle="btn--outline" buttonSize="btn--medium">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About Us</h2>
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/products">Products</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About Us</h2>
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/products">Products</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About Us</h2>
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/products">Products</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About Us</h2>
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/products">Products</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                TRAVEL{" "}
                <img
                  src="https://cdn.discordapp.com/emojis/625190790586433537.webp?size=128&quality=lossless"
                  height="35"
                  width="35"
                  className="fab fa-typo3"
                ></img>
              </Link>
            </div>
            <small className="website-rights">TRAVEL 2023</small>
            <div className="social-icons">
              <Link
                to="/"
                target="_blank"
                aria-label="Facebook"
                className="social-icon-link facebook"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Facebook_icon_2013.svg"
                  height="25"
                  width="25"
                ></img>
              </Link>
              <Link
                to="/"
                target="_blank"
                aria-label="Instagram"
                className="social-icon-link instagram"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                  height="25"
                  width="25"
                ></img>
              </Link>
              <Link
                to="/"
                target="_blank"
                aria-label="Twitter"
                className="social-icon-link twitter"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/sco/9/9f/Twitter_bird_logo_2012.svg"
                  height="25"
                  width="25"
                ></img>
              </Link>
              <Link
                to="/"
                target="_blank"
                aria-label="Youtube"
                className="social-icon-link youtube"
              >
                <img
                  src="https://www.svgrepo.com/show/13671/youtube.svg"
                  height="25"
                  width="25"
                ></img>
              </Link>
              <Link
                to="/"
                target="_blank"
                aria-label="Snapchat"
                className="social-icon-link snapchat"
              >
                <img
                  src="https://www.svgrepo.com/show/303130/snapchat-logo.svg"
                  height="25"
                  width="25"
                ></img>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;
