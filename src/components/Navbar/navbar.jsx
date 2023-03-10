import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/HS.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Resume from "../../assets/Hamza Saeed.pdf";
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="portfolio__navbar">
      <div className="portfolio__navbar-links">
        <div className="portfolio__navbar-logo">
          <img src={logo} alt="portfolio logo" />
        </div>
        <div className="portfolio__navbar-links_container">
          <p>
            <a href="#home">Home </a>
          </p>
          <p>
            <a href="#about"> About </a>
          </p>
          <p>
            <a href="#services">Services</a>
          </p>
          <p>
            <a href="#projects"> Projects</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
        </div>
        <div className="portfolio__navbar-cv-btn">
          <button type="button">
            <a href={Resume} download>
              Download CV
            </a>
          </button>
        </div>
        <div className="portfolio__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="portfolio__navbar-menu_container scale-up-center">
              <div className="portfolio__navbar-menu_container-links">
                <p>
                  <a href="#home">Home </a>
                </p>
                <p>
                  <a href="#projects"> Projects</a>
                </p>
                <p>
                  <a href="#about"> About </a>
                </p>
                <p>
                  <a href="#contact">Contact</a>
                </p>
              </div>
              <div className="portfolio__navbar-menu_cvbutton">
                <p>
                  <a href={Resume} download>
                    Download CV
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
