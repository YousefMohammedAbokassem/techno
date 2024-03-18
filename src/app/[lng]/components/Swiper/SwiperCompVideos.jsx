"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
export default function App({ images }) {
    const navigationOptions = {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    };
  return (
    <div className="m-[25px] swiperChildParent relative">
      <Swiper
        effect={"coverflow"}
        navigation={navigationOptions}
        // navigation={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={75}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        loop={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {images?.map((item, i) => {
          return (
            <SwiperSlide key={item.id}>
              {item.video_image === undefined ? (
                ""
              ) : (
                <Image
                  src={`http://192.168.155.4:8002${item.video_image}`}
                  // src={`/1.png`}
                  width={450}
                  height={450}
                  alt="no image"
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="swiper-button-next bg-white rounded-full w-[50px] h-[50px] top-1/2  ">
        <Image
          src="/Group-20.png"
          alt=""
          width={75}
          height={75}
          className="w-[95%] h-[95%] translate-x-[-16%]"
        />
      </div>
      <div className="swiper-button-prev bg-white rounded-full w-[50px] h-[50px] top-1/2  ">
        <Image
          src="/Group-13.png"
          alt=""
          width={75}
          height={75}
          className="w-[95%] h-[95%] translate-x-[16%]"
        />
      </div>
    </div>
  );
}
