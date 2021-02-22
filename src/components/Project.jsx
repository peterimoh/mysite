import React from "react";
import "./projects.css";
import data from "./data";

function Project() {
  return (
    <section className="projects" id="project-div">
      <h1>My Works</h1>
      <hr />
      <div className="row">
        {data.map((items) => {
          const { id, image, link, name, technology } = items;
          return (
            <div className="column" key={id}>
              <div className="card">
                <img src={image} alt={name} className="img" />
                <div className="container">
                  <h4 className="project-name">Project name: {name}</h4>
                  <p className="technology">Technologies: {technology}</p>
                  <p>
                    <center>
                      <a href={link} target="_blank">
                        <button className=" button">view project</button>
                      </a>
                    </center>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Project;
