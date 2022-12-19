import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import CategoryItem from "./CategoryItem";

export default function App() {
  return (
    <>
      <div className="container-sm md:container">
        <Swiper
          spaceBetween={30}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper m-0 p-0 w-full"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is >= 640px
            320: {
              width: 320,
              slidesPerView: 2,
            },
            640: {
              width: 640,
              slidesPerView: 3,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
            980: {
              width: 980,
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <CategoryItem />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
