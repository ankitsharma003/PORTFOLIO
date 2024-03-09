import React from "react";
import "./Projects.css";
import Projectdisplay from "../components/project display/Projectdisplay";
import { All_projectsdata } from "../assets/All_projectsdata";
const Projects = () => {
  return (
    <div className="projects">
      <h1>MY Work</h1>
        <hr />
      <div className="projects-item">
        {All_projectsdata.map((item, i) => {
          return (
            <Projectdisplay
              key={i}
              id={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
              img1={item.img1}
              img2={item.img2}
              link={item.link}
              gitlink={item.gitlink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
