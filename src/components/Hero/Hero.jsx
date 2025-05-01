import React from "react";
import Ankitsharma_img from "../../assets/Ankitsharma_img.png";
import "./Hero.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiOpenai,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const techStackVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.6,
      },
    },
  };

  const techItemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      y: -5,
      scale: 1.1,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const socialItemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.2,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.9 },
  };

  const highlightVariants = {
    initial: { backgroundSize: "0 100%" },
    animate: {
      backgroundSize: "100% 100%",
      transition: { delay: 1, duration: 0.8 },
    },
  };

  return (
    <section className="hero">
      <div className="hero-background-elements">
        <div className="hero-blob-1"></div>
        <div className="hero-blob-2"></div>
        <div className="hero-grid"></div>
      </div>

      <motion.div
        className="hero-left-side"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-title-area" variants={itemVariants}>
          <div className="hero-greeting">
            <span className="greeting-emoji">👋</span> Hello, I am
          </div>
          <h1 className="hero-title">
            Ankit Sharma
            <span className="title-dot"></span>
          </h1>
          <div className="hero-subtitle">
            <motion.span
              className="highlight"
              initial="initial"
              animate="animate"
              variants={highlightVariants}
            >
              Front-End Developer
            </motion.span>{" "}
            & UI Enthusiast
          </div>
          <p className="hero-description">
            I craft modern, responsive web experiences with a focus on
            performance and aesthetics. Specializing in React ecosystem, I
            transform designs into exceptional digital products that users love.
          </p>
        </motion.div>

        <motion.div className="social-media" variants={socialVariants}>
          <motion.a
            href="https://github.com/ankitsharma003"
            target="_blank"
            rel="noopener noreferrer"
            variants={socialItemVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="GitHub Profile"
            className="social-link"
          >
            <FaGithub className="social-icon" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ankit-sharma-886b3b318"
            target="_blank"
            rel="noopener noreferrer"
            variants={socialItemVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="LinkedIn Profile"
            className="social-link"
          >
            <FaLinkedin className="social-icon" />
          </motion.a>
          <motion.a
            href="mailto:ankkiit7@gmail.com"
            variants={socialItemVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="Email Me"
            className="social-link"
          >
            <FaEnvelope className="social-icon" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/_ankkit7/"
            target="_blank"
            rel="noopener noreferrer"
            variants={socialItemVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="Instagram Profile"
            className="social-link"
          >
            <FaInstagram className="social-icon" />
          </motion.a>
        </motion.div>

        <motion.div className="cta-buttons" variants={itemVariants}>
          <Link to="/Contact" className="cta-button primary">
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="button-content"
            >
              <span>Get in Touch</span>
              <FaArrowRight className="button-icon" />
            </motion.span>
          </Link>
          <Link to="/Projects" className="cta-button secondary">
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="button-content"
            >
              <span>View Portfolio</span>
              <FaArrowRight className="button-icon" />
            </motion.span>
          </Link>
        </motion.div>

        <motion.div className="tech-stack-section" variants={itemVariants}>
          <h2 className="tech-stack-title">Tech Expertise</h2>
          <motion.div className="tech-grid" variants={techStackVariants}>
            <motion.div
              className="tech-item"
              variants={techItemVariants}
              whileHover="hover"
              title="React.js"
            >
              <SiReact className="tech-icon react-icon" />
              <span className="tech-name">React</span>
            </motion.div>
            <motion.div
              className="tech-item"
              variants={techItemVariants}
              whileHover="hover"
              title="Next.js"
            >
              <SiNextdotjs className="tech-icon next-icon" />
              <span className="tech-name">Next.js</span>
            </motion.div>
            <motion.div
              className="tech-item"
              variants={techItemVariants}
              whileHover="hover"
              title="JavaScript"
            >
              <SiJavascript className="tech-icon js-icon" />
              <span className="tech-name">JavaScript</span>
            </motion.div>
            <motion.div
              className="tech-item"
              variants={techItemVariants}
              whileHover="hover"
              title="TypeScript"
            >
              <SiTypescript className="tech-icon ts-icon" />
              <span className="tech-name">TypeScript</span>
            </motion.div>
            <motion.div
              className="tech-item"
              variants={techItemVariants}
              whileHover="hover"
              title="HTML5"
            >
              <SiHtml5 className="tech-icon html-icon" />
              <span className="tech-name">HTML5</span>
            </motion.div>
            <motion.div
              className="tech-item"
              variants={techItemVariants}
              whileHover="hover"
              title="CSS3"
            >
              <SiCss3 className="tech-icon css-icon" />
              <span className="tech-name">CSS3</span>
            </motion.div>
            <motion.div
              className="tech-item"
              variants={techItemVariants}
              whileHover="hover"
              title="Tailwind CSS"
            >
              <SiTailwindcss className="tech-icon tailwind-icon" />
              <span className="tech-name">Tailwind</span>
            </motion.div>
            <motion.div
              className="tech-item"
              variants={techItemVariants}
              whileHover="hover"
              title="React Native"
            >
              <SiReact className="tech-icon native-icon" />
              <span className="tech-name">React Native</span>
            </motion.div>
            <motion.div
              className="tech-item"
              variants={techItemVariants}
              whileHover="hover"
              title="Bootstrap"
            >
              <SiBootstrap className="tech-icon bootstrap-icon" />
              <span className="tech-name">Bootstrap</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-right-side"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.4,
        }}
      >
        <div className="image-container">
          <div className="image-decoration"></div>
          <motion.img
            src={Ankitsharma_img}
            alt="Developer illustration"
            className="hero-image"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.6,
            }}
            whileHover={{
              y: -10,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
