import React from "react";
import Image from "next/image";
import { useTranslation } from "@/app/i18n";
const Product = async({ info, image ,lng}) => {
  const {t}= await useTranslation(lng)
  return (
    <div className="flex flex-col items-center justify-center px-3 py-7 servicesSection h-full">
      <div className="image ">
        <Image src={image} width={250} height={250} alt="no image" />
      </div>
      <div className="info text-center text-base md:text-lg lg:text-xl ">{t(info)}</div>
    </div>
  );
};

export default Product;
