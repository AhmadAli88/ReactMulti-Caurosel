// Basic Product Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IMAGES } from "../assets";
const ProductCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
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

    // ... more products
  ];

  return (
    <div
      style={{
        width: "600px",
        background: "red",
        height: "300px",
      }}
    >
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
      >
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              style={{ height: "200px", width: "200px" }}
            />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default ProductCarousel;
