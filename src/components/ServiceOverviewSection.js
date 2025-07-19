import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaTaxi,
  FaPlane,
  FaMapMarkedAlt,
  FaCalendarCheck,
  FaRupeeSign,
  FaUserTie,
  FaClock,
  FaShieldAlt,
  FaCarSide
} from "react-icons/fa";
import "../styles/ServiceOverviewSection.css";
import droplocation from "../assets/drop_locationindore.webp";
import airporttransfers from "../assets/Airport-Transfers-in-Indore.webp";


const ServiceOverviewSection = () => {
  // State for expandable content
  // const [activeTab] = useState("airport-pickup");

  // Service data
  const services = [
    {
      id: 1,
      icon: <FaPlane />,
      title: "Airport Pickup Services",
      tabId: "airport-pickup",
      shortDesc: "Professional airport pickup with meet & greet service",
      longDesc: "Our airport pickup service ensures a smooth start to your journey in Indore. Our professional driver will be waiting for you at the arrival gate with a name board, ready to assist with your luggage and guide you to your comfortable, air-conditioned vehicle. We track flight arrivals in real-time, so even if your flight is delayed, we'll be there when you land.",
      link: "/services/airport-pickup",
      image: "https://indoreairportcabbooking.com/images/airport-pickup.jpg",
      features: ["Flight tracking", "Meet & greet", "Free waiting time", "Luggage assistance"],
      pricing: {
        economy: "₹500",
        sedan: "₹700",
        suv: "₹900"
      },
      testimonial: {
        text: "The driver was waiting for me with my name on a board despite my flight being delayed by 2 hours. Excellent service!",
        author: "Rahul Sharma",
        rating: 5
      }
    },
    {
      id: 2,
      icon: <FaTaxi />,
      title: "Airport Drop Services",
      tabId: "airport-drop",
      shortDesc: "Reliable and punctual airport drop-off service",
      longDesc: "Never miss a flight with our reliable airport drop service. We pick you up from your location in Indore and ensure you reach Devi Ahilyabai Holkar Airport with plenty of time to spare. Our drivers are familiar with the best routes to avoid traffic and provide a stress-free journey to the airport. All our vehicles are well-maintained and comfortable for a pleasant ride.",
      link: "/services/airport-drop",
      image: "https://indoreairportcabbooking.com/images/airport-drop.jpg",
      features: ["Punctual pickup", "Traffic monitoring", "Comfortable vehicles", "Professional drivers"],
      pricing: {
        economy: "₹450",
        sedan: "₹650",
        suv: "₹850"
      },
      testimonial: {
        text: "On-time pickup and smooth ride to the airport. The driver knew exactly which terminal I needed and dropped me right at the entrance.",
        author: "Priya Patel",
        rating: 5
      }
    },
    {
      id: 3,
      // icon: <FaMapMarkedAlt />,
      title: "Sightseeing Tours",
      tabId: "sightseeing",
      shortDesc: "Explore Indore and nearby tourist destinations",
      longDesc: "Discover the beauty of Indore and its surrounding attractions with our customized sightseeing tours. Visit popular destinations like Ujjain, Omkareshwar, Maheshwar, and Mandu with a knowledgeable driver who can provide insights about local culture and history. Our tour packages include comfortable transportation, flexible itineraries, and the convenience of exploring at your own pace.",
      link: "/services/sightseeing-tours",
      image: "https://indoreairportcabbooking.com/images/sightseeing.jpg",
      features: ["Customized itineraries", "Knowledgeable drivers", "Comfortable vehicles", "All-inclusive packages"],
      pricing: {
        economy: "₹1500/day",
        sedan: "₹2000/day",
        suv: "₹2500/day"
      },
      testimonial: {
        text: "Our day trip to Ujjain was fantastic. The driver was knowledgeable about the history and suggested some great local restaurants.",
        author: "Amit and Neha",
        rating: 5
      }
    }
  ];

  // FAQ data with schema-friendly structure
  const faqs = [
    {
      question: "How early should I book a cab for airport pickup?",
      answer: "We recommend booking your airport pickup at least 24 hours in advance to ensure availability. However, we also accommodate last-minute bookings subject to vehicle availability. For peak travel seasons or holidays, booking 2-3 days in advance is advisable."
    },
    {
      question: "Do you charge extra for flight delays?",
      answer: "No, we don't charge extra for flight delays. Our team monitors your flight status in real-time, and your driver will be at the airport when you arrive, regardless of any delays. We provide 60 minutes of free waiting time after your flight lands for international flights and 30 minutes for domestic flights."
    },
    {
      question: "What types of vehicles are available for airport transfers?",
      answer: "We offer a wide range of vehicles including economy cars (Swift, WagonR), sedans (Dzire, Etios), SUVs (Ertiga, Innova), and premium vehicles. All our vehicles are well-maintained, air-conditioned, and come with professional drivers to ensure a comfortable journey."
    },
    {
      question: "How do I pay for my airport cab booking?",
      answer: "We offer multiple payment options including cash payment to the driver, online payment through our website, UPI transfers, and credit/debit card payments. For regular customers, we also offer post-paid billing options with monthly invoicing."
    }
  ];

  // Blog highlights
  const blogPosts = [
    {
      title: "Top 5 Places to Visit Near Indore Airport",
      excerpt: "Discover the must-visit attractions near Devi Ahilyabai Holkar Airport that you can explore during your layover or short stay in Indore.",
      link: "https://indoreairportcabbooking.blogspot.com/2025/05/top-5-places-to-visit-near-indore.html",
      image: droplocation,
      date: "may 05, 2025"
    },
    {
      title: "Guide to Hassle-free Airport Transfers in Indore",
      excerpt: "Learn how to make your airport transfers smooth and stress-free with these expert tips from Indore's leading cab service.",
      link: "https://indoreairportcabbooking.blogspot.com/2025/05/guide-to-hassle-free-airport-transfers.html",
      image: airporttransfers,
      date: "may 05, 2025"
    }
  ];

  // Service areas
  const serviceAreas = [
    { name: "Indore Airport", lat: 22.7196, lng: 75.8011 },
    { name: "Indore City Center", lat: 22.7196, lng: 75.8577 },
    { name: "Ujjain", lat: 23.1765, lng: 75.7885 },
    { name: "Omkareshwar", lat: 22.2433, lng: 76.1519 },
    { name: "Maheshwar", lat: 22.1768, lng: 75.5877 }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Generate FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Generate service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Airport Transportation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Indore Airport Cab Booking",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Indore",
        "addressRegion": "MP",
        "addressCountry": "IN"
      }
    },
    "areaServed": serviceAreas.map(area => ({
      "@type": "City",
      "name": area.name
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Airport Transportation Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.shortDesc
        }
      }))
    }
  };

  return (
    <section className="service-overview-section">
      {/* Schema markup for FAQs */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>


      <div className="container">
        {/* Why Choose Us */}
        <motion.div
          className="why-choose-us"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>Why Choose Our Airport Cab Service</h2>
          <div className="benefits-grid">
            <motion.div className="benefit-card" variants={itemVariants}>
              <div className="benefit-icon"><FaCalendarCheck /></div>
              <h4>Reliable Service</h4>
              <p>Punctual pickups and drops with real-time flight tracking to accommodate any schedule changes.</p>
            </motion.div>
            <motion.div className="benefit-card" variants={itemVariants}>
              <div className="benefit-icon"><FaRupeeSign /></div>
              <h4>Transparent Pricing</h4>
              <p>Fixed rates with no hidden charges. Get a clear quote before booking your ride.</p>
            </motion.div>
            <motion.div className="benefit-card" variants={itemVariants}>
              <div className="benefit-icon"><FaTaxi /></div>
              <h4>Clean Vehicles</h4>
              <p>Well-maintained, sanitized fleet of vehicles for a comfortable and safe journey.</p>
            </motion.div>
            <motion.div className="benefit-card" variants={itemVariants}>
              <div className="benefit-icon"><FaUserTie /></div>
              <h4>Professional Drivers</h4>
              <p>Experienced, courteous drivers with extensive knowledge of Indore and surrounding areas.</p>
            </motion.div>
            <motion.div className="benefit-card" variants={itemVariants}>
              <div className="benefit-icon"><FaClock /></div>
              <h4>24/7 Availability</h4>
              <p>Round-the-clock service for early morning or late night flights with no extra charges.</p>
            </motion.div>
            <motion.div className="benefit-card" variants={itemVariants}>
              <div className="benefit-icon"><FaMapMarkedAlt /></div>
              <h4>Local Expertise</h4>
              <p>Drivers familiar with the best routes to avoid traffic and ensure timely arrivals.</p>
            </motion.div>
            <motion.div className="benefit-card" variants={itemVariants}>
              <div className="benefit-icon"><FaShieldAlt /></div>
              <h4>Safety & Reliability</h4>
              <p>Professional drivers with excellent safety records ensuring secure and dependable transportation.</p>
            </motion.div>
            
            <motion.div className="benefit-card" variants={itemVariants}>
              <div className="benefit-icon"><FaCarSide /></div>
              <h4>Comfort & Convenience</h4>
              <p>Well-maintained vehicles and easy booking process for a stress-free travel experience.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Blog Highlights */}
        <div className="blog-highlights">
          <h2>Travel Insights & Tips</h2>
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <div key={index} className="blog-card">
                <div className="blog-image">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    width="350"
                    height="200"
                  />
                </div>
                <div className="blog-content">
                  <span className="blog-date">{post.date}</span>
                  <h4>{post.title}</h4>
                  <p>{post.excerpt}</p>
                  <Link to={post.link} className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverviewSection;