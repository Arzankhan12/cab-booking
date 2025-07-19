import React, { lazy, Suspense } from "react";
import carData from "../Data/CarData";
import CarCard from "./Carcard";
import Card from "./TourCard";
import TourData from "../Data/TourData";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeSection from "./HomeSection";
import Cta from "./Cta";
import "../App.css";
import SEO from "./Seo";
import LocationInfoSection from "./LocationInfoSection";
import ServiceOverviewSection from "./ServiceOverviewSection";
import AboutUsSection from "./AboutUsSection";

// Lazy load non-critical components
const CarouselComponent = lazy(() => import("../components/CarouselComponent"));
const Faq = lazy(() => import("../components/Faq"));


function Home({ canonicalUrl }) {
  // Schema.org structured data for local business
// Expand the schema with more relevant information
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://indoreairportcabbooking.com/#localbusiness",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://indoreairportcabbooking.com"
  },
  "name": "Indore Airport Cab Booking",
  "image": "https://indoreairportcabbooking.com/images/logo.jpg",
  "url": "https://indoreairportcabbooking.com",
  "telephone": "+91 9993790005",
  "description": "24/7 reliable airport cab services in Indore with fixed prices and professional drivers.",
  "aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "reviewCount": "10"
},
"review": [
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Ovesh Khan"
    },
    "datePublished": "2025-05-04",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "Their service is great and trustworthy. Booking and riding were easy. The drivers are polite, on time, and professional. The cars are clean and well-kept."
  },
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Tushar Soni"
    },
    "datePublished": "2025-05-03",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "Our trip to Ujjain Mahakaleshwar was unforgettable. The driver was skilled and polite, making sure we had a safe and smooth ride."
  },
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Vikram Wagh"
    },
    "datePublished": "2025-05-02",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4",
      "bestRating": "5"
    },
    "reviewBody": "The car was on time, in great condition, and the service was reliable. The rates were lower than others I checked."
  },
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Nitin Dhakad"
    },
    "datePublished": "2025-05-02",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "The drivers are skilled and professional. The service was reliable, on time, and hassle-free. The customer support was helpful and answered all our questions quickly."
  },
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Saksham Jain"
    },
    "datePublished": "2025-05-01",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "Great transportation service from start to end. The ride was smooth, and the car was clean. I felt safe and relaxed the whole time."
  },
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Amit Sharma"
    },
    "datePublished": "2025-05-05",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "Excellent airport cab service. Very punctual and clean car."
  },
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Priya Verma"
    },
    "datePublished": "2025-05-04",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4",
      "bestRating": "5"
    },
    "reviewBody": "Good service for airport transfers. Driver was courteous and helped with luggage. Would recommend for Indore airport pickups."
  },
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Rajesh Patel"
    },
    "datePublished": "2025-05-03",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "Used their service for a family trip to Omkareshwar. The vehicle was comfortable and the driver knew all the best spots. Excellent value for money."
  },
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Meera Gupta"
    },
    "datePublished": "2025-05-02",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4",
      "bestRating": "5"
    },
    "reviewBody": "Booked a cab for early morning airport drop. Driver arrived 10 minutes early and got us to the airport with plenty of time to spare. Very reliable service."
  },
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Sunil Malhotra"
    },
    "datePublished": "2025-05-01",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "As a business traveler, I appreciate their punctuality and professionalism. The online booking system is straightforward and the confirmation was immediate."
  }
],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "39/40A flat no.5 lala bhai manzil ali colony khajrana",
    "addressLocality": "Indore",
    "addressRegion": "MP",
    "postalCode": "452001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "22.7196",
    "longitude": "75.8577"
  },
  "priceRange": "₹₹",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+91 9993790005",
      "email": "indoreairportcabooking@gmail.com",
      "availableLanguage": ["English", "Hindi"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    {
      "@type": "ContactPoint",
      "contactType": "booking",
      "telephone": "+91 9993790005",
      "availableLanguage": ["English", "Hindi"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    }
  ],
  "sameAs": [
    "https://www.instagram.com/indoreairportcabbooking",
    "https://www.facebook.com/indoreairportcabbooking"
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Indore",
      "sameAs": "https://en.wikipedia.org/wiki/Indore"
    },
    {
      "@type": "City",
      "name": "Ujjain",
      "sameAs": "https://en.wikipedia.org/wiki/Ujjain"
    },
    {
      "@type": "City",
      "name": "Omkareshwar",
      "sameAs": "https://en.wikipedia.org/wiki/Omkareshwar"
    },
    {
      "@type": "City",
      "name": "Maheshwar",
      "sameAs": "https://en.wikipedia.org/wiki/Maheshwar"
    },
    {
      "@type": "City",
      "name": "Mandav",
      "sameAs": "https://en.wikipedia.org/wiki/Mandu"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Premium Taxi Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Airport Pickup Service",
          "description": "Stress-free airport pickups with flight tracking, free waiting time, and personalized meet & greet service at Devi Ahilyabai Holkar Airport",
          "serviceType": "AirportTransfer",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Indore Airport Cab Booking",
            "paymentAccepted": [
              "Cash",
              "Credit Card",
              "Debit Card",
              "UPI",
              "Paytm",
              "Google Pay",
              "PhonePe"
          ],
          "priceCurrency": "INR"
          },
          "serviceOutput": {
            "@type": "Thing",
            "name": "Professional Airport Transfer"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "availabilityStarts": "00:00",
            "availabilityEnds": "23:59",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "description": "Fixed transparent pricing with no hidden charges"
            }
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Airport Drop Service",
          "description": "Guaranteed on-time airport drops with comfortable vehicles, professional drivers, and route optimization to avoid traffic delays",
          "serviceType": "AirportTransfer",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Indore Airport Cab Booking",
            "paymentAccepted": [
              "Cash",
              "Credit Card",
              "Debit Card",
              "UPI",
              "Paytm",
              "Google Pay",
              "PhonePe"
          ],
          "priceCurrency": "INR"
          },
          "serviceOutput": {
            "@type": "Thing",
            "name": "Reliable Airport Transfer"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "availabilityStarts": "00:00",
            "availabilityEnds": "23:59",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "description": "Fixed transparent pricing with no hidden charges"
            }
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Religious Tourism Service",
          "description": "Spiritually enriching tours to sacred destinations with knowledgeable guides explaining religious significance and customs at each location",
          "serviceType": "TourGuideService",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Indore Airport Cab Booking",
            "paymentAccepted": [
              "Cash",
              "Credit Card",
              "Debit Card",
              "UPI",
              "Paytm",
              "Google Pay",
              "PhonePe"
          ],
          "priceCurrency": "INR"
          },
          "serviceOutput": {
            "@type": "Thing",
            "name": "Guided Religious Tour"
          },
          "areaServed": ["Ujjain", "Omkareshwar"],
          "offers": {
            "@type": "Offer",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "description": "All-inclusive package with no hidden costs"
            }
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Heritage Tourism Service",
          "description": "Immersive historical tours with local insights, photo opportunities, and comfortable exploration of architectural marvels and cultural landmarks",
          "serviceType": "TourGuideService",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Indore Airport Cab Booking",
            "paymentAccepted": [
              "Cash",
              "Credit Card",
              "Debit Card",
              "UPI",
              "Paytm",
              "Google Pay",
              "PhonePe"
          ],
          "priceCurrency": "INR"
          },
          "serviceOutput": {
            "@type": "Thing",
            "name": "Heritage Site Tour"
          },
          "areaServed": ["Maheshwar", "Mandav"],
          "offers": {
            "@type": "Offer",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "description": "All-inclusive package with no hidden costs"
            }
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Transportation",
          "description": "Professional business travel solutions with punctual service, well-dressed drivers, and comfortable vehicles for executives and business travelers",
          "serviceType": "TransportationService",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Indore Airport Cab Booking",
            "paymentAccepted": [
              "Cash",
              "Credit Card",
              "Debit Card",
              "UPI",
              "Paytm",
              "Google Pay",
              "PhonePe"
          ],
          "priceCurrency": "INR"
          },
          "serviceOutput": {
            "@type": "Thing",
            "name": "Executive Transportation"
          },
          "areaServed": ["Indore"],
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "availabilityStarts": "00:00",
            "availabilityEnds": "23:59"
          }
        }
      }
    ]
  },
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://indoreairportcabbooking.com/booking",
      "inLanguage": "en-US",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    },
    "result": {
      "@type": "Reservation",
      "name": "Cab Booking Reservation"
    }
  }
};

  return (
    <>
      <SEO 
        title="Indore Airport Cab Services | 24/7 Reliable Taxi Booking" 
        description="Book your Indore airport cab online. Reliable 24/7 taxi services for airport pickups and drop-offs with fixed prices and professional drivers."
        keywords="Indore airport cab, airport taxi Indore, cab booking Indore, airport transfer, Indore taxi service, airport pickup Indore, airport, air port, Indore airport"
        ogImage="/images/ind3.jpg"
        schema={localBusinessSchema}
        canonicalUrl={canonicalUrl}
      />
      
      <main>
        <section className="hero-section">
          <HomeSection />
        </section>

        <section className="about-section" id="about-us">
          <AboutUsSection />
        </section>
        
        <section className="fleet-section" id="our-fleets">
          <h1 className="fleets-heading">OUR FLEETS</h1>
          <div className="carcontainer">
            {carData.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </div>
        </section>

        <section className="tour-section" id="tour-destinations">
          <div className="BookingHeading">
            <h2>Indore Airport Cab Booking</h2>
          </div>
          <div className="Tourheading">
            <h3>Tour Destinations</h3>
            <span>_______________________</span>
          </div>
          <div className="container2">
            {TourData.map((place, index) => (
              <Card
                key={index}
                image={place.image}
                heading={place.heading}
                description={place.description}
                price={place.price}
              />
            ))}
          </div>
        </section>

        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <section className="service-overview-section-wrapper">
          <ServiceOverviewSection />
        </section>
          <section className="testimonials-section">
            <CarouselComponent />
          </section>
          <section>
            <LocationInfoSection />
          </section>
          <section className="faq-section" id="faqs">
            <Faq />
          </section>
          <section className="faq-section" id="faqs">
            <Cta />
          </section>
          
        </Suspense>
      </main>
    </>
  );
}

export default Home;