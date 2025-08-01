import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { IoCall } from "react-icons/io5";
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";
import './contact.css';

const Contact = () => {
  return (
    <section id="contact" className='contact_section section'>
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
          <article className="contact__option">
            <IoCall className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>+32 490 43 30 60</h5>
            <a href="tel:+32 490 43 30 60">Send a message</a>
          </article>
          <article className="contact__option">
            <div className="socials">
              <a href="https://www.linkedin.com/in/hayk-amalikyan-235683209/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
              <a href="https://github.com/HaykoDevelop" target="_blank" rel="noreferrer" ><FaGithub /></a>
              <a href="https://www.instagram.com/hyk__04/" target="_blank" rel="noreferrer" ><RiInstagramFill /></a>
            </div>
          </article>
        </div>
        <div className="contact__car-space"></div>
      </div>
    </section>

  );
};

export default Contact;
