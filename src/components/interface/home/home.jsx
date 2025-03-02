import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="interface-home">
      <div className="interface-content">
        <h1 className="interface-title">Boost Your Interface</h1>
        <p className="interface-subtitle">Embodying Simplicity</p>
        <div className="interface-buttons">
          <button className="btn-primary">Inspect Projects</button>
          <button className="btn-secondary">Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
