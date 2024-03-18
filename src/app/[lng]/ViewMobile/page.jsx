import React from "react";
import SwiperComp from "../components/Swiper/SwiperSlider";
import axios from "axios";
const images = [
  {
    image: "/screenshot3.png",
  },
  {
    image: "/screenshot5.png",
  },
  {
    image: "/screenshot1.png",
  },
  {
    image: "/screenshot6.png",
  },
  {
    image: "/screenshot3.png",
  },
];
export default async function Motion() {
  const fetchData = await axios.get(`${process.env.NEXTAUTH_URL}/user/videos`);
  // console.log(fetchData.data.designs);
  let images = fetchData.data.designs;
  return (
    <div className="py-12 relative z-10 overflow-hidden mx-8 swiperMobile">
      <SwiperComp images={images} />
    </div>
  );
}
