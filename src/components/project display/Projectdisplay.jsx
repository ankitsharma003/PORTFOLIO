import React, { useState } from "react";
import "./Projectdisplay.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
  FaSpinner,
  FaImage,
} from "react-icons/fa";

const Projectdisplay = (props) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const images = [props.image, props.img1, props.img2].filter(Boolean);

  const nextImage = () => {
    setImageLoading(true);
    setImageError(false);
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setImageLoading(true);
    setImageError(false);
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <motion.div
      className="projectdisplay"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="project-content">
        <div className="projectdisplay-header">
          <div className="project-title">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {props.name}
            </motion.h3>
            {props.link && props.link !== "a" && (
              <motion.a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="project-link"
                aria-label={`Visit ${props.name} website`}
              >
                <FaExternalLinkAlt />
              </motion.a>
            )}
          </div>

          <motion.div
            className="projectDescription"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p>
              {isReadMore ? props.description.slice(0, 100) : props.description}
              {props.description.length > 100 && (
                <span onClick={toggleReadMore} className="read-more-link">
                  {isReadMore ? "...Read More" : "...Read Less"}
                </span>
              )}
            </p>
          </motion.div>

          <motion.div
            className="projectdisplay-btn"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {props.gitlink && props.gitlink !== "a" && (
              <motion.a
                href={props.gitlink}
                rel="noopener noreferrer"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="project-button code-button"
              >
                <FaGithub /> View Code
              </motion.a>
            )}
            {props.link && props.link !== "a" && (
              <motion.a
                href={props.link}
                rel="noopener noreferrer"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="project-button live-button"
              >
                <FaExternalLinkAlt /> Live Demo
              </motion.a>
            )}
          </motion.div>
        </div>

        <motion.div
          className="project-images-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="main-image">
            {imageLoading && (
              <div className="image-loading">
                <FaSpinner className="spinner" />
                <span className="sr-only">Loading image...</span>
              </div>
            )}
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={images[activeImage]}
                alt={`${props.name} view`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onLoad={handleImageLoad}
                onError={handleImageError}
                style={{ visibility: imageLoading ? "hidden" : "visible" }}
              />
            </AnimatePresence>

            {imageError && (
              <div className="image-error">
                <FaImage className="error-icon" />
                <p>Image could not be loaded</p>
              </div>
            )}

            {images.length > 1 && (
              <div className="image-navigation">
                <motion.button
                  className="nav-button prev"
                  onClick={prevImage}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Previous image"
                >
                  <FaChevronLeft />
                </motion.button>
                <motion.button
                  className="nav-button next"
                  onClick={nextImage}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Next image"
                >
                  <FaChevronRight />
                </motion.button>
              </div>
            )}
          </div>

          {images.length > 1 && (
            <div className="thumbnail-container">
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  className={`thumbnail ${
                    activeImage === index ? "active" : ""
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setImageLoading(true);
                    setImageError(false);
                    setActiveImage(index);
                  }}
                >
                  <img
                    src={img}
                    alt={`${props.name} thumbnail ${index + 1}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yNCAyNGgtMjR2LTI0aDI0djI0em0tMTEtMmMxLjEwNSAwIDItLjg5NSAyLTJzLS44OTUtMi0yLTItMiAuODk1LTIgMiAuODk1IDIgMiAyem0xLTEwdjZoLTJ2LTZoMnptLTEtMS43NWMuNjg5IDAgMS4yNS0uNTYxIDEuMjUtMS4yNXMtLjU2MS0xLjI1LTEuMjUtMS4yNS0xLjI1LjU2MS0xLjI1IDEuMjUuNTYxIDEuMjUgMS4yNSAxLjI1eiIvPjwvc3ZnPg==";
                    }}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
      <div className="project-divider"></div>
    </motion.div>
  );
};

export default Projectdisplay;
