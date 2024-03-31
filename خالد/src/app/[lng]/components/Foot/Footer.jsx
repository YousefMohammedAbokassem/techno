import React from "react";
import Image from "next/image";
import { useTranslation } from "@/app/i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
export default async function Footer({ lng }) {
  const { t } = await useTranslation(lng);
  const year = new Date();
  return (
    <footer className="pb-12 pt-24  md:pt-12 flex justify-center gap-5 items-center h-[70px] flex-col md:flex-row">
      <Image
        width={125}
        height={25}
        src="/logoSmall.png"
        alt=""
        className="w-[90px] md:w-[120px] h-8 md:h-10 lg:w-auto"
      />
      <div className="info capitalize text-[13px] lg:text-base">
        <sup>©</sup>
        {year.getFullYear()}{" "}
        <span className="text-[#00BBFF] capitalize">Techno Plus </span>
        {t("copyRights")}
      </div>
      <div
        className="links sm:flex-row flex-col flex items-center justify-between gap-3 text-[13px] lg:text-base"
        dir="ltr"
      >
        <a
          href="https://wa.me/963993454955"
          className="flex items-center justify-start w-full sm:justify-center gap-2"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
          <span className="text-start">+963&nbsp;993&nbsp;454&nbsp;955</span>
        </a>
        <a
          href="https://technoplus.dev/"
          target="_blank"
          className="flex items-center justify-start w-full sm:justify-center gap-2"
        >
          <FontAwesomeIcon icon={faGlobe} />
          <span className="text-start">technoplus.dev</span>
        </a>
      </div>
      <div className="flex justify-center items-center gap-4">
        <a
          href="https://www.facebook.com/technoplus.dev?mibextid=ZbWKwL"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebookF} style={{ color: "#ffffff" }} />
        </a>
        <a
          href="https://www.instagram.com/technoplus.dev?igsh=ZWh3MGlxZGFtbWE="
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/company/technopluss/" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
    </footer>
  );
}
