import React from "react";
import SwiperComp from "../Swiper/SwiperSlider";
import HeadSec from "../HeadSec/HeadSec";
import axios from "axios";
// const images = [
//   {
//     image: "/1.png",
//   },
//   {
//     image: "/1.png",
//   },
//   {
//     image: "/1.png",
//   },
//   {
//     image: "/1.png",
//   },
//   {
//     image: "/1.png",
//   },
//   {
//     image: "/1.png",
//   },
//   {
//     image: "/1.png",
//   },
//   {
//     image: "/1.png",
//   },
//   {
//     image: "/1.png",
//   },
// ];
export default async function Social() {
   process.env.NEXTAUTH_URL
  const fetchData = await axios.get(
    `http://192.168.155.4:8002/api/user/socialMedia`
  );
  // console.log(fetchData.data);
  let images = fetchData.data.designs;
  return (
    <div
      className="py-12 relative z-10 overflow-hidden container mx-auto"
      id="media"
    >
      <HeadSec info={"social"} />
      <SwiperComp images={images} />
    </div>
  );
}
