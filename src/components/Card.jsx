import React, { useRef } from "react";
import { IMAGES } from "../assets"; // Ensure IMAGES is correctly imported
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Card Carousel with Custom Buttons and Fade Effect
const CardCarousel = () => {
  const carouselRef = useRef(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
  };

  const cards = [
    {
      id: 1,
      title: "Card 1",
      content: "Content 1",
      image: IMAGES.PRODUCT1,
    },
    {
      id: 2,
      title: "Card 2",
      content: "Content 2",
      image: IMAGES.PRODUCT7,
    },
    {
      id: 3,
      title: "Card 3",
      content: "Content 3",
      image: IMAGES.PRODUCT4,
    },
    {
      id: 4,
      title: "Card 4",
      content: "Content 4",
      image: IMAGES.PRODUCT6,
    },
    // ... more cards
  ];

  const CustomDot = ({ onClick, active }) => {
    return (
      <button
        className={`custom-dot ${active ? "active" : ""}`}
        onClick={() => onClick()}
      />
    );
  };

  return (
    <div
      className="carousel-container"
      style={{
        width: "600px",
        background: "red",
        height: "auto",
        color: "yellow",
      }}
    >
      {/* <button
        onClick={() => carouselRef.current.previous()}
        className="nav-button prev"
      >
        Previous
      </button> */}

      <Carousel
        ref={carouselRef}
        responsive={responsive}
        infinite={true}
        customDot={<CustomDot />}
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {cards.map((card) => (
          <div key={card.id} className="card" style={{ textAlign: "center" }}>
            <img
              src={card.image}
              alt={card.title}
              style={{
                width: "100%", // Make image fill the card width
                height: "200px", // Fixed height for uniformity
                objectFit: "cover", // Crop image to fill the box
              }}
            />
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </Carousel>

      {/* <button
        onClick={() => carouselRef.current.next()}
        className="nav-button next"
      >
        Next
      </button> */}
    </div>
  );
};

export default CardCarousel;
