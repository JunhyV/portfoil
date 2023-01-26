import React from "react";
import { motion } from "framer-motion";
import { projects } from "../utils/projects";
import github from "../assets/icons8-github.svg";
import view from "../assets/icons8-cbs-logo.svg";
import "../style/projects.css";

const Projects = () => {
  console.log(projects);
  return (
    <motion.div
      className="content project"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 10 }}
      viewport={{ once: true }}
    >
      {projects.map((project) => (
        <div className="project__card" key={project.id}>
          <p className="project__skills">{project.skills}</p>
          <h2 className="project__title">{project.name}</h2>
          <div className="project__links">
            <img className="project__img" src={project.img} alt="project" />
            <a className="project__link" href={project.view} target="_blank">
              <img className="link__img" src={view} alt="view" />
            </a>
            <a
              className="project__link project__link--2"
              href={project.code}
              target="_blank"
            >
              <img className="link__img" src={github} alt="github" />
            </a>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Projects;
