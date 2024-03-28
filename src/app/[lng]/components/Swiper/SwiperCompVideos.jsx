"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
// import { Navigation } from "swiper/modules";
export default function App() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/videos`
      );
      setVideos(res.data.videos);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const navigationOptions = {
    nextEl: ".swiper-button-next.videoSwiper",
    prevEl: ".swiper-button-prev.videoSwiper",
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
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        loop={true}
        modules={[EffectCoverflow, Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        {loading ? (
          <SwiperSlide>
            <div
              role="status"
              className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center h-full"
            >
              <div className="flex items-center justify-center w-full h-full bg-[#ffffff08] rounded">
                <svg
                  className="w-10 h-10 text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>

              <span className="sr-only">Loading...</span>
            </div>
          </SwiperSlide>
        ) : (
          videos?.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                {item.video_image === undefined ? (
                  ""
                ) : (
                  <a
                    href={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.video_url}`}
                    className=" cursor-grab anchorImageSkeleton"
                    target="_blank"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.video_image}`}
                      // src={`/1.png`}
                      width={450}
                      height={450}
                      alt="no image"
                    />
                    <Image
                      src={`/polygon.png`}
                      // src={`/1.png`}
                      width={100}
                      height={100}
                      alt="no image"
                      className="videoIcon absolute left-1/2 top-1/2"
                    />
                  </a>
                )}
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
      <div className="swiper-button-next videoSwiper bg-white rounded-full w-[30px] h-[30px] top-1/2  ">
        <Image
          src="/Group-20.png"
          alt=""
          width={75}
          height={75}
          className="w-[95%] h-[95%] translate-x-[-16%]"
        />
      </div>
      <div className="swiper-button-prev videoSwiper bg-white rounded-full w-[30px] h-[30px] top-1/2  ">
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
