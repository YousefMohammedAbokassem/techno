import React from "react";
import SwiperCompVideos from "../Swiper/SwiperCompVideos";
import HeadSec from "../HeadSec/HeadSec";
import axios from "axios";
export default async function Motion({ lng }) {
  return (
    <div
      className="pt-12 relative z-10 overflow-hidden container mx-auto"
      id="motion"
    >
      <HeadSec info={"graphic"} lng={lng} />
      <SwiperCompVideos />
    </div>
  );
}
