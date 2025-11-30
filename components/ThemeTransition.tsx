"use client";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export function ThemeTransition() {
    const { theme, resolvedTheme } = useTheme();
    const [showBat, setShowBat] = useState(false);
    const isFirstRender = useRef(true);

    useEffect(() => {
        // Skip animation on first render
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        // Trigger animation on theme change
        setShowBat(true);
        const timeout = setTimeout(() => setShowBat(false), 1100);
        return () => clearTimeout(timeout);
    }, [theme, resolvedTheme]);

    return (
        <AnimatePresence mode="wait">
            {showBat && (
                <motion.div
                    key="bat-transition"
                    initial={{ x: "100vw", y: "-10vh" }}
                    animate={{ x: "-10vw", y: "110vh" }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 1,
                        ease: "linear"
                    }}
                    className="fixed top-0 right-0 z-[9999] pointer-events-none"
                >
                    <Image
                        src="/bat2.svg"
                        alt="Theme transition"
                        width={80}
                        height={80}
                        className="w-16 h-16 dark:invert"
                        style={{ transform: "rotate(135deg)" }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
