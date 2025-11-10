"use client";
import React, { useState, useEffect } from "react";
import Silk from "@/components/animations/silk-background";
import { div } from "framer-motion/client";
import { useTheme } from "next-themes";
import Carousel from "../animations/carousle-animated";
import SecondCarsoule from "../animations/carsoule_animated-2";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import Iridescence from "../animations/iridescense";

const HeroSection = () => {
  const { theme } = useTheme();
  const mainColor = theme === "dark" ? "black" : "whitesmoke";
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Check window width only on client side
    if (typeof window !== "undefined") {
      const checkScreenSize = () => {
        setIsLargeScreen(window.innerWidth >= 1024);
      };

      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);

      return () => window.removeEventListener("resize", checkScreenSize);
    }
  }, []);

  return (
    <div className=" flex flex-col lg:flex-row justify-between  pr-6 lg:pr-10 2xl:pr-24 md:-mt-[84px]">
      <div className="h-[60vh] md:h-[95vh] md:max-w-200 max-w-[600px] lg:max-w-160 xl:max-w-300 2xl:max-w-350 w-full z-0 relative">
        <Silk
          speed={7}
          scale={1}
          color="#aaff00"
          noiseIntensity={1.5}
          rotation={0}
        />
        <div className="hidden md:flex absolute -right-[82px] top-70 rotate-90">
          <svg
            width="130%"
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
        <div className="hidden xl:block h-12 w-32 bg-background absolute bottom-0 clipPath 2xl:right-66 rounded-tl-[20px] rounded-tr-[20px]">
          <div className="absolute bottom-0 rotate-180 -left-[30px]">
            <svg
              width="30"
              height="30"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0,0 H500 Q0,0 0,500 Z" fill={mainColor} />
            </svg>
          </div>
          <div className=" flex items-center mt-2 justify-center gap-2">
            <div className="w-2 h-2 animate-pulse rounded-full bg-foreground" />
            <h2 className="text-2xl font-semibold cursor-pointer">Home</h2>
          </div>
          <div className="absolute -right-[30px] bottom-0 rotate-270 ">
            <svg
              width="30"
              height="30"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0,0 H500 Q0,0 0,500 Z" fill={mainColor} />
            </svg>
          </div>
        </div>
        <div className="absolute bg-background -bottom-1 h-66 md:h-56 rounded-tr-[30px] max-w-[250px] md:max-w-lg 2xl:max-w-3xl w-full">
          <div className="absolute left-6 md:left-4 xl:left-0  -top-[30px] rotate-270 ">
            <svg
              width="30"
              height="30"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0,0 H500 Q0,0 0,500 Z" fill={mainColor} />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl 2xl:text-6xl flex items-center justify-center font-medium mt-5 max-w-60 md:max-w-2xl w-full pl-12 md:pl-20">
            Equal parts creative developer & designer
          </h1>
          <div className="absolute bottom-0 rotate-270 -right-[49px]">
            <svg
              width="50"
              height="50"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0,0 H500 Q0,0 0,500 Z" fill={mainColor} />
            </svg>
          </div>
          <Link id="#about" href="#about">
            <div className="absolute bottom-3 left-10 xl:left-3 bg-foreground rotate-90 p-1 rounded-full text-background">
              <IoIosArrowRoundForward className="w-10 h-10" />
            </div>
          </Link>
        </div>
      </div>
      <div className="px-5 mt-10 md:mt-0 lg:px-0 right-0 xl:right-26 flex flex-col">
        <div className=" relative ">
          <Carousel
            baseWidth={300}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={isLargeScreen}
          />
        </div>
        <div className="h-[700px] mt-5 relative">
          <SecondCarsoule
            baseWidth={280}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
