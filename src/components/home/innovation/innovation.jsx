import React from "react";
import "./innovation.css";
import innovationData from "../Data/innovation";

const Innovation = () => {
  return (
    <div className="innovation">
      <div className="innovation-content">
        <div className="innovation-image">
          <img src="/img/Image  --lummi.png" alt="Innovation Process" />
        </div>
        <div className="innovation-text">
          <h1>Our Innovation Process</h1>
          <p>Our journey to market disruption.</p>
          <button className="discover-btn">Discover Now</button>
        </div>
      </div>
      <div className="innovation-grid">
        {innovationData.map((item) => (
          <div key={item.id} className="innovation-item">
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Innovation;
