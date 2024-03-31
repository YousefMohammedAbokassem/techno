import React from "react";
import SwiperComp from "../Swiper/SwiperSlider";
import HeadSec from "../HeadSec/HeadSec";

export default async function Social({ lng }) {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/user/socialMedia`,
  //   {
  //     cache: "no-store",
  //   }
  // );
  // const fetchData = await response.json();
  // let images = fetchData?.designs;
  return (
    <div
      className="pt-12 relative z-10 overflow-hidden container mx-auto"
      id="media"
    >
      <HeadSec info={"social"} lng={lng} />
      <SwiperComp  />
    </div>
  );
}
