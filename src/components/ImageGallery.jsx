import React, { useState } from "react";
import { IMAGES } from "../assets"; // Ensure IMAGES is correctly imported
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Image Gallery with Thumbnails
const ImageGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
  };

  const images = [
    {
      id: 1,
      full: IMAGES.PRODUCT1,
      thumb: IMAGES.PRODUCT1,
    },
    {
      id: 2,
      full: IMAGES.PRODUCT2,
      thumb: IMAGES.PRODUCT2,
    },
    {
      id: 3,
      full: IMAGES.PRODUCT3,
      thumb: IMAGES.PRODUCT3,
    },
    {
      id: 4,
      full: IMAGES.PRODUCT1,
      thumb: IMAGES.PRODUCT1,
    },
    {
      id: 5,
      full: IMAGES.PRODUCT2,
      thumb: IMAGES.PRODUCT2,
    },
    {
        id: 6,
        full: IMAGES.PRODUCT3,
        thumb: IMAGES.PRODUCT3,
      },
      {
        id: 7,
        full: IMAGES.PRODUCT1,
        thumb: IMAGES.PRODUCT1,
      },
    // ... more images
  ];

  return (
    <div
      style={{
        width: "700px",
        background: "red",
        color: "yellow",
      }}
    >
      <div className="main-image">
        <img
          src={images[selectedImageIndex].full}
          alt={`Gallery image ${selectedImageIndex + 1}`}
          style={{
            width: "100%", // Set to fill the container
            height: "auto", // Maintain aspect ratio
            maxHeight: "300px", // Limit height
            objectFit: "cover", // Crop to fit
          }}
        />
      </div>

      <Carousel
        responsive={responsive}
        arrows={true}
        centerMode={true}
        focusOnSelect={true}
        onChange={(index) => setSelectedImageIndex(index)}
      >
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`thumbnail ${
              selectedImageIndex === index ? "active" : ""
            }`}
          >
            <img
              src={image.thumb}
              alt={`Thumbnail ${index + 1}`}
              style={{
                width: "100px", // Set thumbnail width
                height: "100px", // Set thumbnail height
                objectFit: "cover", // Crop to fit
                margin: "5px", // Add spacing
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageGallery;
