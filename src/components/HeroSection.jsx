import React from "react";
import Button from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        autoPlay
        loop
        muted
      ></video> */}
      <h1>HEADER</h1>
      <p>Paragraph</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch Trailer <img className="far fa-play-circle"></img>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
