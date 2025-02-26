import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="title">Sparking Your App Ideas</h1>
        <p className="description">Creating digital journeys passionately</p>
        <div className="button-container">
          <button className="start-button">Start Your App Journey</button>
          <button className="know-more-button">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;