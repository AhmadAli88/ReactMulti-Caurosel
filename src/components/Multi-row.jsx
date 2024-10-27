import React from 'react'
import Carousel from 'react-multi-carousel';

// Multi-row Product Carousel
const MultiRowCarousel = () => {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        rows: 2
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        rows: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        rows: 1
      }
    };
  
    const products = [
      {
        id: 1,
        name: "Product 1",
        image: "product1.jpg",
        price: "$99"
      },
      // ... more products
    ];
  
    return (
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </Carousel>
    );
  };

export default MultiRowCarousel