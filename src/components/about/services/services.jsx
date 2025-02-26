import React from "react";
import servicesData from "../Data/services";
import "./services.css";

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Service Methodology</h2>
      <p className="services-subtitle">
        Uncover our systematic approach to turning your dreams into reality.
      </p>

      <div className="services-list">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <p className="service-step">{service.step}</p>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
