import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPlus,
  FaHome,
  FaProjectDiagram,
  FaUser,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./FloatingActionButton.css";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Only show on mobile/tablet
  useEffect(() => {
    const checkScreenSize = () => {
      setIsVisible(window.innerWidth <= 768);
    };

    // Check initial size
    checkScreenSize();

    // Listen for resize events
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const buttonVariants = {
    open: {
      rotate: 45,
      scale: 1,
      backgroundColor: "#ef4444",
    },
    closed: {
      rotate: 0,
      scale: 1,
      backgroundColor: "#3b82f6",
    },
  };

  const menuVariants = {
    open: {
      clipPath: "circle(150% at 90% 90%)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 22,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
    closed: {
      clipPath: "circle(0% at 90% 90%)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  // Don't render if not visible (on desktop)
  if (!isVisible) return null;

  return (
    <div className="floating-action-button-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fab-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="fab-menu"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <motion.div className="fab-menu-items" variants={itemVariants}>
          <Link to="/" className="fab-item" onClick={toggleMenu}>
            <FaHome />
            <span>Home</span>
          </Link>
          <Link to="/Projects" className="fab-item" onClick={toggleMenu}>
            <FaProjectDiagram />
            <span>Projects</span>
          </Link>
          <Link to="/About" className="fab-item" onClick={toggleMenu}>
            <FaUser />
            <span>About</span>
          </Link>
          <Link to="/Contact" className="fab-item" onClick={toggleMenu}>
            <FaEnvelope />
            <span>Contact</span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.button
        className="fab-button"
        onClick={toggleMenu}
        variants={buttonVariants}
        animate={isOpen ? "open" : "closed"}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes /> : <FaPlus />}
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;
