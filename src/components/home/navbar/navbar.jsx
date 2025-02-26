import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ setShowOnlyAbout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // "Begin" tugmasi bosilganda faqat AboutHome sahifasini ko'rsatish
  const handleBeginClick = () => {
    setShowOnlyAbout(true);
    navigate("/");
  };

  // Logoni bosganda Home sahifasiga qaytish
  const handleLogoClick = () => {
    setShowOnlyAbout(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
        <img src="./img/Brand.png" alt="Logo" />
      </div>
      
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
      
      <div className={menuOpen ? "nav-links active" : "nav-links"}>
        <a href="#" onClick={handleBeginClick}>Begin</a>
        <a href="#">Perspective</a>
        <a href="#">Inventors</a>
        <div className="btn">
          <button className="proceed-btn">Proceed</button>
          <button className="register-btn">Register Today</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
