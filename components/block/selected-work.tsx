"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useTheme } from "next-themes";

export interface LinkItem {
  name: string;
  url: string;
  title: string;
}

const WorkSection = () => {
  const Links: LinkItem[] = [
    {
      title: "A Place where people work",
      name: "Raga Space",
      url: "https://raga.space",
    },
    {
      title: "An Enjoyable game.",
      name: "Ludo King Game",
      url: "https://raga.space",
    },
    {
      title: "An App that people can order Juice",
      name: "Manam",
      url: "https://raga.space",
    },
    {
      title: "See More on my Github",
      name: "GitHub",
      url: "https://raga.space",
    },
  ];

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const { theme } = useTheme();

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  // Dynamic colors based on theme
  const isDark = theme === "dark";
  const cursorBg = isDark ? "#fff" : "#000";
  const cursorColor = isDark ? "#000" : "#fff";

  return (
    <div
      className="relative " id="projects"
      onMouseMove={handleMouseMove}
      style={{ cursor: hovered ? "none" : "auto" }}
    >
      <section className="-mt-30 md:mt-30 lg:mt-20 max-w-380 h-[70vh] xl:h-[90vh] w-full px-10 2xl:pl-60">
        <h1 className="text-4xl font-thin text-foreground text-center mb-10">
          Selected Work
        </h1>

        <div className="flex flex-col gap-14 lg:mt-32">
          {Links.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:p-4 border-b border-foreground relative"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{ cursor: "none" }}
            >
              <motion.div
                className="flex flex-col"
                initial={{ x: 0 }}
                whileHover={{ x: 20 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <p className="text-xs md:text-base text-muted-foreground uppercase">
                  {item.title}
                </p>
                <h1 className="text-[33px] md:text-7xl font-semibold">{item.name}</h1>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </section>

      {hovered && (
        <div
          style={{
            position: "fixed",
            top: mousePos.y - 25,
            left: mousePos.x - 25,
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: cursorBg,
            color: cursorColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            zIndex: 9999,
            fontSize: 20,
            fontWeight: "bold",
            transition:
              "transform 0.1s ease-out, background-color 0.3s ease, color 0.3s ease",
          }}
        >
          <IoIosArrowRoundForward className="w-8 h-8" />
        </div>
      )}
    </div>
  );
};

export default WorkSection;
