import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';
import IMG1 from '../../assets/screenshot-ahmo.png';
import IMG2 from '../../assets/Screenshot (398).png';
import IMG3 from '../../assets/Screenshot (399).png';
import IMG4 from '../../assets/Screenshot (401).png';
import IMG5 from '../../assets/Screenshot (402).png';
import IMG6 from '../../assets/Screenshot (403).png';
import "./portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      img: IMG1,
      title: 'AHMO',
      github: 'https://github.com/HYF-Class19/ahmo-frontend-class19',
    },
    {
      id: 2,
      img: IMG4,
      title: 'Z',
      github: 'https://github.com/HaykoDevelop/Z-Front',
    },
    {
      id: 3,
      img: IMG3,
      title: 'Typ Top',
      github: 'https://github.com/HaykoDevelop/Typ-Top',
    },
    {
      id: 4,
      img: IMG2,
      title: 'Fitness Application',
      github: 'https://github.com/HaykoDevelop/FitnesDB',
    },
    {
      id: 5,
      img: IMG5,
      title: 'Immo Application',
      github: 'https://github.com/HaykoDevelop/Immo-Application',
    },
    {
      id: 6,
      img: IMG6,
      title: 'To Do',
      github: 'https://github.com/HaykoDevelop/To-Do-Simpel',
    },
  ];

  return (
    <section id="portfolio" className='section'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <div className="portfolio__grid">
          {projects.map((project, index) => (
            <PortfolioItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};


const PortfolioItem = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ScrollAnimationWrapper
      animationType="fade"
      delay={index * 0.1}
      threshold={0.1}
    >
      <motion.div
        className="portfolio__item"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{
          scale: 1,
          transition: { duration: 0.3 },
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <a href={project.github} target="_blank" rel="noreferrer">
          <div className="portfolio__item-image">
            <img src={project.img} alt={project.title} />
          </div>
          <div className="portfolio__item-text-container">
            <div className="portfolio__item-text-wrapper">
              <motion.div
                className="portfolio__item-text-content"
                animate={{ rotateX: isHovered ? -90 : 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              >
                <div className="portfolio__item-title">{project.title}</div>
              </motion.div>
              <motion.div
                className="portfolio__item-text-content portfolio__item-hover-content"
                animate={{ rotateX: isHovered ? 0 : 90 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              >
                <div className="portfolio__item-hover-text">
                  Visit Project →
                </div>
              </motion.div>
            </div>
          </div>
        </a>
      </motion.div>
    </ScrollAnimationWrapper>
  );
};


export default Portfolio;