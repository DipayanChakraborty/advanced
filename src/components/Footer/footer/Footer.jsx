import React from "react";
import "./footer.css";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Dipayan Chakraborty
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/chaksDipayan" target="_blank">
          <BsTwitter />
        </a>
        <a href="https://github.com/DipayanC2012" target="_blank">
          <BsGithub />
        </a>
        <a
          href="https://www.instagram.com/comfortably________numb/?hl=en"
          target="_blank"
        >
          <GrInstagram />
        </a>
        <a href="https://www.facebook.com/guddu.chakraborty.353/">
          <BsFacebook />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Dipayan Chakraborty 2023. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
