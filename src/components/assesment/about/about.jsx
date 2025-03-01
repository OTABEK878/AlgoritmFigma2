import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
        <div className="vision">
        <div className="vision-section">
        <h3 className="vision-title">Our Vision</h3>
        <h1 className="vision-heading">
          Empowering educators to accurately evaluate and track student progress
          through digital assessments.
        </h1>
      </div>
        </div>

      <div className="integration-section">
        <div className="integration-content">
        <div className="integration">
        <h2 className="integration-title">Simple Integration</h2>
        <div className="integration-cards">
          <div className="integration-card">
            <div className="icon">1</div>
            <h3>Digitize Assessments</h3>
            <p>Easily convert paper tests into interactive digital formats.</p>
          </div>

          <div className="integration-card">
            <div className="icon">2</div>
            <h3>Real-Time Insights</h3>
            <p>Instantly analyze and understand student performance.</p>
          </div>

          <div className="integration-card">
            <div className="icon">3</div>
            <h3>Comprehensive Reports</h3>
            <p>Detailed breakdowns to guide student success strategies.</p>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
