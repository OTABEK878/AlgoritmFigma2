import React from "react";
import "./directions.css";
import directionsData from "../Data/directionsData";
const Directions = () => {
  return (
    <div className="directions">
      <h1 className="directions-title">Progressive Data Analytics</h1>
      <p className="directions-subtitle">Uncover patterns and prompt action.</p>
      <div className="directions-grid">
        {directionsData.map((item, index) => (
          <div key={index} className="direction-item">
            <img src={item.image} alt="" />
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directions;
