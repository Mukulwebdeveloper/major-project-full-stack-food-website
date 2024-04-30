import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useSelector } from "react-redux";
// import './styles.css';
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../assets/css/swiperStyles.css";
import { SliderCard } from "../components";

const Slider = () => {
  const products = useSelector((state) => state.products);
  // console.log(products);
  const [fruits, setFruits] = useState(null);
  // console.log(fruits);

  // useEffect(() => {
  //   setFruits(products?.filter((data) => data.product_category === "fruits"));
  //   console.log(fruits);
  // }, [products]);

  return (
    <div className="w-full pt-24">
      {/* <Swiper
        navigation={true}
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={30}
        grabCursor={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {fruits &&
          fruits.map((data, i) => (
            <SwiperSlide key={i}>
              <SliderCard key={i} data={data} index={i} />
            </SwiperSlide>
          ))}
      </Swiper> */}
    </div>
  );
};

export default Slider;
