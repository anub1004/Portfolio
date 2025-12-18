import React, { useState } from "react";
import { RiMap2Line } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";
import { RiBook2Line } from "react-icons/ri";
import { RiSendPlaneFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import "./contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [Message, Messagecolor] = useState("");
  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [feedback, setfeedback] = useState("");
  const sendmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_6rz4zjk",
        "template_zd6ycvq",
        formData,
        "P4T0vMXNk8tm9HkB6"
      )
      .then(
        () => {
          setfeedback("Message Sent ");
          setTimeout(() => {
            setfeedback("");
          }, 3000);
          setFormData({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
        }
        ,
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <section className="contact section">
        <h2 className="section-title">
          Contact <span>Me</span>
        </h2>
        <div className="contact-container container grid">
          <div className="contact-content grid">
            <div className="contact-card">
              <span className="contact-icon">
                <RiMap2Line></RiMap2Line>
              </span>
              <div>
                <h3 className="contact-title">Address</h3>
                <p className="contact-data">Dewas (M.P)</p>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-icon">
                <RiUser3Line></RiUser3Line>
              </span>
              <div>
                <h3 className="contact-title"> FreeLance</h3>
                <p className="contact-data"> Available Right Now</p>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-icon">
                <RiMailLine></RiMailLine>
              </span>
              <div>
                <h3 className="contact-title"> Email</h3>
                <p className="contact-data"> anubhavsingh6260@gmail.com</p>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-icon">
                <RiBook2Line></RiBook2Line>
              </span>
              <div>
                <h3 className="contact-title"> Phone</h3>
                <p className="contact-data"> +91</p>
              </div>
            </div>
          </div>
          <form action="" className="contact-form grid" onSubmit={sendmail}>
            <div className="contact-form-group grid">
              <div className="contact-form-div">
                <label htmlFor="" className="contact-form-label">
                  Your Full Name <b>*</b>
                </label>

                <input
                  type="text"
                  name="name"
                  onChange={handlechange}
                  value={formData.name}
                  className="contact-form-input"
                  autoComplete="off"
                />
              </div>

              <div className="contact-form-div">
                <label htmlFor="" className="contact-form-label">
                  Your Email Address <b>*</b>
                </label>
                <input
                  type="email"
                  name="email"
                  className="contact-form-input"
                  onChange={handlechange}
                  value={formData.email}
                  autoComplete="off"
                />
              </div>
              <div className="contact-form-div">
                <label htmlFor="" className="contact-form-label">
                  Your Subject <b>*</b>
                </label>
                <input
                  type="text"
                  name="subject"
                  className="contact-form-input"
                  onChange={handlechange}
                  value={formData.subject}
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="contact-form-div">
              <label htmlFor="" className="contact-form-label">
                Your Message <b>*</b>
              </label>
              <textarea
                name="message"
                id=""
                className="contact-form-input contact-form-area"
                onChange={handlechange}
                value={formData.message}
              ></textarea>
            </div>
            <div className="contact-button">
              <button className="button">
                <span className="word">
                  Send Message
                </span>
                <span className="button-icon">
                  <RiSendPlaneFill></RiSendPlaneFill>
                </span>
              </button>
            </div>
            {feedback && (
              <p className={`contact-message ${Messagecolor}`}>{feedback}</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
};
export default Contact;
