import React, { useRef } from 'react'
import Carousel from 'react-multi-carousel';

// Card Carousel with Custom Buttons and Fade Effect
const CardCarousel = () => {
    const carouselRef = useRef(null);
  
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      }
    };
  
    const cards = [
      {
        id: 1,
        title: "Card 1",
        content: "Content 1"
      },
      // ... more cards
    ];
  
    const CustomDot = ({ onClick, active }) => {
      return (
        <button
          className={`custom-dot ${active ? 'active' : ''}`}
          onClick={() => onClick()}
        />
      );
    };
  
    return (
      <div className="carousel-container">
        <button 
          onClick={() => carouselRef.current.previous()}
          className="nav-button prev"
        >
          Previous
        </button>
  
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
            <div key={card.id} className="card">
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </Carousel>
  
        <button 
          onClick={() => carouselRef.current.next()}
          className="nav-button next"
        >
          Next
        </button>
      </div>
    );
  };

export default CardCarousel 