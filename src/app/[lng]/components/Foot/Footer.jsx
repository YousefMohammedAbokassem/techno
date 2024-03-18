import React from "react";

export default function Footer() {
  const year = new Date();
  return (
    <footer className="py-12 flex justify-center gap-5 items-center h-[70px] flex-col md:flex-row">
      <img src="/logoSmall.png" alt="" className="w-[120px] h-10 lg:w-auto" />
      <div className="info capitalize text-[10px] lg:text-base">
        <sup>@</sup>
        {year.getFullYear()}{" "}
        <span className="text-[#00BBFF]">Techno Plus </span>All rights reserved
      </div>
      <div className="links flex items-center justify-between gap-3 text-[10px] lg:text-base">
        <a href="#" className="flex items-center justify-center gap-2">
          <img src="/Group-43.png" alt="" />
          <span>+99999999999999</span>
        </a>
        <a href="#" className="flex items-center justify-center gap-2">
          <img src="/Group-46.png" alt="" />
          <span>technopluss</span>
        </a>
        <a href="#" className="flex items-center justify-center gap-2">
          <img src="/Group-48.png" alt="" />
          <span>technoplus.dev</span>
        </a>
      </div>
    </footer>
  );
}
