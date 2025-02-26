import React from "react";
import { teamMembers, testimonials } from "../Data/team";
import "./team.css";

const Team = () => {
  return (
    <div className="team-container">
      <div className="team-main-image">
        <img src="./img/Image  --lummi (4).png" alt="Main" />
      </div>

      <div className="team-content">
        <h2>Ingenious Services</h2>
        <p style={{paddingLeft: "100px", width: "300px", marginTop: "-30px"}}>Check out our latest projects demonstrating our expertise.</p>

        <div className="team-list">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <img src={member.image} alt={member.name} />
              <div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonials">
        {testimonials.map((review) => (
          <div key={review.id} className="testimonial-card">
            <img src={review.image} alt="Review" />
            <p>"{review.text}"</p>
            <h5>{review.author}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
