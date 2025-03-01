import React from "react";
import { FiRefreshCw } from "react-icons/fi";
import cardData from "../data/cardData";
import "./card.css";

const Card = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <FiRefreshCw className="refresh-icon" />
        <h1>Interactive Dashboard</h1>
        <p>A centralized system for all assessment data.</p>
      </div>
      <div className="card-container">
        {cardData.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} className="card-image" />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
