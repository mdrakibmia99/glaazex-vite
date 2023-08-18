import { useState, useEffect } from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    'https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg',
    'https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg',
    'https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg'];

  // const showSlide = (index) => {
  //   setCurrentSlide(index);
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="slider-container  transition-all  mx-auto h-3/4">
      <Swiper
        slidesPerview={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} >
          <img
            className={`slider-image  transition-all h-auto w-full ${currentSlide === index ? 'active' : ''}`}
            src={image}
            alt={`Image ${index + 1}`}
          />
          </SwiperSlide>
        ))}

      </Swiper>







      {/* <div className="slider-navigation flex justify-center mt-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => showSlide(index)}
            className={`${
              currentSlide === index ? 'active' : ''
            } focus:outline-none`}
          >
            <img src={image} className='w-[60px] h-[50px]' alt={`Image ${index + 1}`} />
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default Slider;
