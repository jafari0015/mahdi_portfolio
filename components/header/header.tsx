"use client";

import Link from "next/link";
import { ModeToggle } from "../ui/toggle_button";
import { useTheme } from "next-themes";
import { FlipLink } from "../ui/flip-links";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const links = [
  { url: "#projects", title: "Projects" },
  { url: "#about", title: "About" },
  { url: "#contact", title: "Contact" },
  { url: "/blog", title: "Blog" },
];

const Header = () => {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const mainColor = theme === "dark" ? "black" : "whitesmoke";
  const textColor = theme === "dark" ? "whitesmoke" : "black";

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
            className="pl-4 md:pl-0 pr-5 py-2 w-full -mt-1 md:rounded-br-[30px] relative"
            style={{ backgroundColor: mainColor }}
          >
            <div className="w-5 h-5 absolute -bottom-[19px] left-[22px] md:left-[139px] md:top-0">
              <svg
                width="40"
                height="40"
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0,0 H500 Q0,0 0,500 Z" fill={mainColor} />
              </svg>
            </div>

            <h1
              className="aboslute -left-30 flex items-center gap-2 text-[20px] font-bold mt-2"
              style={{ color: textColor }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="72"
                height="72"
                viewBox="0 0 375 374.999991"
                preserveAspectRatio="xMidYMid meet"
                className="w-18 h-18"
                style={{ color: textColor }}
              >
                <defs>
                  <clipPath id="c6ecead3f6">
                    <rect x="0" width="267" y="0" height="375" />
                  </clipPath>
                  <clipPath id="3eef2bf841">
                    <rect x="0" width="52" y="0" height="332" />
                  </clipPath>
                </defs>
                <g transform="matrix(1, 0, 0, 1, 17, 0)">
                  <g clipPath="url(#c6ecead3f6)">
                    <g fill="currentColor" fillOpacity="1">
                      <g transform="translate(0.21939, 262.772851)">
                        <g>
                          <path d="M 139.203125 3.015625 C 128.984375 3.015625 119.644531 0.753906 111.1875 -3.765625 C 102.726562 -8.285156 96.023438 -14.566406 91.078125 -22.609375 C 86.140625 -30.648438 83.671875 -40.203125 83.671875 -51.265625 L 83.671875 -127.90625 C 83.671875 -130.582031 83 -133.007812 81.65625 -135.1875 C 80.320312 -137.363281 78.566406 -139.117188 76.390625 -140.453125 C 74.210938 -141.796875 71.785156 -142.46875 69.109375 -142.46875 C 66.421875 -142.46875 63.988281 -141.796875 61.8125 -140.453125 C 59.632812 -139.117188 57.914062 -137.363281 56.65625 -135.1875 C 55.40625 -133.007812 54.78125 -130.582031 54.78125 -127.90625 L 54.78125 0 L 13.5625 0 L 13.5625 -124.890625 C 13.5625 -135.441406 15.945312 -144.738281 20.71875 -152.78125 C 25.5 -160.820312 32.117188 -167.1875 40.578125 -171.875 C 49.035156 -176.5625 58.546875 -178.90625 69.109375 -178.90625 C 79.828125 -178.90625 89.375 -176.5625 97.75 -171.875 C 106.125 -167.1875 112.738281 -160.820312 117.59375 -152.78125 C 122.457031 -144.738281 124.890625 -135.441406 124.890625 -124.890625 L 124.890625 -48.25 C 124.890625 -45.394531 125.554688 -42.878906 126.890625 -40.703125 C 128.234375 -38.523438 129.953125 -36.804688 132.046875 -35.546875 C 134.140625 -34.296875 136.441406 -33.671875 138.953125 -33.671875 C 141.640625 -33.671875 144.113281 -34.296875 146.375 -35.546875 C 148.632812 -36.804688 150.429688 -38.523438 151.765625 -40.703125 C 153.109375 -42.878906 153.78125 -45.394531 153.78125 -48.25 L 153.78125 -124.890625 C 153.78125 -135.441406 156.207031 -144.738281 161.0625 -152.78125 C 165.925781 -160.820312 172.585938 -167.1875 181.046875 -171.875 C 189.503906 -176.5625 198.925781 -178.90625 209.3125 -178.90625 C 220.039062 -178.90625 229.550781 -176.5625 237.84375 -171.875 C 246.132812 -167.1875 252.707031 -160.820312 257.5625 -152.78125 C 262.414062 -144.738281 264.84375 -135.441406 264.84375 -124.890625 L 264.84375 0 L 223.640625 0 L 223.640625 -128.15625 C 223.640625 -130.832031 223.007812 -133.21875 221.75 -135.3125 C 220.5 -137.40625 218.785156 -139.117188 216.609375 -140.453125 C 214.429688 -141.796875 212 -142.46875 209.3125 -142.46875 C 206.800781 -142.46875 204.414062 -141.796875 202.15625 -140.453125 C 199.894531 -139.117188 198.09375 -137.40625 196.75 -135.3125 C 195.414062 -133.21875 194.75 -130.832031 194.75 -128.15625 L 194.75 -51.265625 C 194.75 -40.203125 192.234375 -30.648438 187.203125 -22.609375 C 182.179688 -14.566406 175.476562 -8.285156 167.09375 -3.765625 C 158.71875 0.753906 149.421875 3.015625 139.203125 3.015625 Z M 139.203125 3.015625 " />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
                <g transform="matrix(1, 0, 0, 1, 306, 27)">
                  <g clipPath="url(#3eef2bf841)">
                    <g fill="currentColor" fillOpacity="1">
                      <g transform="translate(1.002052, 237.231679)">
                        <g>
                          <path d="M 27.984375 2.5 C 22.410156 2.5 17.640625 0.515625 13.671875 -3.453125 C 9.710938 -7.421875 7.734375 -12.117188 7.734375 -17.546875 C 7.734375 -23.117188 9.710938 -27.882812 13.671875 -31.84375 C 17.640625 -35.8125 22.410156 -37.796875 27.984375 -37.796875 C 33.410156 -37.796875 38.109375 -35.8125 42.078125 -31.84375 C 46.046875 -27.882812 48.03125 -23.117188 48.03125 -17.546875 C 48.03125 -13.921875 47.125 -10.578125 45.3125 -7.515625 C 43.507812 -4.453125 41.109375 -2.015625 38.109375 -0.203125 C 35.117188 1.597656 31.742188 2.5 27.984375 2.5 Z M 27.984375 2.5 " />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              Mahdi <br /> Jafari
            </h1>

            <div className="md:left-0 md:-bottom-5 right-5 -bottom-[19px] rotate-90 md:rotate-0  w-5 h-5 absolute">
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
                className="absolute -top-5 right-4 w-[390px] h-[650px] flex flex-col items-center justify-start pt-20 text-white z-40"
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
  );
};

export default Header;
