import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { GitIcon, LinkedinIcon, MailIcon } from "./Assets";
import "./Footer.scss";
export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emailSent, setEmailSent] = useState(false);
  const [buttonText, setButtonText] = useState("Send Message");
  const onChangeHandler = (e) => {
    let change = {};
    change[e.target.id] = e.target.value;
    setFormData((prev) => {
      return { ...prev, ...change };
    });
  };

  const sendMessage = async () => {
    setButtonText("Sending Message");
    await emailjs.send(
      "service_wtocklk",
      "template_wh8yqrj",
      formData,
      "EQEaVrvORCyb7bQrc"
    );
    setFormData({ name: "", email: "", message: "" });
    setEmailSent(true);
    setTimeout(() => {
      setButtonText("Send Message");
      setEmailSent(false);
    }, 2000);
  };
  return (
    <section id="contact" className="feedback">
      <h2 className="feedback-heading">Connect With Me</h2>
      <div className="cards">
        <div>
          <a className="card-item" href="mailto:aayushnair204@gmail.com">
            <MailIcon fill="#aa9aba" />

            <span>{`Gmail`}</span>
          </a>
        </div>
        <div>
          <a href="https://github.com/AayushNair10" className="card-item">
            <GitIcon fill="#aa9aba" />
            <span>GitHub</span>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/aayush-nair10/" className="card-item">
            <LinkedinIcon fill="#aa9aba" />
            <span>Linkedin</span>
          </a>
        </div>
      </div>
      <div className="form-container">
        <input
          value={formData.name}
          id="name"
          onChange={onChangeHandler}
          className="name-input"
          placeholder="Your Name"
        />
        <input
          value={formData.email}
          id="email"
          onChange={onChangeHandler}
          className="email-input"
          placeholder="Your Email"
        />
        <textarea
          value={formData.message}
          id="message"
          onChange={onChangeHandler}
          className="message-input"
          placeholder="Your Message"
        />
        {!emailSent && (
          <button
            disabled={!(formData.name && formData.email && formData.message)}
            onClick={sendMessage}
          >
            {buttonText}
          </button>
        )}
        {emailSent && (
          <span className="message">Thanks for reaching out!</span>
        )}
      </div>
    </section>
  );
}