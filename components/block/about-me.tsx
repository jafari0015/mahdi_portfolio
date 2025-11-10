"use client";

import { useTheme } from "next-themes";
import React from "react";
import { motion } from "framer-motion";
import DrawOutlineButton from "../ui/darw-outline-button";
import Link from "next/link";
import { BoxReveal } from "../magicui/box-reveal";

const AboutMe = () => {
  const { theme } = useTheme();
  const mainColor = theme === "dark" ? "#222222" : "#e9ecef";

  return (
    <section className="w-full md:mt-60 mt-0 lg:mt-0 px-6 md:px-10 xl:px-20 2xl:px-40  xl:py-36 relative overflow-hidden" id="#about">
      {/* ===== Title ===== */}
      <motion.h1
        className="text-center text-3xl sm:text-4xl md:text-5xl font-light uppercase mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h1>

      {/* ===== Content Section ===== */}
      <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-14 xl:gap-24 max-w-[1500px] mx-auto">
        {/* ===== Text Section ===== */}
        <motion.div
          className="max-w-2xl xl:pt-8 order-2 xl:order-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-base sm:text-xl 2xl:text-2xl mt-5 md:mt-10 xl:mt-40 text-justify "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <BoxReveal boxColor="#5046e6" duration={0.5}>
              <span>
                I'm a{" "}
                <span className="font-semibold">web & app developer</span> based
                in Kabul, Afghanistan!
              </span>
            </BoxReveal>
            <BoxReveal boxColor="#5046e6" duration={0.7}>
              <span>
                I specialize in{" "}
                <span className="font-semibold">Frontend Engineering</span>,
                focusing on building
              </span>
            </BoxReveal>
            <BoxReveal boxColor="#5046e6" duration={0.9}>
              <span>
                high-quality web experiences through{" "}
                <span className="font-semibold">clean code</span> and{" "}
                <span className="font-semibold">thoughtful design</span>.
              </span>
            </BoxReveal>
          </motion.p>

          {/* ===== CTA Button ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Link href="mailto:jafarimahdi850@gmail.com">
              <DrawOutlineButton>Get In Touch</DrawOutlineButton>
            </Link>
          </motion.div>
        </motion.div>

        {/* ===== SVG Section ===== */}
        <div className="relative w-full -mr-20 max-w-[300px] sm:max-w-md xl:max-w-xl order-1 xl:order-2 flex 2xl:gap-60 mb-20 justify-center">
          {/* Image SVG Mask */}
          <svg
            viewBox="0 0 464 463"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto max-w-[200px] md:max-w-[400px] 2xl:max-w-[450px] relative z-10 -left-20 md:-left-38 top-18 md:top-28"
          >
            <clipPath id="e-letter">
              <path d="M426.794 276.327L349.999 353.122C347.867 355.254 344.424 355.254 342.306 353.122C340.174 350.991 340.174 347.547 342.306 345.429L419.088 268.647C439.598 248.137 439.598 214.877 419.088 194.366L342.292 117.571C340.16 115.439 340.16 111.996 342.292 109.878C344.42 107.749 347.871 107.749 349.999 109.878L426.781 186.659C428.954 188.832 431.277 190.772 433.695 192.494C446.39 201.445 463.908 192.153 463.908 176.616V51.7481C463.908 23.1753 440.746 0 412.16 0H52.6832C24.0967 0 0.935059 23.1616 0.935059 51.7481V411.252C0.935059 439.825 24.0967 463 52.6832 463H412.187C440.76 463 463.935 439.838 463.935 411.252V286.411C463.935 270.861 446.39 261.555 433.695 270.519C431.277 272.228 428.967 274.168 426.808 276.327Z" />
            </clipPath>
            <image
              clipPath="url(#e-letter)"
              xlinkHref="/images/mahdi.webp"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
            />
            <use href="#e-letter" stroke="white" strokeWidth="3" fill="none" />
          </svg>

          {/* Background Shape */}
          <motion.svg
            initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            viewBox="0 0 610 547"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-10 w-[200px] h-[200px] md:w-[400px] md:h-[400px]  2xl:w-full 2xl:h-full -z-10 scale-[1.2] sm:scale-[1.3] xl:scale-100 -rotate-180"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M116.134 529.548C116.134 538.642 123.506 546.015 132.6 
              546.015H211.63C211.635 546.015 211.638 546.011 211.638 
              546.007V546.007C211.638 546.003 211.642 545.999 211.646 
              545.999H592.691C601.786 545.999 609.158 538.627 609.158 
              529.533L609.157 251.366C609.157 242.272 601.785 234.899 
              592.691 234.899H401.097C392.003 234.899 384.631 227.527 
              384.631 218.433V112.465C384.631 103.371 377.259 95.999 
              368.164 95.999H214.466C205.372 95.999 198 88.6268 198 
              79.5327V16.4662C198 7.37219 190.628 0 181.534 0H88.4662C79.3722 
              0 72 7.37219 72 16.4662V104.534C72 113.628 79.3722 121 88.4662 
              121H166.917C176.011 121 183.383 128.372 183.383 137.466V273.565C183.383 
              282.659 176.011 290.031 166.917 290.031H16.5634C7.46936 290.031 
              0.0971666 297.403 0.0971666 306.497V445.923C0.0971666 455.017 
              7.46935 462.39 16.5634 462.39H99.6677C108.762 462.39 116.134 
              469.762 116.134 478.856V529.548Z"
              fill={mainColor}
            />
          </motion.svg>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
