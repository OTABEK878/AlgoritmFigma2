import React from "react";
import "./footer.css";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{background: "#1b1d23"}} className="footer">
      <div className="footer-container">
        <div className="footer-left">
            <img src="./img/Icon.png" alt="" />
          <p className="footer-brand">TechInnov</p>
        </div>
        <div className="footer-link">
        <div className="footer-links">
          <a href="">Begin</a>
          <a href="">Perspective</a>
          <a href="">Inventors</a>
        </div>
        <p className="footer-rights">All rights reserved 2024</p>
        </div>

        <div className="footer-social">
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
