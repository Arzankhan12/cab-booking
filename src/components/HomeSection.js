import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import { Link } from "react-router-dom";
import { FaPhone, FaWhatsapp, FaArrowRight, FaClock, FaUserTie, FaTaxi } from "react-icons/fa";
import { Helmet } from "react-helmet";
import "../styles/HomeSection.css";

// Define image array with proper alt texts and absolute URLs
const images = [
  {
    src: "https://indoreairportcabbooking.com/images/ind3.jpg",
    alt: "Indore Airport Cab Service - Professional Airport Transfer",
    width: 1200,
    height: 800
  },
  {
    src: "https://indoreairportcabbooking.com/images/Indore.png",
    alt: "Indore City Taxi Service - 24/7 Airport Pickup and Drop",
    width: 1200,
    height: 800
  },
  {
    src: "https://indoreairportcabbooking.com/images/indore_pic.jpg",
    alt: "Reliable Cab Booking Service in Indore - Airport Transportation",
    width: 1200,
    height: 800
  }
];


const HomeSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Preload the next image before transitioning
  const preloadNextImage = (nextIndex) => {
    setIsLoading(true);
    const img = new Image();
    img.src = images[nextIndex].src;
    img.onload = () => {
      setIsLoading(false);
      setCurrentImage(nextIndex);
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentImage + 1) % images.length;
      preloadNextImage(nextIndex);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [currentImage]);

  const handleImageChange = (index) => {
    if (index !== currentImage && !isLoading) {
      preloadNextImage(index);
    }
  };

  const handleCallUs = () => {
    window.location.href = "tel:+919993790005";
  };

  const handleChatUs = () => {
    const message = `Hi! I want to Book a CAB from Indore Airport`;
    window.open(
      `https://wa.me/+919993790005?text=${encodeURIComponent(message)}`
    );
  };

  // Schema markup for local business
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Indore Airport Cab Booking Service",
    "image": images.map(img => `https://indoreairportcabbooking.com/${img.src}`),
    "description": "Professional airport cab service in Indore offering 24/7 pickup and drop services with reliable drivers and comfortable vehicles.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "39/40A flat no.5 lala bhai manzil ali colony khajrana",
      "addressLocality": "Indore",
      "addressRegion": "MP",
      "postalCode": "452001",
      "addressCountry": "IN"
    },
    "telephone": "+919993790005",
    "priceRange": "₹₹",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/indoreairportcabbooking",
      "https://www.instagram.com/indoreairportcabbooking"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Airport Taxi Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Airport Pickup",
            "description": "Reliable pickup service from Devi Ahilyabai Holkar Airport Indore"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Airport Drop",
            "description": "Comfortable drop service to Devi Ahilyabai Holkar Airport Indore"
          }
        }
      ]
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://indoreairportcabbooking.com/"
    }
  };

  return (
    <>
      {/* Add structured data with Helmet */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <section className="hero-section" id="airport-cab-booking">
        <motion.div 
          className="hero-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Background image container with AnimatePresence for smooth transitions */}
          <div className="hero-background-container">
            <AnimatePresence mode="sync">
              <motion.div
                className="hero-background"
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{
                  backgroundImage: `url(${images[currentImage].src})`,
                }}
                role="img"
                aria-label={images[currentImage].alt}
              >
                <div className="overlay"></div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="hero-content-wrapper">
            <motion.div 
              className="hero-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Indore Airport Cab Booking | 24/7 Reliable Taxi Service
              </motion.h1>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Your trusted airport transfer service for comfortable and affordable rides to and from 
                Devi Ahilyabai Holkar Airport Indore. We offer fixed-price airport pickups, on-time service, 
                and professional chauffeurs available round the clock.
              </motion.p>
              
              <motion.div 
                className="service-highlights"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="highlight-item">
                  <FaClock className="highlight-icon" />
                  <span>24/7 Service</span>
                </div>
                <div className="highlight-item">
                  <FaUserTie className="highlight-icon" />
                  <span>Professional Drivers</span>
                </div>
                <div className="highlight-item">
                  <FaTaxi className="highlight-icon" />
                  <span>Clean Vehicles</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="hero-buttons"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Link to="/booking" className="btn btn-primary" aria-label="Book airport cab now">
                  Book Airport Cab <FaArrowRight className="btn-icon" />
                </Link>
                <button onClick={handleCallUs} className="btn btn-secondary" aria-label="Call for cab booking">
                  <FaPhone className="btn-icon" /> Call For Booking
                </button>
                <button onClick={handleChatUs} className="btn btn-whatsapp" aria-label="Chat on WhatsApp">
                  <FaWhatsapp className="btn-icon" /> WhatsApp Booking
                </button>
              </motion.div>
              
              <motion.div
                className="quick-links"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <p>Popular Services: 
                  <Link to="/services/airport-pickup" className="quick-link">Airport Pickup</Link> | 
                  <Link to="/services/airport-drop" className="quick-link">Airport Drop</Link> | 
                  <Link to="/packages/ujjain" className="quick-link">Ujjain Tour</Link> | 
                  <Link to="/packages/omkareshwar" className="quick-link">Omkareshwar Trip</Link>
                </p>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="image-indicators" role="tablist" aria-label="Image carousel controls" style={{width: '10px', height: '10px'}}>
            {images.map((_, index) => (
              <div 
                key={index} 
                className={`indicator ${currentImage === index ? 'active' : ''}`}
                onClick={() => handleImageChange(index)}
                aria-label={`View slide ${index + 1}`}
                role="tab"
                tabIndex={0}
                aria-selected={currentImage === index}
                style={{width: '10px', height: '10px'}}
              />
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HomeSection;