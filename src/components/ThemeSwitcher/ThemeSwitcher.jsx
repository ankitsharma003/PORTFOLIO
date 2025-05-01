import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import "./ThemeSwitcher.css";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark-mode");
    } else if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark-mode");
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      // Use system preference if no saved theme
      setIsDarkMode(true);
      document.documentElement.classList.add("dark-mode");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <motion.div
      className="theme-switcher"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
    >
      <motion.button
        className="theme-toggle-button"
        onClick={toggleTheme}
        whileTap={{ scale: 0.9 }}
        aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
      >
        <motion.div
          className="toggle-icons"
          initial={false}
          animate={{ rotate: isDarkMode ? 180 : 0 }}
          transition={{ duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
        >
          {isDarkMode ? (
            <FaMoon className="moon-icon" />
          ) : (
            <FaSun className="sun-icon" />
          )}
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default ThemeSwitcher;
