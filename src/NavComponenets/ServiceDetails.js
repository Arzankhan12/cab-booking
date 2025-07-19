import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaArrowRight, FaPhone, FaWhatsapp } from "react-icons/fa";
import airportPickupImage from "../assets/indore_airport.avif";
import droplocation from "../assets/drop_locationindore.webp";

const ServiceDetails = ({ canonicalUrl }) => {
  const { serviceType } = useParams();
  
  // Service data mapping
  const serviceData = {
    "airport-pickup": {
      title: "Airport Pickup Service in Indore",
      description: "Professional and reliable airport pickup service from Devi Ahilyabai Holkar Airport Indore. Our drivers track your flight to ensure timely pickups even if your flight is delayed.",
      image: airportPickupImage,
      features: [
        "Flight tracking for on-time pickups",
        "Meet & greet service at the airport",
        "Free waiting time (60 minutes after landing)",
        "Fixed prices with no hidden charges",
        "24/7 service availability"
      ],
      price: "Starting from ₹500"
    },
    "airport-drop": {
      title: "Airport Drop Service in Indore",
      description: "Reliable and punctual airport drop service to Devi Ahilyabai Holkar Airport Indore. We ensure you reach the airport with plenty of time before your flight departure.",
      image: droplocation,
      features: [
        "Punctual pickup from your location",
        "Comfortable and clean vehicles",
        "Professional and courteous drivers",
        "Fixed prices with no hidden charges",
        "24/7 service availability"
      ],
      price: "Starting from ₹500"
    },
    // Add more services as needed
  };

  // If service doesn't exist in our data
  if (!serviceData[serviceType]) {
    return (
      <div className="container my-5 text-center">
        <h1>Service Not Found</h1>
        <p>The service you're looking for is not available at the moment.</p>
        <Link to="/booking" className="btn btn-primary">
          Book Another Service
        </Link>
      </div>
    );
  }

  const service = serviceData[serviceType];

  const handleCallUs = () => {
    window.location.href = "tel:+919993790005";
  };

  const handleChatUs = () => {
    const message = `Hi! I want to book ${service.title}`;
    window.open(
      `https://wa.me/+919993790005?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <>
      <Helmet>
        <title>{service.title} | Indore Airport Cab Booking</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={`${canonicalUrl}/${serviceType}`} />
      </Helmet>

      <div className="container my-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="row"
        >
          <div className="col-lg-6">
            <h1 className="mb-4">{service.title}</h1>
            <p className="lead mb-4">{service.description}</p>
            
            <h3 className="mb-3">Service Features</h3>
            <ul className="feature-list mb-4">
              {service.features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
            
            <div className="price-tag mb-4">
              <h4>{service.price}</h4>
            </div>
            
            <div className="d-flex flex-wrap gap-3">
            <Link to="/booking" className="btn btn-primary">
                Book Now <FaArrowRight className="ms-2" />
              </Link>
              {/* Updated button with better visibility */}
              <button onClick={handleCallUs} className="btn btn-secondary" style={{ background: "#6c757d", color: "#fff", border: "none" }}>
                <FaPhone className="me-2" /> Call For Booking
              </button>
              <button onClick={handleChatUs} className="btn btn-success">
                <FaWhatsapp className="me-2" /> WhatsApp Booking
              </button>
            </div>
          </div>
          
          <div className="col-lg-6 mt-4 mt-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="service-image-container"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="img-fluid rounded shadow"
                onError={(e) => {
                  e.target.src = "https://indoreairportcabbooking.com/images/default-service.jpg";
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ServiceDetails;