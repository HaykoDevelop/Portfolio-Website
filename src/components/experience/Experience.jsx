import React, { useRef } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaVuejs,
  FaSass,
  FaPhp,
  FaPython,
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiNestjs, SiIonic, SiTailwindcss, SiDotnet, SiBlazor, SiPandas, SiNumpy } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import { useScroll, useTransform, motion } from 'framer-motion';
import './experience.css';

const Experience = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ['65%', '-100%']);

  return (
    <section id="skills" ref={targetRef} className="relative h-[300vh] section">
      <div className="container sticky top-0 flex h-screen items-center overflow-hidden">
        <h2 className="skills-title">Skills</h2>
        <motion.div style={{ x }} className="flex gap-4 w-[300vw]">
          <div className="skill-box">
            <FaHtml5 className="experience__details-icon" />
          </div>
          <div className="skill-box">
            <FaCss3Alt className="experience__details-icon" />
          </div>
          <div className="skill-box">
            <FaJs className="experience__details-icon" />
          </div>
          <div className="skill-box">
            <SiTypescript className="experience__details-icon" />
          </div>
          <div className="skill-box">
            <TbBrandCSharp className="experience__details-icon" />
          </div>
          <div className="skill-box">
            <FaPhp className="experience__details-icon" />
          </div>
          <div className="skill-box">
            <FaReact className="experience__details-icon" />
          </div>
          <div className="skill-box">
            <SiNextdotjs className="experience__details-icon" />
          </div>
          <div className="skill-box">
            <SiNestjs className="experience__details-icon" />
          </div>
          <div className="skill-box">
            <FaAngular className="experience__details-icon" />
          </div>
          <div className="skill-box">
            <FaVuejs className="experience__details-icon" />
          </div>
          <div className="skill-box">
            <SiIonic className="experience__details-icon" />
          </div>
          <div className="skill-box">
            <FaSass className="experience__details-icon" />
          </div>
          <div className="skill-box">
            <SiTailwindcss className="experience__details-icon" />
          </div>
          <div className="skill-box">
            <TbBrandCSharp className="experience__details-icon" />
          </div>
          <div className="skill-box">
            <SiDotnet className="experience__details-icon" />
          </div>
          <div className="skill-box">
            <SiBlazor className="experience__details-icon" />
          </div>
          <div className="skill-box">
            <FaPython className="experience__details-icon" />
          </div>
          <div className="skill-box">
            <SiPandas className="experience__details-icon" />
          </div>
          <div className="skill-box">
            <SiNumpy className="experience__details-icon" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;