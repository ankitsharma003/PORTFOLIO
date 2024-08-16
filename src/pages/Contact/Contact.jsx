import React, { useState } from "react";
import "./Contact.css";
import gitimg from "../../assets/github.png";
import linkdinimg from "../../assets/linkedin.png";
import instaimg from "../../assets/instagram.png";
import mailimg from "../../assets/gmail.png";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "42ad6945-7958-40c3-a894-5750bc519bef");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

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
      alert(
        " Thank you for reaching out! Your message has been successfully submitted. I appreciate your interest and will get back to you as soon as possible. In the meantime, feel free to explore more of my work on the portfolio."
      );
    }
  };
  return (
    <div className="contact">
      <div className="contact-form-container">
        <h1>Get In Touch</h1>
        <hr />
        {loading ? (
          <div className="loding-animation">Sending...</div>
        ) : (
          <form
            action=""
            method="POST"
            onSubmit={onSubmit}
            className="contact-form"
          >
            <input
              type="text"
              className="contact-input"
              name="name"
              required
              placeholder="YOUR name"
            />
            <input
              type="email"
              className="contact-input"
              name="email"
              required
              placeholder="YOUR Email"
            />
            <textarea
              name="message"
              className="contact-input"
              required
              placeholder="YOUR Message"
            />
            <button type="submit">Send</button>
          </form>
        )}
      </div>
      <div className="contact-right">
        <h3>Contact Details</h3>
        <div className="social-info">
          <a
            href="https://www.linkedin.com/in/ankit-sharma-886b3b318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            target="_blank"
          >
            <img src={linkdinimg} width={"25px"} alt="" /> <p>Ankit Sharma</p>
          </a>
        </div>{" "}
        <div className="social-info">
          <a href="https://github.com/ankitsharma003" target="_blank">
            <img src={gitimg} width={"25px"} alt="" /> <p>@ankitsharma003</p>
          </a>
        </div>{" "}
        <div className="social-info">
          <a href="mailto:ankkiit7@gmail.com">
            <img src={mailimg} width={"25px"} alt="" />{" "}
            <p> ankkiit7@gmail.com</p>
          </a>
        </div>
        <div className="social-info">
          <a href="https://www.instagram.com/_ankkit7/" target="_blank">
            <img src={instaimg} width={"25px"} alt="" /> 
            <p> @_ankkit7</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
