import React from "react";
import "./Contact.css";
import gitimg from "../../assets/github.png";
import linkdinimg from "../../assets/linkedin.png";
import instaimg from "../../assets/instagram.png";
import mailimg from "../../assets/gmail.png";
const Contact = () => {
  const onSubmit = async (event) => {
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
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-right">
        <h3>Contact Details</h3>
        <div className="social-info">
          <a href="" target="_blank">
            <img src={linkdinimg} width={"25px"} alt="" /> @ankitsharma003
          </a>
        </div>{" "}
        <div className="social-info">
          <a href="https://github.com/ankitsharma003" target="_blank">
            <img src={gitimg} width={"25px"} alt="" /> @ankitsharma003
          </a>
        </div>{" "}
        <div className="social-info">
          <img src={mailimg} width={"25px"} alt="" /> jdka03@gmail.com
        </div>
        <div className="social-info">
          <a href="#" target="_blank">
            <img src={instaimg} width={"25px"} alt="" /> ankitsharma003
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
