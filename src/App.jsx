import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "react-multi-carousel/lib/styles.css";
import CardCarousel from './components/CardCarousel ';
import CustomTestimonial from './components/CustomTestimonial';
import ImageGallery from './components/ImageGallery';
import MultiRowCarousel from './components/Multi-row';
import ProductCarousel from './components/ProductSlider';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CardCarousel/>
     {/* <CustomTestimonial/>
     <ImageGallery/>
     <MultiRowCarousel/>
     <ProductCarousel/> */}
    </>
  )
}

export default App
