import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { IoCall } from "react-icons/io5";
import './contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>haykodevelop@gmail.com</h5>
            <a href="mailto:haykodevelop@gmail.com">Send a message</a>
          </article>
        </div>
        <div className="contact__options">
          <article className="contact__option">
            <IoCall  className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>+32 490 43 30 60</h5>
            <a href="tel:+32 490 43 30 60">Send a message</a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
