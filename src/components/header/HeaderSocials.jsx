import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/hayk-amalikyan-235683209/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/HaykoDevelop" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/hyk__04/" target="_blank" rel="noreferrer" ><RiInstagramFill /></a>
    </div>
  )
}

export default HeaderSocials