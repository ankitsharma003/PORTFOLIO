import React, { useState, useEffect } from "react";
import "./Sidenavbar.css";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaCode,
  FaUser,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidenavbar = () => {
  const [activeNav, setActiveNav] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Add body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Set initial active based on pathname
    const pathname = location.pathname;
    if (pathname === "/") setActiveNav("Home");
    else if (pathname === "/Projects") setActiveNav("Projects");
    else if (pathname === "/About") setActiveNav("About");
    else if (pathname === "/Contact") setActiveNav("Contact");

    // Close mobile menu when route changes
    setMobileMenuOpen(false);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, location]);

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMobileMenuOpen(false);
  };

  const navVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const getIcon = (navItem) => {
    switch (navItem) {
      case "Home":
        return <FaHome className="nav-icon" />;
      case "Projects":
        return <FaCode className="nav-icon" />;
      case "About":
        return <FaUser className="nav-icon" />;
      case "Contact":
        return <FaEnvelope className="nav-icon" />;
      default:
        return null;
    }
  };

  return (
    <>
      <motion.div
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <motion.div className="nav-profile" variants={logoVariants}>
          <motion.p
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Ankit Sharma
          </motion.p>
        </motion.div>

        <div className="nav-item desktop-nav">
          <ul>
            <motion.li
              variants={itemVariants}
              className={activeNav === "Home" ? "active" : ""}
              onClick={() => handleNavClick("Home")}
              whileHover={{ scale: 1.1 }}
            >
              <Link to="/" className="nav-link">
                {getIcon("Home")}
                <span>Home</span>
              </Link>
            </motion.li>

            <motion.li
              variants={itemVariants}
              className={activeNav === "Projects" ? "active" : ""}
              onClick={() => handleNavClick("Projects")}
              whileHover={{ scale: 1.1 }}
            >
              <Link to="/Projects" className="nav-link">
                {getIcon("Projects")}
                <span>Projects</span>
              </Link>
            </motion.li>

            <motion.li
              variants={itemVariants}
              className={activeNav === "About" ? "active" : ""}
              onClick={() => handleNavClick("About")}
              whileHover={{ scale: 1.1 }}
            >
              <Link to="/About" className="nav-link">
                {getIcon("About")}
                <span>About</span>
              </Link>
            </motion.li>

            <motion.li
              variants={itemVariants}
              className={activeNav === "Contact" ? "active" : ""}
              onClick={() => handleNavClick("Contact")}
              whileHover={{ scale: 1.1 }}
            >
              <Link to="/Contact" className="nav-link">
                {getIcon("Contact")}
                <span>Contact</span>
              </Link>
            </motion.li>
          </ul>
        </div>

        <motion.button
          className="mobile-menu-toggle"
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              <ul>
                <motion.li
                  variants={mobileItemVariants}
                  className={activeNav === "Home" ? "active" : ""}
                  onClick={() => handleNavClick("Home")}
                >
                  <Link to="/" className="nav-link">
                    {getIcon("Home")}
                    <span>Home</span>
                  </Link>
                </motion.li>

                <motion.li
                  variants={mobileItemVariants}
                  className={activeNav === "Projects" ? "active" : ""}
                  onClick={() => handleNavClick("Projects")}
                >
                  <Link to="/Projects" className="nav-link">
                    {getIcon("Projects")}
                    <span>Projects</span>
                  </Link>
                </motion.li>

                <motion.li
                  variants={mobileItemVariants}
                  className={activeNav === "About" ? "active" : ""}
                  onClick={() => handleNavClick("About")}
                >
                  <Link to="/About" className="nav-link">
                    {getIcon("About")}
                    <span>About</span>
                  </Link>
                </motion.li>

                <motion.li
                  variants={mobileItemVariants}
                  className={activeNav === "Contact" ? "active" : ""}
                  onClick={() => handleNavClick("Contact")}
                >
                  <Link to="/Contact" className="nav-link">
                    {getIcon("Contact")}
                    <span>Contact</span>
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidenavbar;
