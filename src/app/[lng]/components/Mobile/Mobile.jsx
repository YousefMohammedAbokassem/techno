"use client";
const isServer = typeof window === "undefined";
const lottie = !isServer ? require("react-lottie") : null;
const Lottie = lottie?.default;
import React, { useEffect, useState, useRef } from "react";
// import Lottie from "react-lottie";
import animationData from "./swip.json";
import Link from "next/link";
import { Image } from "@nextui-org/react";

import HeadSec from "../HeadSec/HeadSec";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { Pagination, Navigation, EffectCards, Autoplay } from "swiper/modules";

import { useTranslation } from "@/app/i18n/client";

export default function Mobile({ lng }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(null);
  const { t } = useTranslation(lng);
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const [popup, setPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/apps`
      );
      setData(res.data.apps);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const navigationOptions = {
    nextEl: ".swiper-button-next.mobileSwiper",
    prevEl: ".swiper-button-prev.mobileSwiper",
  };
  // console.log(data?.map((item) => console.log(item.id)));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      renderer: "svg",
    },
  };

  return (
    <div
      className={`mobile pt-12 relative  overflow-hidden container mx-auto  ${
        popup ? "z-[1000000000]" : ""
      }`}
      id="ui"
    >
      <HeadSec info={"uiUx"} lng={lng} />
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
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="fullSlider"
        >
          {/* ############################################# */}
          {loading ? (
            <div>
              <div className="info flex lg:flex-row flex-col items-center justify-around gap-6 lg:p-0 p-5">
                <div className="image h-[400px] lg:h-[450px] w-96 bg-[#66666730] animate-pulse"></div>
                <div className="flex flex-col items-center justify-between text-center gap-5 lg:gap-9 lg:w-1/2 w-full md:p-5 lg:p-0 p-3 mt-[80px] lg:mt-0">
                  <h2 className="text-3xl md:text-2xl font-semibold h-7 animate-pulse bg-[#66666730] w-1/2"></h2>

                  <p className="lg:text-2xl text-lg leading-8 h-5 animate-pulse bg-[#66666730] w-full"></p>
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
            </div>
          ) : (
            data?.map((item, i) => {
              return (
                <SwiperSlide className="w-full" key={i}>
                  <div className="info flex lg:flex-row flex-col items-center justify-around gap-6 lg:p-0 p-5">
                    <div className="image h-[400px] lg:h-[450px]">
                      <>
                        <Swiper
                          effect={"cards"}
                          grabCursor={true}
                          modules={[EffectCards, Autoplay]}
                          nested={true}
                          autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                          }}
                          className="mySwiperCards relative"
                          cardsEffect={{
                            slideShadows: false,
                          }}
                          onSlideChange={(swiper) =>
                            setActiveSlideIndex(swiper.activeIndex)
                          }
                        >
                          {item?.images?.map((image, j) => {
                            return (
                              <SwiperSlide key={j}>
                                <div className="anchorImageSkeleton">
                                  <Image
                                    width={450}
                                    height={450}
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${image.image_url}`}
                                    alt=""
                                  />
                                </div>
                              </SwiperSlide>
                            );
                          })}

                          {/* {typeof window != undefined ? <LottieSwip /> : ""} */}
                          {/* <LottieSwip /> */}
                          {!isServer ? (
                            activeSlideIndex === null ? (
                              <div
                                className={`lottieSwip ${
                                  lng === "ar" ? "rotateHand" : ""
                                }`}
                              >
                                <Lottie
                                  options={defaultOptions}
                                  isClickToPauseDisabled={true}
                                />
                              </div>
                            ) : (
                              ""
                            )
                          ) : (
                            ""
                          )}
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
            })
          )}

          {/* ############################################# */}
          <div className="  swiper-button-next mobileSwiper bg-white rounded-full w-[30px] h-[30px] top-1/2 toRight">
            <Image
              src="/Group-20.png"
              alt=""
              width={75}
              height={75}
              className="w-[95%] h-[95%] translate-x-[-16%]"
            />
          </div>
          <div className=" swiper-button-prev mobileSwiper bg-white rounded-full w-[30px] h-[30px] top-1/2  toLeft">
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
