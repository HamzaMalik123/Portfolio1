import React from "react";
import Card from "../../components/Cards/card";
import Frontend from "../../assets/frontendweb.svg";
import pen from "../../assets/pen.svg";
import Graphic from "../../assets/graphic.svg";

import "./services.css";

function services() {
  return (
    <div className="portfolio__services section__padding" id="services">
      <h1> Services I Provide </h1>
      <p>
        {" "}
        I create responsive web applications in react.js. In addition, I do web
        content writing. I also have graphic designing experience and have
        assisted startups by creating creative designs to help their businesses.
      </p>
      <div className="portfolio__services-cards">
        <Card
          imageURL={Frontend}
          imageAlt="frontend"
          text="Frontend Development"
        />
        <Card imageURL={pen} text="Content Writer" />
        <Card imageURL={Graphic} text="Graphic Designing" />
      </div>
    </div>
  );
}

export default services;
