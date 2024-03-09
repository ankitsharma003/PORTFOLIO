import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="heading">
          <h1>About Me</h1>
        </div>
        <div className="content">
          <p>
            Hello there! 👋 I'm Ankit Sharma, a passionate Web Developer. I
            thrive on transforming ideas into reality and enjoy the creative
            process that comes with it. My journey in Web Developer has equipped
            me with a solid foundation in Front-End, and I'm always eager to
            explore and learn new technologies.
          </p>
        </div>

      </div>
      <div className="about-container">
        <div className="heading">
          <h1>Why Work With Me?</h1>
        </div>
        <div className="content">
          <p>
            I have worked on a multitude of web Development ( HTML, CSS,
            JS,React js, MongoDb ,Bootstrap, Responsive Layouts)
          </p>
        </div>

      </div>
      <div className="about-container">
        <div className="heading">
          <h1>Let's Connect!</h1>
        </div>
        <div className="content">
          <p>
            I'm currently seeking new opportunities to collaborate on exciting
            projects. If you're looking for a web Developer & Front-End
            Developer who is not only skilled but also passionate about creating
            meaningful experiences, I would love to connect. Feel free to
            explore my portfolio, and let's discuss how we can bring your ideas
            to life!
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default About;
