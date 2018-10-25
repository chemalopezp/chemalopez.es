import React from "react";
import {
  FaGithub,
  FaAngellist,
  FaLinkedin,
  FaInstagram
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">

    <li>
      < a href="https://www.linkedin.com/in/chemalopezp/en" >
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="https://github.com/chemalopezp">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://angel.co/chemalopezp">
        <FaAngellist />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/theplacesitakeyou">
        <FaInstagram />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
