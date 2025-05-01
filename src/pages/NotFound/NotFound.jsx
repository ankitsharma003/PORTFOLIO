import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <motion.div
      className="not-found"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="not-found-content">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Due to privacy concerns, we cannot share the code for this project.
        </motion.p>

        <motion.div
          className="not-found-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link to="/" className="home-button">
            Go Home
          </Link>
          <button className="back-button" onClick={() => window.history.back()}>
            Go Back
          </button>
        </motion.div>
      </div>

      <div className="not-found-decoration">
        <motion.div
          className="circle circle-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="circle circle-2"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="circle circle-3"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

export default NotFound;
