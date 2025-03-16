import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">Hayk Amalikyan</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/hayk-amalikyan-235683209/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com/HaykoDevelop" target="_blank" rel="noreferrer" ><FaGithub /></a>
        <a href="https://www.instagram.com/hyk__04/" target="_blank" rel="noreferrer" ><RiInstagramFill /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;{getYear()}. Hayk Amalikyan</small>
      </div>
    </footer>
  )
}

export default Footer
