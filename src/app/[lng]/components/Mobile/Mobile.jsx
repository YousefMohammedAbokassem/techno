"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import HeadSec from "../HeadSec/HeadSec";
import { useTranslation } from "@/app/i18n/client";
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

export default function Mobile({ lng }) {
  const { t } = useTranslation(lng);
  const [data, setData] = useState([
    {
      name: "taha",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum unde voluptatem in sed facere laudantium deleniti assumenda fuga id nulla",
      main_image: "/motion-graphic-01.png",
    },
  ]);
  const [images, setImages] = useState([]);
  const [popup, setPopup] = useState(false);
  const fetchData = async () => {
    const res = await axios.get(`http://192.168.155.4:8002/api/user/apps`);
    setData(res.data.apps);
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(data?.map((item) => console.log(item.id)));
  return (
    <div
      className={`mobile py-12 relative  overflow-hidden container mx-auto  ${
        popup ? "z-[1000000000]" : ""
      }`}
      id="ui"
    >
      <HeadSec info={"uiUx"} />
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="fullSlider"
      >
        {data?.map((item) => {
          return (
            <SwiperSlide className="w-full" key={item.id}>
              <div className="info flex lg:flex-row flex-col items-center justify-around gap-6 lg:p-0 p-5">
                <div className="image h-[350px] lg:h-[450px]">
                  {item.main_image === undefined ? (
                    ""
                  ) : (
                    //#########################################
                    // <img
                    //   // src={`http://192.168.155.4:8002${item.main_image}`}
                    //   src={`${item.main_image}`}
                    //   className="w-full h-full"
                    //   width={450}
                    //   height={450}
                    //   alt="no image"
                    // />
                    <>
                      <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiperCards"
                        cardsEffect={{
                          slideShadows: false,
                        }}
                      >
                        <SwiperSlide>
                          <Image
                            width={450}
                            height={450}
                            src={`http://192.168.155.4:8002${item.main_image}`}
                            alt=""
                          />
                        </SwiperSlide>
                      </Swiper>
                    </>
                  )}
                </div>
                <div className="flex flex-col items-center justify-between text-center gap-5 lg:gap-9 lg:w-1/2 w-full md:p-5 lg:p-0 p-3">
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
      </Swiper>
      {popup && (
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
      )}
    </div>
  );
}
