'use client'
import { useEffect, useState, useRef } from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'motion/react';
import React, { JSX } from 'react';
import { useTheme } from 'next-themes';
import { IoIosArrowRoundForward } from "react-icons/io";

export interface CarouselItem {
    title: string;
    description: string;
    id: number;
    image: string;
}

export interface CarouselProps {
    items?: CarouselItem[];
    baseWidth?: number;
    autoplay?: boolean;
    autoplayDelay?: number;
    pauseOnHover?: boolean;
    loop?: boolean;
    round?: boolean;
}

const DEFAULT_ITEMS: CarouselItem[] = [
    {
        title: 'Getting Started with WebGL Shaders in JavaScript',
        description: 'Cool text animations for your projects.',
        id: 1,
        image: "/images/components.svg",
    },
    {
        title: 'Mastering Dynamic Rounting in Next.js Step by Step.',
        description: 'Smooth animations for your projects.',
        id: 2,
        image: "/images/route.svg",
    },
    {
        title: 'Building A Responsive System Design With Tailwind CSS.',
        description: 'Reusable components for your projects.',
        id: 3,
        image: "/images/tailwindcss.svg",
    },
    {
        title: 'Performance Optimization For React 19 all You Need.',
        description: 'Beautiful backgrounds and patterns for your projects.',
        id: 4,
        image: "/images/react.svg",
    },
    {
        title: 'The Seven Step Of Building Scalable React Apps.',
        description: 'Common UI components are coming soon!',
        id: 5,
        image: "/images/web.svg",
    }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

export default function SecondCarsoule({
    items = DEFAULT_ITEMS,
    baseWidth = 500, // default desktop width
    autoplay = false,
    autoplayDelay = 3000,
    pauseOnHover = false,
    loop = false,
    round = false
}: CarouselProps): JSX.Element {

    const containerPadding = 16;

    const [responsiveWidth, setResponsiveWidth] = useState(baseWidth);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const updateWidth = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth < 430) {
                setResponsiveWidth(300);
            } else if (screenWidth < 640) {
                setResponsiveWidth(360);
            } else if (screenWidth < 1024) {
                setResponsiveWidth(300);
            } else {
                setResponsiveWidth(baseWidth);
            }

        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, [baseWidth]);



    const itemWidth = responsiveWidth - containerPadding * 2;
    const trackItemOffset = itemWidth + GAP;

    const carouselItems = loop ? [...items, items[0]] : items;
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isResetting, setIsResetting] = useState<boolean>(false);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (pauseOnHover && containerRef.current) {
            const container = containerRef.current;
            const handleMouseEnter = () => setIsHovered(true);
            const handleMouseLeave = () => setIsHovered(false);
            container.addEventListener('mouseenter', handleMouseEnter);
            container.addEventListener('mouseleave', handleMouseLeave);
            return () => {
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, [pauseOnHover]);

    useEffect(() => {
        if (autoplay && (!pauseOnHover || !isHovered)) {
            const timer = setInterval(() => {
                setCurrentIndex(prev => {
                    if (prev === items.length - 1 && loop) {
                        return prev + 1;
                    }
                    if (prev === carouselItems.length - 1) {
                        return loop ? 0 : prev;
                    }
                    return prev + 1;
                });
            }, autoplayDelay);
            return () => clearInterval(timer);
        }
    }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

    const effectiveTransition: any = isResetting ? { duration: 0 } : SPRING_OPTIONS;

    const handleAnimationComplete = () => {
        if (loop && currentIndex === carouselItems.length - 1) {
            setIsResetting(true);
            x.set(0);
            setCurrentIndex(0);
            setTimeout(() => setIsResetting(false), 50);
        }
    };

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;
        if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
            if (loop && currentIndex === items.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                setCurrentIndex(prev => Math.min(prev + 1, carouselItems.length - 1));
            }
        } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
            if (loop && currentIndex === 0) {
                setCurrentIndex(items.length - 1);
            } else {
                setCurrentIndex(prev => Math.max(prev - 1, 0));
            }
        }
    };

    const dragProps = loop
        ? {}
        : {
            dragConstraints: {
                left: -trackItemOffset * (carouselItems.length - 1),
                right: 0
            }
        };

    const { theme } = useTheme();
    const mainColor = theme === "dark" ? "black" : "whitesmoke";

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden p-4 ml-4 bg-[#8bd100] h-[45vh] lg:h-[71vh] xl:h-[555px] ${round ? 'rounded-full' : 'rounded-[24px]'}`}
            style={{
                width: `${responsiveWidth}px`,
                ...(round && { height: `${responsiveWidth}px` })
            }}
        >
            {/* Arrow block */}
            <div className='bg-background absolute bottom-0 right-0 rounded-tl-[35px] w-[70px] h-[70px]'>
                <div className='absolute bottom-3 right-3 bg-foreground p-1 rounded-full text-background'>
                    <IoIosArrowRoundForward className='w-10 h-10' />
                </div>
            </div>

            {/* Corner SVGs */}
            <div>
                <svg className='absolute bottom-0 right-[70px] z-50 rotate-180' width="40" height="40" viewBox="0 0 30 30" fill={mainColor}
                    xmlns="http://www.w3.org/2000/svg"><path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill={mainColor}></path></svg>
                <svg className='absolute bottom-[70px] right-0 z-50 rotate-180' width="40" height="40" viewBox="0 0 30 30" fill={mainColor}
                    xmlns="http://www.w3.org/2000/svg"><path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill={mainColor}></path></svg>
            </div>

            <motion.div
                className="flex"
                drag="x"
                {...dragProps}
                style={{
                    width: itemWidth,
                    gap: `${GAP}px`,
                    perspective: 1000,
                    perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
                    x
                }}
                onDragEnd={handleDragEnd}
                animate={{ x: -(currentIndex * trackItemOffset) }}
                transition={effectiveTransition}
                onAnimationComplete={handleAnimationComplete}
            >
                {carouselItems.map((item, index) => {
                    const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
                    const outputRange = [90, 0, -90];
                    const rotateY = useTransform(x, range, outputRange, { clamp: false });
                    return (
                        <div className='flex flex-col' key={index}>
                            <motion.div
                                key={index}
                                className={`relative shrink-0 flex flex-col ${round
                                    ? 'items-center justify-center text-center bg-[#060010] border-0'
                                    : 'items-start justify-between bg-[#222] border border-[#222] rounded-[12px]'
                                    } overflow-hidden cursor-grab active:cursor-grabbing`}
                                style={{
                                    width: itemWidth,
                                    height: round ? itemWidth : '50%',
                                    rotateY: rotateY,
                                    ...(round && { borderRadius: '50%' })
                                }}
                                transition={effectiveTransition}
                            >
                                <div className={`${round ? 'p-0 m-0' : 'mb-4'}`}>
                                    <img src={item.image} alt={item.title} />
                                </div>
                            </motion.div>

                            <div className="p-5">
                                <div className="mb-1 font-semibold text-xl sm:text-3xl text-white">{item.title}</div>
                            </div>
                        </div>
                    );
                })}
            </motion.div>

            <div className={`flex w-full justify-center ${round ? 'absolute z-20 bottom-12 left-1/2 -translate-x-1/2' : 'absolute bottom-4 w-full left-0'}`}>
                <div className="mt-4 flex w-[200px] justify-center gap-3 px-2 -ml-16">
                    {items.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`h-[6px] w-6 rounded-full cursor-pointer transition-colors duration-150 ${currentIndex % items.length === index
                                ? round
                                    ? 'bg-white'
                                    : 'bg-background'
                                : round
                                    ? 'bg-[#555]'
                                    : 'bg-foreground/30'
                                }`}
                            animate={{
                                scale: currentIndex % items.length === index ? 1.2 : 1
                            }}
                            onClick={() => setCurrentIndex(index)}
                            transition={{ duration: 0.15 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
