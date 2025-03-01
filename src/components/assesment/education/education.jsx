import React from "react";
import "./education.css";
import { FaCamera, FaCheckCircle, FaCloud } from "react-icons/fa";

const Education = () => {
  return (
    <div className="education">
      <div className="education-container">
        {/* Chap tomon - Matn qismi */}
        <div className="education-text">
          <h1>Elevate Education</h1>
          <p>Harness the power of digital assessments.</p>
          <button className="education-btn">Join Our Community</button>
        </div>

        {/* O'ng tomon - Quti ichidagi elementlar */}
        <div className="education-card">
          <div className="education-item">
            <FaCamera className="education-icon" />
            <div>
              <h3>Effortless Setup</h3>
              <p>Get up and running with no downtime.</p>
            </div>
          </div>

          <div className="education-item">
            <FaCheckCircle className="education-icon" />
            <div>
              <h3>Actionable Data</h3>
              <p>Utilize insights to support student growth.</p>
            </div>
          </div>

          <div className="education-item">
            <FaCloud className="education-icon" />
            <div>
              <h3>Scalable Solutions</h3>
              <p>Adapt and scale to meet institutional needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
