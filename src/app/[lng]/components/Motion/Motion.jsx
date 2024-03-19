import React from "react";
import SwiperCompVideos from "../Swiper/SwiperCompVideos";
import HeadSec from "../HeadSec/HeadSec";
import axios from "axios";

// const images = [
//   {
//     image: "/2.png",
//   },
//   {
//     image: "/2.png",
//   },
//   {
//     image: "/2.png",
//   },
//   {
//     image: "/2.png",
//   },
//   {
//     image: "/2.png",
//   },
//   {
//     image: "/2.png",
//   },
//   {
//     image: "/2.png",
//   },
//   {
//     image: "/2.png",
//   },
//   {
//     image: "/2.png",
//   },
// ];
export default async function Motion() {
  const fetchData = await axios.get(
    `back.portfolio.technoplus.dev/api/user/videos`
  );
  // console.log(fetchData.data.designs);
  let images = fetchData.data.videos;
  return (
    <div
      className="py-12 relative z-10 overflow-hidden container mx-auto"
      id="motion"
    >
      <HeadSec info={"graphic"} />
      <SwiperCompVideos images={images} />
    </div>
  );
}
