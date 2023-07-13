// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import mobile from '../../assets/Footer-img/image-4.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './style.css'

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
// import { CircleGrid } from "react-awesome-shapes/dist/shapes/circlegrid";
const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="bg-[#ED6620]">
        <SwiperSlide className="">
          <div className="lg:max-w-screen-2xl px-8 2xl:px-0 mx-auto flex flex-wrap md:flex-nowrap md:justify-between items-center">
            <div className="space-y-3 py-24">
              <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold text-white">
                Buy and Sell
              </h2>
              <p className="text-slate-200 text-sm lg:text-lg">
                Receive the product as described or get a refund
              </p>
              <p className="text-slate-200 text-sm lg:text-lg">
                Posting for sale is completely free
              </p>
              <button className="px-6 py-3 hover:bg-[#ED6620] hover:text-white hover:border-white border-2 border-[#ED6620] duration-500 bg-white text-[#ED6620] rounded-sm">
                Read more
              </button>
            </div>
            <div className="hidden md:block">
              <img src={mobile} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="lg:max-w-screen-2xl px-8 2xl:px-0 mx-auto flex flex-wrap md:flex-nowrap md:justify-between items-center">
            <div className="space-y-3 py-24">
              <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold text-white">
                Buy and Sell
              </h2>
              <p className="text-slate-200 text-sm lg:text-lg">
                Receive the product as described or get a refund
              </p>
              <p className="text-slate-200 text-sm lg:text-lg">
                Posting for sale is completely free
              </p>
              <button className="px-6 py-3 hover:bg-[#ED6620] hover:text-white hover:border-white border-2 border-[#ED6620] duration-500 bg-white text-[#ED6620] rounded-sm">
                Read more
              </button>
            </div>
            <div className="hidden md:block">
              <img src={mobile} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
