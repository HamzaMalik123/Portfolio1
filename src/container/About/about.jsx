import React from "react";
import "./about.css";
import About from "../../assets/hamza.JPG";

function about() {
  return (
    <div className="portfolio__about section__padding" id="about">
      <div className="portfolio__about-content">
        <h1>About Me </h1>
        <h3>
          {" "}
          My name is <span>Hamza Saeed</span> I am a Web Developer and Graphic
          Designer
        </h3>
        <p>
          As a react developer, I have a strong understanding of JavaScript and
          the ability to develop and maintain user interfaces using the React
          library. I have experience working with front-end technologies and I
          am able to create scalable, performant web applications that provide a
          seamless user experience. I am comfortable working in a team
          environment and have a track record of successfully delivering
          projects on time. In my role as a react developer, I am passionate
          about staying up-to-date with the latest developments in the field and
          I am always looking for ways to improve my skills and knowledge.
        </p>
        <p>
          I am able to work independently and take ownership of my projects, and
          I am comfortable working in a team environment as well.
        </p>
      </div>
      <div className="portfolio__about-image">
        <img src={About} alt="about" />
      </div>
    </div>
  );
}

export default about;
