import React from "react";
import "../components/about.css";
import Avatar from "../assets/avatar.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

function About() {
  return (
    <section className="container about-section" id="about-div">
      <div className="about">
        <div className="about-section">
          <hr />
          <center>
            <h2>About Me</h2>

            <img className="avatar" src={Avatar} alt="imoh-peter" />
            <h4>peter imoh victor</h4>
            <ul>
              <GitHubIcon className="about-icon" />
              <LinkedInIcon className="about-icon" />
              <EmailIcon className="about-icon" />
            </ul>

            <p>
              I am a frontend web developer with expertise in css, JavaScript,
              bootstrap framework, ReactJS and WordPress. I seeking for
              opportunities that will allow me to develop and build my skills.
              Also, I'm open to work with you on your projects
            </p>
          </center>
          <hr />
          {/* <div className="w-100 d-none d-md-block"></div> */}
        </div>
      </div>
    </section>
  );
}

export default About;
