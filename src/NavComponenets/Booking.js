import SEO from "../components/Seo";
import React from "react";
import carData from "../Data/CarData";
import CarCard from "../components/Carcard";

function Booking({canonicalUrl}) { 
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Indore Airport Cab Booking",
    "serviceType": "Taxi Service",
    "areaServed": {
      "@type": "City",
      "name": "Indore"
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Indore Airport Cab Service",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Indore",
        "addressRegion": "MP",
        "addressCountry": "IN"
      }
    },
    "offers": {
      "@type": "AggregateOffer",
      "highPrice": "20",
      "lowPrice": "11",
      "priceCurrency": "INR",
      "offerCount": carData.length,
      "offers": carData.map(car => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": car.title
        },
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": car.details[1].split("₹")[1].split(" ")[0],
          "priceCurrency": "INR",
          "unitText": "KM"
        }
      }))
    }
  };

  return (
    <>
      <SEO
        title="Book Indore Airport Cab Services | Fleet Options & Pricing"
        description="Book reliable airport cabs in Indore with our easy online booking system. Choose from Swift, Ertiga, Innova and more. Fixed prices starting at ₹11/km."
        keywords="Indore airport cab booking, taxi booking Indore, cab hire, Swift taxi, Innova cab Indore, airport transfer booking"
        canonicalUrl={canonicalUrl}
        schema={schema}
        ogImage="./images/fleet-cover.jpg"
      />
      <div className="mb-3 mb-md-2">
        <h1 className="booking-heading text-center text-decoration-underline">
          OUR FLEETS
        </h1>
        <div className="booking-intro mb-4">
          <p className="text-center">
            Choose from our wide range of well-maintained vehicles for your Indore airport transfers and city travel needs. 
            All our cabs come with professional drivers, 24/7 customer support, and competitive pricing.
          </p>
        </div>
        <div className="carcontainer">
          {carData.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
        <div className="booking-info mt-4">
          <h2 className="text-center mb-3">How to Book</h2>
          <p className="text-center">
            Booking is simple! Call us at <a href="tel:+919993790005">+91 99937 90005</a> or use our online booking form.
            We offer instant confirmation and flexible payment options.
          </p>
        </div>
      </div>
    </>
  );
}

export default Booking;
