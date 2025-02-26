import React from "react";
import "./meet.css";
import meetData from "../Data/meet";

const Meet = () => {
  return (
    <div className="meet">
      <h1 className="meet-title">Meet the Pioneers</h1>
      <p className="meet-subtitle">The intellects behind the advancements.</p>
      <div className="meet-grid">
        {meetData.map((person) => (
          <div key={person.id} className="meet-item">
            <img src={person.image} alt={person.name} />
            <h3>{person.name}</h3>
            <p>{person.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meet;
