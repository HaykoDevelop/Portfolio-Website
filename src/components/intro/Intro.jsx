import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/profile.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="intro" className='section'>
      <h5>Get to know me</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Certificates</h5>
              <small>5+</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
            <p>
              Hey! I’m Hayk Amalikyan, a student in Applied Information Technology with a focus on web development, 
              mobile app development, application development, and AI. I love building functional and user-friendly applications, 
              whether it's websites, mobile apps, or AI-powered solutions.

              I’m always exploring new technologies and improving my skills to create innovative and efficient digital experiences. 
              Let’s connect and build something awesome!
            </p>
          <a href="#contact" className="futuristic-btn outline">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro