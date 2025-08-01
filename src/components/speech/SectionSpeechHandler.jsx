import React, { useEffect, useState } from 'react';
import CyberpunkSpeech from './speech.jsx';

const sectionData = [
    {
        id: 'intro',
        speech: 'WWelcome to the future — where ideas become reality in digital form.',
    },
    {
        id: 'portfolio',
        speech: 'EExplore my portfolio — a collection of digital creations designed for impact.',
    },
    {
        id: 'skills',
        speech: 'TThese are my core skills — tools to transform vision into future-proof solutions.',
    },
    {
        id: 'contact',
        speech: 'LLet’s connect — whether you need a project, a plan, or a partner in innovation.',
    },
  ];

const SectionSpeechHandler = () => {
  const [speech, setSpeech] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let currentSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) {
          currentSection = section.id;
        }
      });

      const found = sectionData.find((s) => s.id === currentSection);
      if (found && found.speech !== speech) {
        setSpeech(found.speech);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speech]);

  return <CyberpunkSpeech text={speech} />;
};

export default SectionSpeechHandler;
