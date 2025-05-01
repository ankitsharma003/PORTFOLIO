import React, { useState, useEffect } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaExclamationTriangle,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error message when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError(false);

    const formData = new FormData(event.target);
    formData.append("access_key", "42ad6945-7958-40c3-a894-5750bc519bef");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      setLoading(false);

      if (res.success) {
        console.log("Success", res);
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        setError(true);
        console.error("Form submission error:", res);
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      setError(true);
    }
  };

  const resetForm = () => {
    setSuccess(false);
    setError(false);
  };

  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Get In Touch</h1>
        <div className="section-divider"></div>
        <p className="contact-subtitle">
          Feel free to reach out for collaborations or just to say hello!
        </p>
      </motion.div>

      <div className="contact-container">
        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {success ? (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="success-icon">✓</div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I'll get back to you soon.</p>
              <motion.button
                className="reset-button"
                onClick={resetForm}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Send Another Message</span>
              </motion.button>
            </motion.div>
          ) : error ? (
            <motion.div
              className="error-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="error-icon">
                <FaExclamationTriangle />
              </div>
              <h3>Message Failed to Send</h3>
              <p>
                Sorry, there was a problem sending your message. Please try
                again.
              </p>
              <motion.button
                className="reset-button"
                onClick={resetForm}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Try Again</span>
              </motion.button>
            </motion.div>
          ) : (
            <>
              <h2>Send Message</h2>
              <form method="POST" onSubmit={onSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    whileFocus={{ scale: 1.01 }}
                    className={formErrors.name ? "input-error" : ""}
                  />
                  {formErrors.name && (
                    <span className="error-text">{formErrors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    whileFocus={{ scale: 1.01 }}
                    className={formErrors.email ? "input-error" : ""}
                  />
                  {formErrors.email && (
                    <span className="error-text">{formErrors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <motion.textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    whileFocus={{ scale: 1.01 }}
                    rows="5"
                    className={formErrors.message ? "input-error" : ""}
                  ></motion.textarea>
                  {formErrors.message && (
                    <span className="error-text">{formErrors.message}</span>
                  )}
                </div>

                <motion.button
                  type="submit"
                  className="submit-button"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {loading ? (
                    <div className="loader"></div>
                  ) : (
                    <span>Send Message</span>
                  )}
                </motion.button>
              </form>
            </>
          )}
        </motion.div>

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Contact Details</h3>

          <div className="contact-details-container">
            <div className="social-card">
              <motion.a
                href="https://www.linkedin.com/in/ankit-sharma-886b3b318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="social-icon-container">
                  <FaLinkedin className="social-icon" />
                </div>
                <div className="social-info-content">
                  <span className="social-label">LinkedIn</span>
                  <p className="social-value">Ankit Sharma</p>
                </div>
              </motion.a>
            </div>

            <div className="social-card">
              <motion.a
                href="https://github.com/ankitsharma003"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="social-icon-container">
                  <FaGithub className="social-icon" />
                </div>
                <div className="social-info-content">
                  <span className="social-label">GitHub</span>
                  <p className="social-value">@ankitsharma003</p>
                </div>
              </motion.a>
            </div>

            <div className="social-card">
              <motion.a
                href="mailto:ankkiit7@gmail.com"
                className="social-link"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="social-icon-container">
                  <FaEnvelope className="social-icon" />
                </div>
                <div className="social-info-content">
                  <span className="social-label">Email</span>
                  <p className="social-value">ankkiit7@gmail.com</p>
                </div>
              </motion.a>
            </div>

            <div className="social-card">
              <motion.a
                href="https://www.instagram.com/_ankkit7/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="social-icon-container">
                  <FaInstagram className="social-icon" />
                </div>
                <div className="social-info-content">
                  <span className="social-label">Instagram</span>
                  <p className="social-value">@_ankkit7</p>
                </div>
              </motion.a>
            </div>
          </div>

          <motion.div
            className="contact-decoration"
            animate={{
              rotate: [0, 5, 0, -5, 0],
              y: [0, -5, 0, 5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
            }}
          ></motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
