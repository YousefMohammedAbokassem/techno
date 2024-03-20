"use client";
// import { faSquareUpRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { faCaretSquareUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Up = () => {
  const goUp = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        document.getElementById("up").style.cssText = `opacity:1;bottom:40px;`;
      } else {
        document.getElementById("up").style.cssText = ``;
      }
    });
  }, []);
  return (
    <div
      className="fixed bottom-[30px] opacity-0 right-4 cursor-pointer z-[1000000000] "
      onClick={goUp}
      id="up"
    >
      <FontAwesomeIcon icon={faCaretSquareUp} size="2x" />
    </div>
  );
};

export default Up;
