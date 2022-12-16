import React from "react";
import "./projects.css";
import Card from "../../components/Work/work";
import Covid from "../../assets/Covid-19.jpeg";
import Portfolio from "../../assets/portfolio.jpg";
import GPT from "../../assets/GPT.jpeg";

function projects() {
  return (
    <div className="portfolio__project section__padding" id="projects">
      <h1>My Projects</h1>
      <p>Here are few samples of my previous work &#128525;</p>
      <div className="portfolio__project-cards">
        <Card
          imageURL={Covid}
          alt="card"
          text="Covid-19"
          link="https://github.com/HamzaMalik123/Covid-19"
          subtext="During the panademic, I made this application to keep one's aware with the current situattion of viruse and also alert the daily covid cases around the globe."
          tech="HTML5, SASS, React "
        />

        <Card
          imageURL={Portfolio}
          alt="card"
          text="Portfolio"
          link="https://github.com/HamzaMalik123/Portfolio1"
          subtext="Portfolio is my updated person portfolio website which is build by heart. It is open source and you are free to use the code as well from the Github link."
          tech="HTML5, CSS3, AntD, React"
        />
        <Card
          imageURL={GPT}
          alt="card"
          text="GPT"
          link="https://github.com/HamzaMalik123/gpt"
          subtext="I am currently working on making clone of open AI chat box called GPT. It is not functional yet but in the future it will be functional."
          tech="HTML5, CSS3, Bootstrap, React"
        />
      </div>
    </div>
  );
}

export default projects;
