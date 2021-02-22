import React from "react";
import heroImg from "../assets/hero.png";
import "../components/Hero.css";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Hero() {
  return (
    <section className="hero-area bg_cover" id="home-div">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 hero-height">
            <div className="hero-content">
              <p className="hello">Hello,</p>
              <h1 className="title">I'm Peter Imoh Victor</h1>
              <h4>Website and Web Applications Developer</h4>
              <ul className="nav">
                <li>
                  <a className="main-btn" href="#project-div">
                    View Portfolio <ExpandMoreIcon className="btn-icon" />
                  </a>
                </li>
                <li>
                  <a className="main-btn main-btn-2" href="#">
                    Download CV <CloudDownloadIcon className="btn-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img-background">
              {/* <img className="hero-img" src={heroImg} alt="hero-img" /> */}
              <div className="hero-img"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
