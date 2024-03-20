"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import HeadSec from "../HeadSec/HeadSec";
// Import Swiper React components
import SwiperComp from "../../components/Swiper/SwiperSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { Pagination, Navigation, EffectCards } from "swiper/modules";
import LottieSwip from "./LottieSwip";
import { useTranslation } from "@/app/i18n/client";

export default function Mobile({ lng }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(null);
  const { t } = useTranslation(lng);
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const [popup, setPopup] = useState(false);
  const fetchData = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/apps`);
    setData(res.data.apps);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const navigationOptions = {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  };
  // console.log(data?.map((item) => console.log(item.id)));
  return (
    <div
      className={`mobile py-12 relative  overflow-hidden container mx-auto  ${
        popup ? "z-[1000000000]" : ""
      }`}
      id="ui"
    >
      <HeadSec info={"uiUx"} />
      <div className="m-[25px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          navigation={navigationOptions}
          modules={[Pagination, Navigation]}
          className="fullSlider"
        >
          {data?.map((item) => {
            return (
              <SwiperSlide className="w-full" key={item.id}>
                <div className="info flex lg:flex-row flex-col items-center justify-around gap-6 lg:p-0 p-5">
                  <div className="image h-[400px] lg:h-[450px]">
                    <>
                      <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiperCards relative"
                        cardsEffect={{
                          slideShadows: false,
                        }}
                        onSlideChange={(swiper) =>
                          setActiveSlideIndex(swiper.activeIndex)
                        }
                      >
                        {activeSlideIndex === null ? <LottieSwip /> : ""}
                        {item?.images?.map((image) => {
                          return (
                            <SwiperSlide key={image.id}>
                              {image.image_url === undefined ? (
                                ""
                              ) : (
                                <Image
                                  width={450}
                                  height={450}
                                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${image.image_url}`}
                                  alt=""
                                />
                              )}
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </>
                  </div>
                  <div className="flex flex-col items-center justify-between text-center gap-5 lg:gap-9 lg:w-1/2 w-full md:p-5 lg:p-0 p-3 mt-[80px] lg:mt-0">
                    <h2 className="text-3xl md:text-2xl font-semibold">
                      {item.name}
                    </h2>

                    <p className="lg:text-2xl text-lg leading-8">
                      {item.description}
                    </p>
                    {/* <Link href="ViewMobile"> */}
                    {/* <button
                    type="button"
                    className="text-[#0090FF] bg-white px-3 py-1 cursor-pointer rounded-full font-semibold"
                    onClick={() => {
                      setImages(item.images);
                      setPopup(true);
                      document.body.style.overflow = "hidden";
                      window.scrollTo({
                        left: 0,
                        top: 0,
                        // behavior: "smooth",
                      });
                    }}
                  >
                    {t("view")}
                  </button> */}
                    {/* </Link> */}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="swiper-button-next bg-white rounded-full w-[30px] h-[30px] top-1/2 toRight">
            <Image
              src="/Group-20.png"
              alt=""
              width={75}
              height={75}
              className="w-[95%] h-[95%] translate-x-[-16%]"
            />
          </div>
          <div className="swiper-button-prev bg-white rounded-full w-[30px] h-[30px] top-1/2  toLeft">
            <Image
              src="/Group-13.png"
              alt=""
              width={75}
              height={75}
              className="w-[95%] h-[95%] translate-x-[16%]"
            />
          </div>
        </Swiper>
        {/* {popup && (
        <div className="z-10 overflow-hidden swiperMobile fixed left-0 top-0 h-screen w-full">
          <div className="relative container mx-auto">
            <SwiperComp images={images} />
            <span
              className="absolute right-1 bottom-4 -translate-x-full bg-white z-[10000000] px-3 py-2 rounded-md cursor-pointer select-none text-black"
              onClick={() => setPopup(false)}
            >
              {t("back")}
            </span>
          </div>
        </div>
      )} */}
      </div>
    </div>
  );
}