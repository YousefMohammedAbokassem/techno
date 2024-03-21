import React from "react";
import SwiperCompVideos from "../Swiper/SwiperCompVideos";
import HeadSec from "../HeadSec/HeadSec";
import axios from "axios";
export default async function Motion({ lng }) {
  const fetchData = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/videos`,
    {
      cache: "no-store",
    }
  );
  // console.log(fetchData.data.designs);
  let images = fetchData.data.videos;
  return (
    <div
      className="py-12 relative z-10 overflow-hidden container mx-auto"
      id="motion"
    >
      <HeadSec info={"graphic"} lng={lng} />
      <SwiperCompVideos images={images} />
    </div>
  );
}
