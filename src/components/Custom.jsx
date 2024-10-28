import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// Testimonial Carousel with Custom Arrows
const CustomTestimonialCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button onClick={() => onClick()} className="custom-arrow right">
        →
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button onClick={() => onClick()} className="custom-arrow left">
        ←
      </button>
    );
  };

  const testimonials = [
    {
      id: 1,
      text: "Great product!",
      author: "John Doe",
      role: "CEO",
    },
    {
      id: 2,
      text: "Amazing service!",
      author: "Jane Smith",
      role: "Manager",
    },
    {
      id: 3,
      text: "Highly recommend!",
      author: "Alice Johnson",
      role: "Designer",
    },
    // Add more testimonials with unique IDs if needed
  ];

  console.log("Testimonials:", testimonials);

  return (
    <div
      style={{
        width: "300px",
        background: "red",
        height: "300px",
        color: 'yellow'
      }}
    >
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
    </div>
  );
};

export default CustomTestimonialCarousel;
