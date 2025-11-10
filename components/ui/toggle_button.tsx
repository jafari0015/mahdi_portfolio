import { useTheme } from "next-themes"
import { Button } from "./button"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import React from "react"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => setMounted(true), [])
    if (!mounted) return null

    const isDark = theme === "dark"
    const handleToggle = () => setTheme(isDark ? "light" : "dark")

    const iconProps = { width: 24, height: 24, className: "relative" }

    return (
        <Button
            variant="outline"
            size="icon-lg"
            onClick={handleToggle}
            className={`relative flex items-center justify-center overflow-hidden transition-all cursor-pointer ${theme === "light" ? "border-black" : "border-black"
                }`}
        >
            <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                    <motion.div
                        key="moon"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute flex items-center justify-center"
                    >
                        <Image src="/icons/moon.svg" alt="Moon" {...iconProps} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="absolute flex items-center justify-center"
                    >
                        <Image src="/icons/sun.svg" alt="Sun" {...iconProps} />
                    </motion.div>
                )}
            </AnimatePresence>
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
