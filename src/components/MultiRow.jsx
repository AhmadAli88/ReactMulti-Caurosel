import React from "react";
import { IMAGES } from "../assets"; // Ensure IMAGES is correctly imported
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// Multi-row Product Carousel
const MultiRowCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      rows: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      rows: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      rows: 1,
    },
  };

  const products = [
    {
      id: 1,
      name: "Product 1",
      image: IMAGES.PRODUCT1,
      price: "$99",
    },
    {
      id: 2,
      name: "Product 2",
      image: IMAGES.PRODUCT2,
      price: "$99",
    },
    {
      id: 3,
      name: "Product 3",
      image: IMAGES.PRODUCT3,
      price: "$99",
    },
    {
      id: 4,
      name: "Product 4",
      image: IMAGES.PRODUCT4,
      price: "$99",
    },
    {
      id: 5,
      name: "Product 5",
      image: IMAGES.PRODUCT5,
      price: "$99",
    },
    {
      id: 6,
      name: "Product 6",
      image: IMAGES.PRODUCT6,
      price: "$99",
    },
    {
      id: 7,
      name: "Product 7",
      image: IMAGES.PRODUCT7,
      price: "$99",
    },
    
    // ... more products
  ];

  return (
    <div
      style={{
        width: "700px",
        background: "red",
        color: "yellow",
      }}
    >
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
            //   style={{
            //     width: "100%", // Set to fill the container
            //     height: "auto", // Maintain aspect ratio
            //     maxHeight: "300px", // Limit height
            //     objectFit: "cover", // Crop to fit
            //   }}
            />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MultiRowCarousel;
