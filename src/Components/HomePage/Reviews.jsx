import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto my-32">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}>
        {reviews?.map((oneReview) => (
          <SwiperSlide key={oneReview.id}>
            <div className="w-[365px] border p-12 rounded-sm m-auto">
              <div className="flex justify-center items-center m-auto mb-[31px] p-3">
                <img
                  src={oneReview.shop_image}
                  className="h-[64px] w-[64px] bg-black rounded-full me-[13px]"
                />
                <div>
                  <h3 className="font-semibold text-[16px]">
                    {oneReview.shop_name}
                  </h3>
                  <p>Rating: {oneReview.rating}</p>
                </div>
              </div>
              <div className="text-center p-3">
                <p>{oneReview.review}</p>
                <button className="btn-link">See Full Review</button>
              </div>
              <hr></hr>
              <div className="flex justify-center items-center m-auto mt-[12px] p-3">
                <img
                  src={oneReview.user_image}
                  className="h-[64px] w-[64px] bg-black rounded-full me-[13px]"
                />
                <div className="">
                  <p>reviewed By</p>
                  <p className="font-semibold text-[20px]">
                    {oneReview.user_name}
                  </p>
                  <p>{oneReview.review_date}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
