"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { TfiArrowRight } from "react-icons/tfi";

interface DrawOutlineButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    icon?: React.ReactNode;
    strokeColor?: string; // optional override
}

const DrawOutlineButton: React.FC<DrawOutlineButtonProps> = ({
    children = "",
    onClick,
    className = "",
    icon,
    strokeColor,
}) => {
    const [hovered, setHovered] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [size, setSize] = useState({ width: 0, height: 0 });
    const { theme } = useTheme();

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const updateSize = () => {
            if (buttonRef.current) {
                const { width, height } = buttonRef.current.getBoundingClientRect();
                setSize({ width, height });
            }
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    const width = size.width || 200;
    const height = size.height || 50;
    const rx = height / 2;
    const perimeter = 2 * (width - height) + 2 * Math.PI * rx;

    // Theme-based colors
    const isDark = theme === "dark";
    const outlineColor = strokeColor || (isDark ? "#ffffff" : "#000000");
    const bgColor = isDark ? "#ffffff" : "#000000";
    const textColor = isDark ? "#000000" : "#ffffff";

    return (
        <button
            ref={buttonRef}
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`group relative flex items-center justify-center gap-4 text-xl cursor-pointer mt-5 md:mt-10
                rounded-full overflow-visible transition-all duration-300 ease-in-out 
                min-w-[180px] min-h-[50px] ${className}`}
        >
            <svg
                width={width}
                height={height}
                className="absolute  top-0 left-0 pointer-events-none"
            >
                <rect
                    x={1}
                    y={1}
                    width={width - 1}
                    height={height - 1}
                    rx={rx}
                    ry={rx}
                    fill="none"
                    stroke={outlineColor}
                    strokeWidth="0.5"
                    strokeDasharray={perimeter}
                    strokeDashoffset={hovered ? 0 : perimeter}
                    style={{ transition: "stroke-dashoffset 0.8s ease-in-out" }}
                />
            </svg>

            <span
                className="p-2 mb-1 rounded-full transition-transform duration-300 group-hover:-rotate-45 z-10 flex items-center justify-center"
                style={{
                    backgroundColor: bgColor,
                    color: textColor,
                }}
            >
                {icon || <TfiArrowRight />}
            </span>

            <span
                className="z-10 pr-4"
                style={{
                    color: isDark ? "#ffffff" : "#000000",
                }}
            >
                {children}
            </span>
        </button>
    );
};

export default DrawOutlineButton;
