"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  { title: "Web", video: "/images/web_develop.mp4", subtitle: "development" },
  { title: "Interface", video: "/images/interface_design.mp4", subtitle: "design" },
  { title: "3D Web", video: "/images/3d_web_experiences.mp4", subtitle: "experience" },
  { title: "Creative", video: "/images/creative_coding.mp4", subtitle: "Coding" },
  { title: "Solid", video: "/images/solid_engineering.mp4", subtitle: "Engineering" },
];

const SkillServices = () => {
  return (
    <div className="px-8 mt-40 xl:mt-0">
      <h1 className="text-4xl font-thin text-center uppercase mb-16">
        Skill & Services
      </h1>

      <div className="text-foreground text-[33px] md:text-6xl lg:text-7xl lg:ml-20 xl:ml-0 xl:text-9xl font-bold pl-0 2xl:pl-80 space-y-8">
        {skills.map((skill, index) => (
          <h1 key={index} className="flex items-center gap-4 flex-wrap">
            <span>{skill.title}</span>

            <motion.div
              className={
                "inline-block rounded-md md:rounded-2xl overflow-hidden border border-transparent dark:border-white " +
                "w-20 h-10 md:w-40 md:h-20"
              }
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: index * 0.12,
              }}
            >
              <video
                src={skill.video}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </motion.div>

            <span>{skill.subtitle}</span>
          </h1>
        ))}
      </div>
    </div>
  );
};

export default SkillServices;
