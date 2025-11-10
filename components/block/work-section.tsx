"use client";

import React, { useRef, MouseEvent } from "react";
import {
    useMotionValue,
    motion,
    useSpring,
    useTransform,
    MotionValue,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// ------------------------------
// Types
// ------------------------------

interface LinkProps {
    heading: string;
    subheading: string;
    imgSrc: string;
    href: string;
}

interface HoverImageLinksProps { }

export const HoverImageLinks: React.FC<HoverImageLinksProps> = () => {
    return (
        <>
            <h1 className="text-center text-4xl mt-28">Selected Work</h1>
            <section className="bg-background p-4 md:p-8 mt-18 transition-colors duration-500">
                <div className="mx-auto max-w-5xl space-y-4 md:space-y-8">
                    <Link
                        heading="Raga Space"
                        subheading="A Place where people work"
                        imgSrc="/images/raga.png"
                        href="https://raga.space"
                    />
                    <Link
                        heading="Ludo King Game"
                        subheading="An Enjoyable game."
                        imgSrc="/images/ludo.png"
                        href="https://ludo-king-b3oi.vercel.app/"
                    />
                    <Link
                        heading="Manam"
                        subheading="An App that people can order Juice"
                        imgSrc="/images/mahdi.png"
                        href="https://github.com/jafari0015"
                    />
                    <Link
                        heading="GitHub"
                        subheading="See more on github"
                        imgSrc="/images/github.png"
                        href="https://github.com/jafari0015"
                    />
                </div>
            </section></>
    );
};

// ------------------------------
// Link Component
// ------------------------------

const Link: React.FC<LinkProps> = ({ heading, imgSrc, subheading, href }) => {
    const ref = useRef<HTMLAnchorElement | null>(null);

    // Motion values for mouse movement
    const x: MotionValue<number> = useMotionValue(0);
    const y: MotionValue<number> = useMotionValue(0);

    // Smooth motion transitions
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    // Transform positions for image motion
    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    return (
        <motion.a
            href={href}
            ref={ref}
            onMouseMove={handleMouseMove}
            initial="initial"
            whileHover="whileHover"
            className="group relative flex items-center justify-between border-b-2 border-neutral-300 dark:border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-900 dark:hover:border-neutral-50 md:py-8"
        >
            {/* Text Section */}
            <div>
                <motion.span
                    variants={{
                        initial: { x: 0 },
                        whileHover: { x: -16 },
                    }}
                    transition={{
                        type: "spring",
                        staggerChildren: 0.075,
                        delayChildren: 0.25,
                    }}
                    className="relative z-10 block text-4xl font-bold text-neutral-900 dark:text-neutral-50 transition-colors duration-500 group-hover:text-neutral-500 dark:group-hover:text-neutral-200 md:text-6xl"
                >
                    {heading.split("").map((letter, i) => (
                        <motion.span
                            key={i}
                            variants={{
                                initial: { x: 0 },
                                whileHover: { x: 16 },
                            }}
                            transition={{ type: "spring" }}
                            className="inline-block"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.span>

                <span className="relative z-10 mt-2 block text-base text-neutral-700 dark:text-neutral-400 transition-colors duration-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
                    {subheading}
                </span>
            </div>

            {/* Hover Image */}
            <motion.img
                style={{
                    top,
                    left,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                variants={{
                    initial: { scale: 0, rotate: "-12.5deg" },
                    whileHover: { scale: 1, rotate: "12.5deg" },
                }}
                transition={{ type: "spring" }}
                src={imgSrc}
                className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
                alt={`Image representing a link for ${heading}`}
            />

            {/* Arrow Icon */}
            <motion.div
                variants={{
                    initial: { x: "25%", opacity: 0 },
                    whileHover: { x: "0%", opacity: 1 },
                }}
                transition={{ type: "spring" }}
                className="relative z-10 p-4"
            >
                <FiArrowRight className="text-5xl text-neutral-900 dark:text-neutral-50" />
            </motion.div>
        </motion.a>
    );
};
