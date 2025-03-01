import React from "react";
import "./footer.css";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-assessment">
      <div className="footer-container-assessment">
        <div className="footer-left-assessment">
            <img src="./img/Icon.png" alt="" />
          <p className="footer-brand-assessment">TechInnov</p>
        </div>
        <div className="footer-link-assessment">
        <div className="footer-links-assessment">
          <a href="">Begin</a>
          <a href="">Perspective</a>
          <a href="">Inventors</a>
        </div>
        <p className="footer-rights-assessment">All rights reserved 2024</p>
        </div>

        <div className="footer-social-assessment">
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;