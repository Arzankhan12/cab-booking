import SEO from "../components/Seo";
import React from "react";
import Card from "../components/TourCard";
import TourData from "../Data/TourData";
function Packages({canonicalUrl}) {
  return (
    <>
    <SEO 
  title="Indore Airport Cab Packages | Affordable Taxi Services" 
  description="Explore our affordable Indore airport cab packages for various destinations. Fixed prices, comfortable vehicles, and professional drivers guaranteed."
  keywords="airport transfer packages, Indore taxi service deals, cab packages, airport cab offers, tour packages Indore"
  canonicalUrl={canonicalUrl}
/>
    <div>
      <div className="BookingHeading">
        <h2>Indore Airport Cab Booking</h2>
      </div>
      <div className="Tourheading">
        <h3 className="">Tour Destinations</h3>
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
    </div>
    </>
  );
}

export default Packages;
