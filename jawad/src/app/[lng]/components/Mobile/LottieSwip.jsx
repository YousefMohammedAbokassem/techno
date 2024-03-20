"use client";
import React from "react";
import Lottie from "react-lottie";
import animationData from "./swip.json";
import { useTranslation } from "@/app/i18n/client";

const LottieSwip = ({ lng }) => {
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
  if (typeof window !== "undefined") {
    // الكود الذي يستخدم كائن document يمكن وضعه هنا
    return (
      <div className="lottieSwip">
        <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
      </div>
    );
  }
};

export default LottieSwip;
