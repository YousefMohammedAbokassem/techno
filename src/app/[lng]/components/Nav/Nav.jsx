"use client";
import { useTranslation } from "@/app/i18n/client";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Nav({ lng }) {
  const { t } = useTranslation(lng);
  const [opacity, setOpacity] = useState(true);
  const tapWidth = (e) => {
    const ul = document.querySelector(".myUl"),
      tap = ul.querySelector(".tap"),
      lis = ul.querySelectorAll("li");
    let firstLiW = e.currentTarget.offsetWidth,
      firstLiH = e.currentTarget.offsetHeight,
      leftLi = e.currentTarget.offsetLeft,
      topLi = e.currentTarget.offsetTop;
    // remove all active class\
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    tap.style.setProperty("--x", `${leftLi}px`);
    tap.style.setProperty("--y", `${topLi}px`);
    tap.style.setProperty("--w", `${firstLiW}px`);
    tap.style.setProperty("--h", `${firstLiH}px`);
    // close side bar
    // showSideBar();
    console.log("object");
  };
  const starter = () => {
    const ul = document.querySelector(".myUl"),
      tap = ul.querySelector(".tap"),
      li = ul.querySelector("li.active") || ul.querySelector("li");

    let firstLiW = li.offsetWidth;
    let firstLiH = li.offsetHeight;
    let leftLi = li.offsetLeft;
    let topLi = li.offsetTop;
    // let firstLiH = li.offsetHeight;
    // tap.style.cssText = `width:${firstLiW}px; height:${firstLiH}px;`;
    tap.style.setProperty("--x", `${leftLi}px`);
    tap.style.setProperty("--y", `${topLi}px`);
    tap.style.setProperty("--w", `${firstLiW}px`);
    tap.style.setProperty("--h", `${firstLiH}px`);
    tap.style.backgroundColor = li.dataset.color;
  };
  const closeNav = () => {
    setOpacity((prev) => !prev);
  };
  useEffect(() => {
    window.onresize = () => {
      starter();

      // tap.style.cssText = `width:${firstLiW}px; height:${firstLiH}px;`;
    };
    starter();
    setTimeout(() => {
      const li = document.querySelector("li.active");
      li.click();
    }, 0);
  }, []);
  //lng
  return (
    <nav className="nav flex items-center justify-between py-5 px-8  container mx-auto ">
      <div className="logo h-full flex items-center justify-center">
        <Image src="/logoSmall.png" width={150} height={50} alt="logo" className="w-[80px] h-[30px] md:w-[150px] md:h-[40px]" />
      </div>
      <div
        className={`flex justify-center items-center z-50 ulParent backdrop-blur-lg transition ${
          opacity ? "opacity-0 pointer-events-none" : "opacity-100"
        } lg:opacity-100 lg:pointer-events-auto`}
      >
        <ul
          className={`myUl list-none flex justify-center items-center gap-10 lg:gap-6 lg:flex-row flex-col `}
        >
          <span className="block lg:hidden">
            <FontAwesomeIcon
              icon={faClose}
              className={`cursor-pointer text-3xl block lg:hidden top-3 ${
                lng === "ar" ? "left-4" : "right-4"
              } absolute`}
              onClick={closeNav}
              size="2x"
            />
          </span>

          <div className="tap z-10"></div>
          <li
            className="active"
            onClick={(e) => {
              tapWidth(e);
              setOpacity((prev) => !prev);
              // signIn();
            }}
          >
            <a
              href="#"
              className=" text-base  capitalize py-2 px-4 hover:text-[#00BBFF]  block h-full capita"
            >
              {t("home")}
            </a>
          </li>
          <li
            onClick={(e) => {
              tapWidth(e);
              setOpacity((prev) => !prev);
              // signIn();
            }}
          >
            <a
              href="#services"
              className=" text-base  capitalize py-2 px-4 hover:text-[#00BBFF]  block h-full"
            >
              {" "}
              {t("services")}
            </a>
          </li>
          <li
            onClick={(e) => {
              tapWidth(e);
              setOpacity((prev) => !prev);
              // signIn();
            }}
          >
            <a
              href="#media"
              className=" text-base  capitalize py-2 px-4 hover:text-[#00BBFF]  block h-full"
            >
              {t("media")}
            </a>
          </li>
          <li
            onClick={(e) => {
              tapWidth(e);
              setOpacity((prev) => !prev);
              // signIn();
            }}
          >
            <a
              href="#motion"
              className=" text-base  capitalize py-2 px-4 hover:text-[#00BBFF]  block h-full"
            >
              {t("motion")}{" "}
            </a>
          </li>
          <li
            onClick={(e) => {
              tapWidth(e);
              setOpacity((prev) => !prev);
              // signIn();
            }}
          >
            <a
              href="#ui"
              className=" text-base   capitalize py-2 px-4 hover:text-[#00BBFF]  block h-full"
            >
              {t("ui")}
            </a>
          </li>
          {/* <li
            onClick={(e) => {
              tapWidth(e);
              setOpacity((prev) => !prev);
              // signIn();
            }}
          >
            <a
              href="#Languages"
              className=" text-base  capitalize py-2 px-4 hover:text-[#00BBFF]  block h-full"
            >
              {t("languages")}
            </a>
          </li> */}
        </ul>
      </div>
      <span className="block lg:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className=" cursor-pointer"
          onClick={closeNav}
          size="2x"
        />
      </span>
    </nav>
  );
}
