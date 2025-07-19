import React from "react";
import { Link } from "react-router-dom";

const Cta = () => (
  <div className="cta-container">
    <div className="cta-content">
      <h2>Ready to Book Your Airport Cab?</h2>
      <p>Experience hassle-free airport transfers with our professional cab service</p>
      <div className="cta-buttons">
        <Link to="/booking" className="cta-button primary">
          Book Now
        </Link>
        <a href="tel:+919993790005" className="cta-button secondary">
          Call Us
        </a>
      </div>
    </div>
  </div>
);

export default Cta;
