import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/CarouselComponent.css"; 
import profileImage1 from "../assets/image1.webp";
import profileImage2 from "../assets/image2.webp";
import profileImage3 from "../assets/image3.webp";
import profileImage4 from "../assets/image4.webp";
import profileImage5 from "../assets/image5.webp";
import profileImage6 from "../assets/image6.webp";
import profileImage7 from "../assets/image7.webp";
import profileImage8 from "../assets/image8.webp";
import profileImage9 from "../assets/image9.webp";
import profileImage10 from "../assets/image10.webp";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div className="carousel-dots">
        <ul> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Schema review data
  const reviewSchema = [
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
  ];

  // Map profile images to author names
  const profileImageMap = {
    "Ovesh Khan": profileImage1,
    "Tushar Soni": profileImage2,
    "Vikram Wagh": profileImage3,
    "Nitin Dhakad": profileImage4,
    "Amit Sharma": profileImage5,
    "Rajesh Patel": profileImage6,
    "Priya Verma": profileImage7,
    "Meera Gupta": profileImage8,
    "Sunil Malhotra": profileImage9,
    "Saksham Jain": profileImage10,
    // Default image for other authors
    "default": profileImage1
  };

  // Get profile image based on author name
  const getProfileImage = (authorName) => {
    return profileImageMap[authorName] || profileImageMap.default;
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Know What Our Customers Say</h2>
      <div className="carousel-card">
        <Slider {...settings}>
          {reviewSchema.map((review, index) => (
            <div key={index} className="carousel-slide">
              <div className="carousel-inner-card">
                <div className="carousel-card-body">
                  <p className="carousel-feedback">{review.reviewBody}</p>
                  <div className="carousel-profile">
                    <img
                      src={getProfileImage(review.author.name)}
                      alt={review.author.name}
                      className="carousel-profile-img"
                    />
                    <div className="carousel-profile-info">
                      <h5 className="carousel-profile-name">
                        {review.author.name}
                      </h5>
                      <p className="carousel-profile-designation">
                        {review.reviewRating.ratingValue}/5 ★ • {formatDate(review.datePublished)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselComponent;
