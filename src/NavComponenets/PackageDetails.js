import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import ujjaintour from "../assets/Ujjaintour.webp";
import omkareshwar from "../assets/omkareshwar.webp";

import { FaArrowRight, FaPhone, FaWhatsapp, FaClock, FaMapMarkerAlt, FaRupeeSign } from "react-icons/fa";

const PackageDetails = ({ canonicalUrl }) => {
  const { packageName } = useParams();
  
  // Package data mapping
  const packageData = {
    "ujjain": {
      title: "Ujjain Tour Package",
      description: "Explore the sacred city of Ujjain with our comfortable cab service. Visit Mahakaleshwar Temple and other religious sites with our experienced drivers who know the best routes.",
      image: ujjaintour,
      duration: "Full day (10-12 hours)",
      distance: "~55 km from Indore",
      attractions: [
        "Mahakaleshwar Jyotirlinga Temple",
        "Kal Bhairav Temple",
        "Ram Ghat",
        "Harsiddhi Temple",
        "Mangalnath Temple"
      ],
      price: "Starting from ₹2500",
      inclusions: [
        "Pickup and drop from your location in Indore",
        "Experienced driver familiar with Ujjain",
        "All toll taxes and parking charges",
        "Comfortable air-conditioned vehicle"
      ]
    },
    "omkareshwar": {
      title: "Omkareshwar Trip Package",
      description: "Visit the holy island of Omkareshwar, home to one of the 12 Jyotirlinga shrines. Our cab service provides a comfortable journey to this sacred destination on the Narmada River.",
      image: omkareshwar,
      duration: "Full day (10-12 hours)",
      distance: "~77 km from Indore",
      attractions: [
        "Omkareshwar Temple",
        "Mamleshwar Temple",
        "Siddhnath Temple",
        "Narmada River Ghats",
        "Kedareshwar Temple"
      ],
      price: "Starting from ₹3000",
      inclusions: [
        "Pickup and drop from your location in Indore",
        "Experienced driver familiar with Omkareshwar",
        "All toll taxes and parking charges",
        "Comfortable air-conditioned vehicle"
      ]
    },
    // Add more packages as needed
  };

  // If package doesn't exist in our data
  if (!packageData[packageName]) {
    return (
      <div className="container my-5 text-center">
        <h1>Package Not Found</h1>
        <p>The tour package you're looking for is not available at the moment.</p>
        <Link to="/packages" className="btn btn-primary">
          View All Packages
        </Link>
      </div>
    );
  }

  const packageInfo = packageData[packageName];

  const handleCallUs = () => {
    window.location.href = "tel:+919993790005";
  };

  const handleChatUs = () => {
    const message = `Hi! I want to book the ${packageInfo.title}`;
    window.open(
      `https://wa.me/+919993790005?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <>
      <Helmet>
        <title>{packageInfo.title} | Indore Airport Cab Booking</title>
        <meta name="description" content={packageInfo.description} />
        <link rel="canonical" href={`${canonicalUrl}/${packageName}`} />
      </Helmet>

      <div className="container my-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-4">{packageInfo.title}</h1>
          
          <div className="row">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="package-image-container mb-4"
              >
                <img 
                  src={packageInfo.image} 
                  alt={packageInfo.title} 
                  className="img-fluid rounded shadow"
                  onError={(e) => {
                    e.target.src = "https://indoreairportcabbooking.com/images/default-package.jpg";
                  }}
                />
              </motion.div>
            </div>
            
            <div className="col-lg-6">
              <p className="lead mb-4">{packageInfo.description}</p>
              
              <div className="package-details mb-4">
                <div className="detail-item">
                  <FaClock className="icon" />
                  <span><strong>Duration:</strong> {packageInfo.duration}</span>
                </div>
                <div className="detail-item">
                  <FaMapMarkerAlt className="icon" />
                  <span><strong>Distance:</strong> {packageInfo.distance}</span>
                </div>
                <div className="detail-item">
                  <FaRupeeSign className="icon" />
                  <span><strong>Price:</strong> {packageInfo.price}</span>
                </div>
              </div>
              
              <h3 className="mb-3">Key Attractions</h3>
              <ul className="attraction-list mb-4">
                {packageInfo.attractions.map((attraction, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {attraction}
                  </motion.li>
                ))}
              </ul>
              
              <h3 className="mb-3">Package Inclusions</h3>
              <ul className="inclusion-list mb-4">
                {packageInfo.inclusions.map((inclusion, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {inclusion}
                  </motion.li>
                ))}
              </ul>
              
              <div className="d-flex flex-wrap gap-3">
                <Link to="/booking" className="btn btn-primary">
                  Book This Package <FaArrowRight className="ms-2" />
                </Link>
                <button onClick={handleCallUs} className="btn btn-secondary">
                  <FaPhone className="me-2" /> Call For Booking
                </button>
                <button onClick={handleChatUs} className="btn btn-success">
                  <FaWhatsapp className="me-2" /> WhatsApp Booking
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default PackageDetails;