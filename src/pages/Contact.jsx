import React from "react";
import { motion } from "framer-motion";
import "../style/contact.css";

const Contact = () => {
  return (
    <motion.div className="content contact"       initial={{ opacity: 0 }}
    whileInView={{ opacity: 10 }}
    viewport={{ once: true }}>
      <div className="contact__card">
        <div className="contact__info">
          <h1 className="contact__h1">Contact me</h1>
          <p>
            I hope you found what you were looking for on me. If you have other
            request or question, don't hesitate to send me any message.
          </p>
        </div>

        <form action="" className="contact__form">
          <input
            className="contact__input"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="contact__input"
            type="email"
            name="mail"
            placeholder="Email"
          />
          <input
            className="contact__input"
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <textarea
            className="contact__text"
            name="Message"
            id="Message"
            placeholder="Message"
          />
          <input type="submit" className="contact__submit"/>
        </form>

      </div>
    </motion.div>
  );
};

export default Contact;
