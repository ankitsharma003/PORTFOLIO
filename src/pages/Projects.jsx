import React, { useEffect } from "react";
import "./Projects.css";
import Projectdisplay from "../components/project display/Projectdisplay";
import { All_projectsdata } from "../assets/All_projectsdata";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="projects-header" data-aos="fade-up">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          My Work
        </motion.h1>
        <div className="section-divider"></div>
        <motion.p
          className="section-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Here's a collection of projects I've built. Each one represents a
          unique challenge and learning experience.
        </motion.p>
      </div>

      <motion.div
        className="projects-grid"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {All_projectsdata.map((item, i) => {
          return (
            <motion.div
              key={i}
              variants={item}
              className="project-item-wrapper"
            >
              <Projectdisplay
                id={item.id}
                name={item.name}
                description={item.description}
                image={item.image}
                img1={item.img1}
                img2={item.img2}
                link={item.link}
                gitlink={item.gitlink}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
