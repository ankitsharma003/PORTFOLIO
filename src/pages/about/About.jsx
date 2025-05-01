import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaTools,
  FaGraduationCap,
  FaQuoteLeft,
  FaMedal,
} from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiJest,
} from "react-icons/si";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 15px rgba(37, 99, 235, 0.2)",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 10,
      },
    },
  };

  return (
    <div className="about">
      <motion.div
        className="about-header"
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants}
      >
        <h1>About Me</h1>
        <div className="section-divider"></div>
        <p className="about-subtitle">
          Passionate front-end developer creating beautiful, functional, and
          user-centered digital experiences
        </p>
      </motion.div>

      <motion.div
        className="about-sections"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="about-container"
          variants={itemVariants}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
        >
          <div className="about-header-with-icon">
            <div className="about-icon">
              <FaCode />
            </div>
            <div className="heading">
              <h2>Who I Am</h2>
            </div>
          </div>
          <div className="content">
            <p>
              I'm Ankit Sharma, a passionate front-end developer with a strong
              focus on creating responsive, user-friendly web applications. With
              a keen eye for design and a love for clean, efficient code, I
              strive to build digital experiences that are both beautiful and
              functional.
            </p>
            <motion.div
              className="quote-box"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <FaQuoteLeft className="quote-icon" />
              <p>
                I believe that the best digital products combine technical
                excellence with intuitive design.
              </p>
            </motion.div>
            <p>
              My journey in web development started with HTML, CSS, and
              JavaScript, and has evolved to embrace modern frameworks and
              libraries like React and Next.js. I'm constantly learning and
              adapting to new technologies to stay at the forefront of web
              development trends.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="about-container"
          variants={itemVariants}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
        >
          <div className="about-header-with-icon">
            <div className="about-icon">
              <FaLaptopCode />
            </div>
            <div className="heading">
              <h2>Technical Skills</h2>
            </div>
          </div>
          <div className="content">
            <p>
              I specialize in front-end development with a focus on React
              ecosystem. My expertise includes building responsive layouts,
              implementing complex UI components, and ensuring cross-browser
              compatibility.
            </p>
            <div className="skills-list-container">
              <div className="skills-category">
                <h3>Frontend</h3>
                <motion.ul
                  className="skills-badges"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.li variants={skillBadgeVariants} whileHover="hover">
                    <SiReact className="skill-icon" />
                    <span>React</span>
                  </motion.li>
                  <motion.li variants={skillBadgeVariants} whileHover="hover">
                    <SiNextdotjs className="skill-icon" />
                    <span>Next.js</span>
                  </motion.li>
                  <motion.li variants={skillBadgeVariants} whileHover="hover">
                    <SiJavascript className="skill-icon" />
                    <span>JavaScript</span>
                  </motion.li>
                  <motion.li variants={skillBadgeVariants} whileHover="hover">
                    <SiTypescript className="skill-icon" />
                    <span>TypeScript</span>
                  </motion.li>
                  <motion.li variants={skillBadgeVariants} whileHover="hover">
                    <SiHtml5 className="skill-icon" />
                    <span>HTML5</span>
                  </motion.li>
                  <motion.li variants={skillBadgeVariants} whileHover="hover">
                    <SiCss3 className="skill-icon" />
                    <span>CSS3/SCSS</span>
                  </motion.li>
                  <motion.li variants={skillBadgeVariants} whileHover="hover">
                    <SiReactrouter className="skill-icon" />
                    <span>React Router</span>
                  </motion.li>
                  <motion.li variants={skillBadgeVariants} whileHover="hover">
                    <SiRedux className="skill-icon" />
                    <span>Redux</span>
                  </motion.li>
                  <motion.li variants={skillBadgeVariants} whileHover="hover">
                    <SiTailwindcss className="skill-icon" />
                    <span>Tailwind CSS</span>
                  </motion.li>
                  <motion.li variants={skillBadgeVariants} whileHover="hover">
                    <SiBootstrap className="skill-icon" />
                    <span>Bootstrap</span>
                  </motion.li>
                </motion.ul>
              </div>
              <div className="skills-category">
                <h3>Backend & Tools</h3>
                <motion.ul
                  className="skills-badges"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delayChildren: 0.3 }}
                >
                  <motion.li variants={skillBadgeVariants} whileHover="hover">
                    <SiNodedotjs className="skill-icon" />
                    <span>Node.js</span>
                  </motion.li>
                  <motion.li variants={skillBadgeVariants} whileHover="hover">
                    <SiExpress className="skill-icon" />
                    <span>Express</span>
                  </motion.li>
                  <motion.li variants={skillBadgeVariants} whileHover="hover">
                    <SiMongodb className="skill-icon" />
                    <span>MongoDB</span>
                  </motion.li>
                  <motion.li variants={skillBadgeVariants} whileHover="hover">
                    <SiGit className="skill-icon" />
                    <span>Git/GitHub</span>
                  </motion.li>
                  <motion.li variants={skillBadgeVariants} whileHover="hover">
                    <SiFigma className="skill-icon" />
                    <span>Figma</span>
                  </motion.li>
                  <motion.li variants={skillBadgeVariants} whileHover="hover">
                    <SiJest className="skill-icon" />
                    <span>Jest</span>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-container"
          variants={itemVariants}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
        >
          <div className="about-header-with-icon">
            <div className="about-icon">
              <FaGraduationCap />
            </div>
            <div className="heading">
              <h2>Education & Learning</h2>
            </div>
          </div>
          <div className="content">
            <p>
              I hold a Bachelor's degree in Computer Science, which provided me
              with a strong foundation in programming concepts, algorithms, and
              software development principles.
            </p>
            <p>
              Beyond formal education, I'm committed to continuous learning
              through online courses, documentation, and building projects. I
              actively participate in web development communities and stay
              updated with the latest industry trends and best practices.
            </p>
            <div className="achievements-grid">
              <div className="achievement-item">
                <FaMedal className="achievement-icon" />
                <div className="achievement-details">
                  <h4>500+ Hours of Coding</h4>
                  <p>Dedicated to mastering front-end development</p>
                </div>
              </div>
              <div className="achievement-item">
                <FaMedal className="achievement-icon" />
                <div className="achievement-details">
                  <h4>10+ Completed Projects</h4>
                  <p>From concept to deployment</p>
                </div>
              </div>
            </div>
            <div className="education-item">
              <h4>Recent Learning Focus:</h4>
              <ul>
                <li>Advanced React patterns and performance optimization</li>
                <li>TypeScript integration with React</li>
                <li>
                  Next.js for server-side rendering and static site generation
                </li>
                <li>Modern CSS techniques (Grid, Flexbox, CSS variables)</li>
                <li>Web accessibility standards (WCAG)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-container"
          variants={itemVariants}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
        >
          <div className="about-header-with-icon">
            <div className="about-icon">
              <FaTools />
            </div>
            <div className="heading">
              <h2>My Approach</h2>
            </div>
          </div>
          <div className="content">
            <p>
              I believe in writing clean, maintainable code that follows best
              practices and industry standards. My development approach
              emphasizes:
            </p>
            <ul className="approach-list">
              <li>
                <strong>User-Centered Design:</strong> Focusing on creating
                intuitive, accessible interfaces that prioritize user
                experience.
              </li>
              <li>
                <strong>Responsive Development:</strong> Ensuring applications
                look and function perfectly across all devices and screen sizes.
              </li>
              <li>
                <strong>Performance Optimization:</strong> Implementing
                techniques to maximize speed and efficiency.
              </li>
              <li>
                <strong>Clean Code:</strong> Writing readable, well-documented
                code that's easy to maintain and extend.
              </li>
              <li>
                <strong>Continuous Learning:</strong> Staying updated with new
                technologies and approaches to deliver the best solutions.
              </li>
            </ul>
            <div className="cta-container">
              <motion.a
                href="/Contact"
                className="about-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
