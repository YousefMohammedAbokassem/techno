"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "@/app/i18n/client";
import { languages } from "@/app/i18n/settings";

function Lan({ lng }) {
  const { t } = useTranslation(lng);
  const pathname = usePathname();
  function name() {
    let pathname2 = pathname.slice("1");
    // ar/asdas
    let pathname3 =
      pathname.slice("1").indexOf("/") >= 0
        ? pathname2.slice(pathname2.indexOf("/"))
        : "";
    return pathname3;
  }
  // setPath(pathname3);
  // show languages Lists
  const showLanguage = () => {
    let languages = document.querySelector(".languages");
    // setBool(!bool);
    languages.classList.toggle("active");
  };
  // set to local storage
  const set = (e) => {
    localStorage.setItem("i18nextLng", e);
    showLanguage();
  };
  return (
    <>
      <div className="lan z-10 flex items-center justify-center cursor-pointer text-white relative">
        {/* {lng === "en" ? "" : ""} */}
        <Image
          src={lng === "en" ? "/amirca.png" : "/syria.png"}
          width={40}
          height={35}
          alt="languages"
          onClick={showLanguage}
          className="w-[35px] h-[25px]"
        />
        {/* <FontAwesomeIcon
          icon={faEarthAmericas}
          className="lanIcon text-2xl"
          /> */}
        <ul
          className={`languages absolute mb-0 ${
            lng === "en" ? "w-[100px]" : "w-[120px]"
          }`}
        >
          {languages.map((l, index) => {
            return (
              <li key={l} className={`text-center px-1 py-1 font-bold`}>
                <Link
                  href={`/${l}${name()}`}
                  onClick={() => set(l)}
                  className=" text-white pointer liLan text-center block w-full"
                >
                  {/* ????????? */}
                  <div className="flex gap-2">
                    <Image
                      src={l === "en" ? "/amirca.png" : "/syria.png"}
                      width={25}
                      height={25}
                      alt="languages"
                    />
                    <span>{t(l)}</span>
                  </div>
                  {/* {t(l)} */}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default memo(Lan);
