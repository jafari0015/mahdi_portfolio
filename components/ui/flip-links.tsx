import React from "react";
import { motion, Variants } from "framer-motion";

interface RevealLinksProps { }

// 

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
    children: string;
    href: string;
}

export const FlipLink: React.FC<FlipLinkProps> = ({ children, href }) => {
    const initial: Variants = {
        initial: { y: 0 },
        hovered: { y: "-100%" },
    };

    const hovered: Variants = {
        initial: { y: "100%" },
        hovered: { y: 0 },
    };

    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className="relative block overflow-hidden whitespace-nowrap text-xl "
            style={{
                lineHeight: 0.75,
            }}
        >
            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={initial}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={`top-${i}`}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0">
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={hovered}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={`bottom-${i}`}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    );
};
