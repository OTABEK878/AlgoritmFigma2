import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer-about">
      <div className="footer-left-about">
      <img src="./img/Icon.png" alt="" />

        <span className="footer-title-about">
          Tech<span className="highlight-about">Avenue</span> Services
          <p className="footer-text-about">© TechAvenue Services 2024</p>

        </span>
      </div>
      <div className="footer-links-about">
        <a href="#">@TechAvenueAppDev</a>
        <a href="#">@TechAvenueWebDev</a>
        <a href="#">@TechAvenueDM</a>
      </div>
    </footer>
  );
};

export default Footer;
