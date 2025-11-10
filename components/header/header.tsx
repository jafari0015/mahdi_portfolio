"use client"

import Link from 'next/link'
import { ModeToggle } from '../ui/toggle_button'
import { useTheme } from 'next-themes'
import { FlipLink } from '../ui/flip-links'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const links = [
    { url: "#projects", title: "Projects" },
    { url: "#about", title: "About" },
    { url: "#contact", title: "Contact" },
    { url: "/blog", title: "Blog" },
]

const Header = () => {
    const { theme } = useTheme()
    const [menuOpen, setMenuOpen] = useState(false)

    const mainColor = theme === "dark" ? "black" : "whitesmoke"
    const textColor = theme === "dark" ? "whitesmoke" : "black"

    return (
        <header className="sticky top-0 left-0 w-full z-50">
            <section className="relative">
                {/* Background side bar */}
                <div
                    className={`w-6 md:w-8 xl:w-20 h-screen absolute inset-0`}
                    style={{ backgroundColor: mainColor }}
                />
                <div className="w-6 flex md:hidden h-screen absolute bg-background -right-1" />

                <div className="h-4 w-full" style={{ backgroundColor: mainColor }} />

                <nav className="flex items-center relative -mt-5 md:mt-0 md:ml-8 xl:ml-20 justify-between max-w-132">
                    <div
                        className="pl-4 md:pl-0 pr-5 py-[8px] w-full -mt-1 md:rounded-br-[30px] relative"
                        style={{ backgroundColor: mainColor }}
                    >
                        <div className="w-5 h-5 absolute -bottom-[19px] left-[22px] md:left-[139px] md:top-0">
                            <svg width="40" height="40" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0,0 H500 Q0,0 0,500 Z" fill={mainColor} />
                            </svg>
                        </div>

                        <h1
                            className="aboslute -left-30 flex items-center gap-2 text-[20px] font-bold mt-2"
                            style={{ color: textColor }}
                        >
                            <img src="/images/logo.svg" alt="Mahdi Jafari" className="w-18 h-18" />
                            Mahdi <br /> Jafari
                        </h1>

                        <div className="md:left-0 md:-bottom-5 right-[20px] -bottom-[19px] rotate-90 md:rotate-0  w-5 h-5 absolute">
                            <svg width="30" height="30" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0,0 H500 Q0,0 0,500 Z" fill={mainColor} />
                            </svg>
                        </div>
                    </div>

                    {/* Desktop navigation */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                        className="hidden md:flex bg-white/30 border z-40 ml-2 border-stone-200 px-4 py-2 backdrop-blur-md shadow-2xl rounded-full text-[18px] items-center justify-around gap-6"
                        style={{ color: textColor }}
                    >
                        {links.map((link) => (
                            <FlipLink key={link.title} href={link.url}>
                                {link.title}
                            </FlipLink>
                        ))}
                        <ModeToggle />
                    </motion.div>

                    <div className="md:hidden relative">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={`absolute right-8 -top-4 rounded-full px-4 py-1 text-xl z-50 border transition-all duration-200
                               ${menuOpen
                                    ? "border-background text-white mt-2"
                                    : "border-foreground text-black bg-transparent"
                                }`}
                            style={{
                                color: menuOpen ? "white" : textColor,
                            }}
                        >
                            {menuOpen ? "Close" : "Menu"}
                        </button>

                        {menuOpen && (
                            <div
                                className="absolute top-[-20px] right-4 w-[390px] h-[650px] flex flex-col items-center justify-start pt-20 text-white z-40"
                                style={{
                                    backgroundImage: "url('/images/header.svg')",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    borderRadius: "30px",
                                }}
                            >
                                <div className="flex flex-col gap-4 text-4xl font-medium w-full items-center">
                                    {links.map((link) => (
                                        <Link
                                            key={link.title}
                                            href={link.url}
                                            onClick={() => setMenuOpen(false)}
                                            className="py-2 w-5/6  border-b border-white/40"
                                        >
                                            {link.title}
                                        </Link>
                                    ))}
                                </div>

                                <div className="absolute bottom-5 left-5 bg-white rounded-full py-2 px-2 flex items-center justify-center">
                                    <ModeToggle />
                                </div>
                            </div>
                        )}
                    </div>

                </nav>
            </section>
        </header>
    )
}

export default Header
