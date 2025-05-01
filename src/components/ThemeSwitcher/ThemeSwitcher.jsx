import React from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import "./ThemeSwitcher.css";
import useDarkMode from "../../hooks/useDarkMode";

const ThemeSwitcher = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <motion.div
      className="theme-switcher"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
    >
      <motion.button
        className="theme-toggle-button"
        onClick={toggleDarkMode}
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
