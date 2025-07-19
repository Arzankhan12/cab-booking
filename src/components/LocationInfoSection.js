import React from "react";
import { FaCheckCircle, FaClock, FaUserTie, FaCar, FaTag, FaCheckSquare, FaCreditCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/LocationInfoSection.css";
const LocationInfoSection = () => {
  return (
    <section className="location-info-section">
      <div className="container">
        <div className="section-header">
          <h2>Indore Airport Cab Services - Your Reliable Travel Partner</h2>
          <div className="accent-line"></div>
        </div>
        
        <div className="row">
          <div className="col-lg-6 info-content">
            <div className="info-card">
              <p>
                Looking for reliable <strong>airport cab services in Indore</strong>? We provide 24/7 
                cab services for airport pickups and drop-offs with professional drivers and 
                well-maintained vehicles. Whether you need a cab from Indore Airport to the city or 
                want to explore nearby tourist destinations like Ujjain, Omkareshwar, or Maheshwar, 
                our fleet of cars ensures a comfortable journey.
              </p>
              <p>
                Our <strong>Indore airport taxi service</strong> offers fixed prices with no hidden charges, 
                punctual pickups, and clean vehicles. Book your cab online or call us at 
                <a href="tel:+919993790005" className="phone-link"> 
                  {/* <FaPhoneAlt className="phone-icon" /> +91 9993790005 */}
                </a> for immediate assistance.
              </p>
              <div className="cta-buttons">
                <Link to="/booking" className="btn btn-primary">Book Now</Link>
                <Link to="/packages" className="btn btn-outline">View Packages</Link>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 benefits-content">
            <div className="benefits-card">
              <h3>Why Choose Our Indore Airport Cab Service?</h3>
              <ul className="service-benefits">
                <li><FaClock className="benefit-icon" /> 24/7 availability for all airport transfers</li>
                <li><FaUserTie className="benefit-icon" /> Professional, experienced drivers</li>
                <li><FaCar className="benefit-icon" /> Clean and well-maintained vehicles</li>
                <li><FaTag className="benefit-icon" /> Fixed pricing with no hidden charges</li>
                <li><FaCheckSquare className="benefit-icon" /> Online booking and instant confirmation</li>
                <li><FaCreditCard className="benefit-icon" /> Multiple payment options for your convenience</li>
              </ul>
              <div className="trust-badge">
                <FaCheckCircle className="trust-icon" />
                <span>Trusted by 10,000+ travelers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfoSection;