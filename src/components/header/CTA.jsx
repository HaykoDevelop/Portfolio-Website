import React from 'react';
import CV from '../../assets/CV_Hayk_Amalikyan.pdf';


const CTA = () => {
  return (
    <div className="cta futuristic-btns">
      <a href={CV} download className="futuristic-btn outline">
        Download CV
      </a>
      <a href="#contact" className="futuristic-btn filled">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
