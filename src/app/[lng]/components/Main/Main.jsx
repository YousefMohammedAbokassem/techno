"use client";
import React from "react";
import Lottie from "react-lottie";
import animationData from "./Logo.json";
import { useTranslation } from "@/app/i18n/client";

const Main = ({ lng }) => {
  const { t } = useTranslation(lng);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      renderer: "svg",
    },
  };
  if (typeof window != undefined) {
    // الكود الذي يستخدم كائن document يمكن وضعه هنا
    return (
      <div className="mx-auto flex flex-col items-center justify-center relative left-[50%] top-6 -translate-x-1/2 w-full">
        <div
          className="w-[74%] sm:w-[300px] md:w-[350px] lg:w-[400px] relative h-[200px]"
          style={
            {
              // width: "100%",
              // height: "200px",
              // bottom: "200px",
              // position: "relative",
            }
          }
        >
          <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
        </div>
        <div className="capitalize text-xl md:text-2xl lg:text-3xl font-semibold relative text-center top-[-20px]">
          {t("enhance")}
          <br />
          <span className="text-[#00BBFF] mt-2 block">{t("digital")}</span>
        </div>
      </div>
    );
  }
};

export default Main;
