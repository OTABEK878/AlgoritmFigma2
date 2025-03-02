import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="assessment-home-container">
      <img
        src="./img/Image  --lummi (5).png"
        alt="Assessment"
        className="assessment-home-image"
      />
      <h1 className="assessment-home-title">Assessment Reimagined</h1>
      <p className="assessment-home-subtitle">
        Transition from paper to digital effortlessly.
      </p>
      <button className="assessment-home-button">
        Discover the Platform
      </button>
    </div>
  );
};

export default Home;
