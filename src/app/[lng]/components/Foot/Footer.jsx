import React from "react";
import Image from "next/image";

export default function Footer() {
  const year = new Date();
  return (
    <footer className="py-12 flex justify-center gap-5 items-center h-[70px] flex-col md:flex-row">
      <Image
        width={125}
        height={25}
        src="/logoSmall.png"
        alt=""
        className="w-[90px] md:w-[120px] h-8 md:h-10 lg:w-auto"
      />
      <div className="info capitalize text-[10px] lg:text-base">
        <sup>@</sup>
        {year.getFullYear()}{" "}
        <span className="text-[#00BBFF]">Techno Plus </span>All rights reserved
      </div>
      <div
        className="links sm:flex-row flex-col flex items-center justify-between gap-3 text-[10px] lg:text-base"
        dir="ltr"
      >
        <a
          href="#"
          className="flex items-center justify-start w-full sm:justify-center gap-2"
        >
          <Image
            src="/Group-43.png"
            alt=""
            width={25}
            height={25}
            className="w-[15px] h-[15px] md:w-6 md:h-6"
          />
          <span className="text-start">+99999999999999</span>
        </a>
        <a
          href="#"
          className="flex items-center justify-start w-full sm:justify-center gap-2"
        >
          <Image
            src="/Group-46.png"
            alt=""
            width={25}
            height={25}
            className="w-[15px] h-[15px] md:w-6 md:h-6"
          />
          <span className="text-end">technopluss</span>
        </a>
        <a
          href="#"
          className="flex items-center justify-start w-full sm:justify-center gap-2"
        >
          <Image
            src="/Group-48.png"
            alt=""
            width={25}
            height={25}
            className="w-[15px] h-[15px] md:w-6 md:h-6"
          />
          <span className="text-start">technoplus.dev</span>
        </a>
      </div>
    </footer>
  );
}
