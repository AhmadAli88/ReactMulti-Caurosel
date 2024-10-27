import React from 'react'
import Carousel from 'react-multi-carousel';

// Testimonial Carousel with Custom Arrows
const CustomTestimonial = () => {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    const CustomRightArrow = ({ onClick }) => {
      return (
        <button
          onClick={() => onClick()}
          className="custom-arrow right"
        >
          →
        </button>
      );
    };
  
    const CustomLeftArrow = ({ onClick }) => {
      return (
        <button
          onClick={() => onClick()}
          className="custom-arrow left"
        >
          ←
        </button>
      );
    };
  
    const testimonials = [
      {
        id: 1,
        text: "Great product!",
        author: "John Doe",
        role: "CEO"
      },
      // ... more testimonials
    ];
  
    return (
      <Carousel
        responsive={responsive}
        infinite={true}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        showDots={false}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p>{testimonial.text}</p>
            <h4>{testimonial.author}</h4>
            <span>{testimonial.role}</span>
          </div>
        ))}
      </Carousel>
    );
  };

export default CustomTestimonial