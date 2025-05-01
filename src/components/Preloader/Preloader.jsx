import React, { useState, useEffect } from "react";
import "./Preloader.css";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        // Slower progress at start, faster at end (cubic-bezier like effect)
        if (prevProgress < 60) return prevProgress + 1;
        if (prevProgress < 80) return prevProgress + 2;
        if (prevProgress < 98) return prevProgress + 0.5;
        return 100;
      });
    }, 30);

    // Track actual loading state
    const handleLoad = () => {
      // Ensure progress reaches 100% for visual completion
      setProgress(100);

      // Small delay before hiding the preloader for a smooth transition
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // Create random particles
  const renderParticles = () => {
    const particles = [];
    for (let i = 0; i < 15; i++) {
      const size = Math.random() * 10 + 5;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 30 + 15;
      const delay = Math.random() * 5;

      particles.push(
        <motion.div
          key={i}
          className="particle"
          style={{
            width: size,
            height: size,
            left: `${x}%`,
            top: `${y}%`,
          }}
          animate={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
            delay,
          }}
        />
      );
    }
    return particles;
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="preloader"
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
        >
          {renderParticles()}

          <div className="preloader-content">
            <motion.div
              className="logo-container"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <motion.h1
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
              >
                AS
              </motion.h1>
            </motion.div>

            <div className="loading-bar-container">
              <div className="loading-progress">
                <motion.div
                  className="progress-text"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {progress < 100 ? "Loading..." : "Ready!"}
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {progress}%
                </motion.p>
              </div>
              <div className="loading-bar-wrapper">
                <motion.div
                  className="loading-bar"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
