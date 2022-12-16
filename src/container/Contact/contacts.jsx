import React from "react";
import "./contact.css";
import Card from "../../components/Cards/card";
import Home from "../../assets/home.svg";
import Phone from "../../assets/phone.svg";
import Email from "../../assets/email.svg";

function contacts() {
  return (
    <div className="portfolio__contacts section__padding" id="contact">
      <h1> Contact with me</h1>
      <p>Lets build something together &#128523; </p>
      <div className="portfolio__contact-content">
        <Card imageURL={Home} text="Kaiserslautern, Germany" />
        <Card imageURL={Phone} text="+49 177 8741500" />
        <Card imageURL={Email} text="saeedhamza268@gmail.com" />
      </div>
    </div>
  );
}

export default contacts;
