import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <img src="./img/Image  --lummi (5).png" alt="Assessment" className="home-image" />
      <h1 className="home-title">Assessment Reimagined</h1>
      <p className="home-subtitle">
        Transition from paper to digital effortlessly.
      </p>
      <button className="home-button">Discover the Platform</button>
    </div>
  );
};

export default Home;
