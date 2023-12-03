import React from "react";
import Cards from "./Cards";
import "./CardSection.css";
import "../App.css";

function CardSection() {
  return (
    <>
      <div className="cards">
        <h1>Check out these destinations</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <Cards
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                text="Explore this destination and its many beaches"
                label="Adventure"
                path="/services"
              ></Cards>
              <Cards
                src="https://images.unsplash.com/photo-1509233725247-49e657c54213"
                text="Explore this destination and its many beaches"
                label="Adventure"
                path="/services"
              ></Cards>
            </ul>
            <ul className="cards__items">
              <Cards
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                text="Explore this destination and its many beaches"
                label="Adventure"
                path="/services"
              ></Cards>
              <Cards
                src="https://images.unsplash.com/photo-1509233725247-49e657c54213"
                text="Explore this destination and its many beaches"
                label="Adventure"
                path="/services"
              ></Cards>
              <Cards
                src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054"
                text="Explore this destination and its many beaches"
                label="Adventure"
                path="/services"
              ></Cards>
            </ul>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default CardSection;
