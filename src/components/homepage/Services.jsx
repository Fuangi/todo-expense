import React from "react";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className="our-services">
      <h1>What do we offer?</h1>
      <div className="services card-grid">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}

export default Services;
