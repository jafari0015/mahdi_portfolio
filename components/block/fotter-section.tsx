"use client";
import React from "react";
import Silk from "../animations/silk-background";
import { useTheme } from "next-themes";
import DrawOutlineButton from "../ui/darw-outline-button";
import Link from "next/link";
import LearnMore2 from "../ui/lets_talk";
import Iridescence from "../animations/iridescense";

const FooterSection = () => {
  const { theme } = useTheme();

  const mainColor = theme === "dark" ? "black" : "whitesmoke";
  return (
    <div className="h-[35vh] md:h-[50vh] xl:h-[80vh] relative pl-8 pr-8 xl:pr-20 mb-10 mt-20" id="#contact">
      <h1 className="text-2xl text-center px-10 md:px-0 md:text-start md:text-7xl 2xl:text-9xl absolute z-50 max-w-2xl 2xl:max-w-6xl text-white  md:pl-6 pt-10 lg:pt-14">
        Wanna create something awesome together?
      </h1>
      <Iridescence color={[0.5, 0.8, 1]} />
      <div className="absolute left-1/2 z-40 top-0 hidden md:block">
        <svg
          width="100%"
          viewBox="0 0 327 152"
          fill={mainColor}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M173.442 -63.8074L173.24 -163.122C173.229 -168.72 168.7 -173.258 163.102 -173.28C157.457 -173.302 152.872 -168.725 152.884 -163.08L153.093 -63.899C153.124 -58.2765 152.035 -52.7113 149.889 -47.5277C147.742 -42.3442 144.583 -37.644 140.592 -33.7022C136.626 -29.7194 131.897 -26.5709 126.685 -24.4379C121.473 -22.3049 115.882 -21.2299 110.234 -21.2784L10.8028 -21.7808C5.1631 -21.8093 0.580995 -17.2359 0.59876 -11.5962C0.616322 -6.02135 5.12574 -1.50349 10.7005 -1.47551L110.317 -0.975429C121.687 -0.882664 132.59 3.69421 140.644 11.7555C148.699 19.8167 153.249 30.7066 153.304 42.0475L153.507 141.321C153.519 146.915 158.043 151.451 163.637 151.476C169.282 151.501 173.869 146.926 173.858 141.281L173.669 42.1164C173.696 30.7926 178.21 19.9711 186.225 12.0075C194.24 4.04379 205.107 -0.416526 216.46 -0.400555L315.916 0.0969614C321.552 0.125153 326.131 -4.44324 326.116 -10.0787C326.102 -15.6535 321.593 -20.173 316.019 -20.2013L216.395 -20.7067C205.019 -20.8092 194.112 -25.4018 186.063 -33.4784C178.015 -41.555 173.476 -52.4597 173.442 -63.8074Z"
            fill={mainColor}
          ></path>
        </svg>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center  lg:gap-10 absolute bottom-10 right-16 xl:right-32">
        <p className="text-base text-center pl-16 md:text-2xl 2xl:text-3xl text-white order-2 md:order-1">
          Don't like flashy buttons? Reach out at{" "}
          <Link
            href="mailto:jafarimahdi850@gmail.com"
            className="relative inline-block before:content-[''] before:absolute before:right-0 before:bottom-0 before:h-px before:w-0 before:bg-white before:transition-all before:duration-200 hover:before:w-full hover:before:left-0"
          >
            jafarimahdi850@gmail.com
          </Link>
        </p>
        <Link
          href="mailto:jafarimahdi850@gmail.com"
          className="order-1 md:order-2"
        >
          <LearnMore2 className="lg:text-2xl mb-8 md:mb-0 lg:px-6 lg:py-3 text-sm px-3 py-1 ml-10 md:ml-0 flex items-center justify-center">Let's Talk</LearnMore2>
        </Link>
      </div>
    </div>
  );
};

export default FooterSection;
