import React from "react";
import HeadSec from "../HeadSec/HeadSec";
import Product from "./Product";

const Services = ({ lng }) => {
  return (
    <div className="py-12 container mx-auto services" id="services">
      <HeadSec info={"services"} lng={lng} />
      <div className="my-8 social">
        {[
          {
            info: "social",
            image: "/graphic-design-01.png",
            href: "media",
          },
          {
            info: "graphic",
            image: "/motion-graphic-01.png",
            href: "motion",
          },
          ,
          {
            info: "uiUx",
            image: "/Repeat-Grid-1.png",
            href: "ui",
          },
        ].map((ele, i) => {
          return (
            <React.Fragment key={i}>
              <a href={`#${ele.href}`}>
                <Product info={ele.info} image={ele.image} lng={lng} />
              </a>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
