import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero/Hero";
import Projects from "./Projects";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="home-container"
    >
      <Hero />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Projects />
      </motion.div>
    </motion.div>
  );
};

export default Home;
