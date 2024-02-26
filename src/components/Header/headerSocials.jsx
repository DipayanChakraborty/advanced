import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/dipayan-chakraborty-866192208/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/DipayanC2012" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
