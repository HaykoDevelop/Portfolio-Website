import React from 'react';
import IMG1 from '../../assets/screenshot-ahmo.png';
import IMG2 from '../../assets/Screenshot (398).png';
import IMG3 from '../../assets/Screenshot (399).png';
import IMG4 from '../../assets/Screenshot (401).png';
import IMG5 from '../../assets/Screenshot (402).png';
import IMG6 from '../../assets/Screenshot (403).png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'AHMO',
      img: IMG1,
      description:
        'AHMO is a new web application that offers a variety of features including group chats, personal chats, and game chats. Users can search for members and add them to their chosen chat. Additionally, users can play different types of games such as "Guess a Word", "Truth or Dare", "Words".',
      technologies: 'Next.js | Nest.js | Socket.io',
      github: 'https://github.com/HYF-Class19/ahmo-frontend-class19',
    },
    {
      id: 2,
      title: 'Z',
      img: IMG4,
      description:
        'Z is a social media app made with ionci and vue.js its fully functional with direct messaging made with firebase.',
      technologies: 'Ionic | Vue.js | Firebase | Javascript',
      github: 'https://github.com/HaykoDevelop/Z-Front',
    },
    {
      id: 3,
      title: 'Immo Application',
      img: IMG5,
      description:
        'Immo is a application build completly with C# and Entity Framework for a real estate company. It is a WPF application used to log in every users and houses data in the database. ',
      technologies: 'C# | Entity Framework | WPF',
      github: 'https://github.com/HaykoDevelop/Immo-Application',
    },
    {
      id: 4,
      title: 'Fitness Application',
      img: IMG2,
      description:
        'This fitness app is a C# wpf application that allows you to track your fitness progress and maintain a healthy lifestyle.',
      technologies: 'C# | Entity Framework | WPF',
      github: 'https://github.com/HaykoDevelop/FitnesDB',
    },
    {
      id: 5,
      title: 'Typ Top',
      img: IMG3,
      description: 'A typing test website built with HTML, CSS, and JavaScript that test your typing speed.',
      technologies: 'HTML| CSS | JavaScript',
      github: 'https://github.com/HaykoDevelop/Typ-Top',
    },
    {
      id: 6,
      title: 'To Do',
      img: IMG6,
      description:
        'A Simpel to do app created with react and typescript and scss, that allows you to add and delete tasks.',
      technologies: 'Typescript | React | CSS',
      github: 'https://github.com/HaykoDevelop/To-Do-Simpel',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
