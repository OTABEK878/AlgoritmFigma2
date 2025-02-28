import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ setShowOnlyAbout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleBeginClick = () => {
    setShowOnlyAbout(true);
    navigate("/");
  };

  const handlePerspectiveClick = () => {
    navigate("/assesment");
  };

  const handleInventorsClick = () => {
    navigate("/interface");
  };

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
        <a href="#" onClick={handlePerspectiveClick}>Perspective</a>
        <a href="#" onClick={handleInventorsClick}>Inventors</a>
        <div className="btn">
          <button className="proceed-btn">Proceed</button>
          <button className="register-btn">Register Today</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;