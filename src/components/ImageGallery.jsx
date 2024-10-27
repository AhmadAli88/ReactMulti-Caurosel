import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';

// Image Gallery with Thumbnails
const ImageGallery = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      }
    };
  
    const images = [
      {
        id: 1,
        full: "full1.jpg",
        thumb: "thumb1.jpg"
      },
      // ... more images
    ];
  
    return (
      <div className="gallery-container">
        <div className="main-image">
          <img 
            src={images[selectedImageIndex].full}
            alt={`Gallery image ${selectedImageIndex + 1}`}
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
              className={`thumbnail ${selectedImageIndex === index ? 'active' : ''}`}
            >
              <img src={image.thumb} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
    );
  };

export default ImageGallery