import React from "react";
import "./about.css";
import aboutData from "../data/aboutData";

const About = () => {
  return (
    <div className="About-Container">
      <h1 className="About-Title">Chosen Creations</h1>
      <p className="About-Subtitle">Polished for Precision</p>
      <div className="About-Gallery">
        {aboutData.map((item) => (
          <div key={item.id} className="About-Card">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default About;
