"use client";

import { motion } from "motion/react";
import Image from "next/image";

const BackgroundIconsLight = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-10 block dark:hidden overflow-hidden">
            {/* Cloud Sun - Top Left */}
            <motion.div
                initial={{ x: -100, y: 50, opacity: 0 }}
                animate={{
                    x: [0, 20, 0],
                    y: [0, 10, 0],
                    opacity: [0, 0.8, 0.8, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0,
                }}
                className="absolute left-[2%] top-[10%]"
            >
                <Image
                    src="/cloud-sun.svg"
                    alt="Cloud Sun"
                    width={100}
                    height={100}
                    className="opacity-70 w-12 h-auto md:w-24"
                />
            </motion.div>

            {/* Sun - Top Right */}
            <motion.div
                initial={{ rotate: 0, opacity: 0 }}
                animate={{
                    rotate: 360,
                    opacity: [0, 0.6, 0.6, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2,
                }}
                className="absolute right-[2%] top-[5%]"
            >
                <Image
                    src="/sun.svg"
                    alt="Sun"
                    width={80}
                    height={80}
                    className="opacity-60 w-10 h-auto md:w-20"
                />
            </motion.div>

            {/* Earth - Bottom Right */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                    opacity: [0, 0.5, 0.5, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5,
                }}
                className="absolute right-[2%] bottom-[15%]"
            >
                <Image
                    src="/earth.svg"
                    alt="Earth"
                    width={70}
                    height={70}
                    className="opacity-50 w-8 h-auto md:w-16"
                />
            </motion.div>

            {/* Heart - Floating somewhere */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: [0.8, 1.1, 0.8],
                    y: [0, -50, 0],
                    opacity: [0, 0.4, 0.4, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 8,
                }}
                className="absolute left-[2%] top-[40%]"
            >
                <Image
                    src="/heart.svg"
                    alt="Heart"
                    width={50}
                    height={50}
                    className="opacity-40 w-6 h-auto md:w-12"
                />
            </motion.div>

            {/* Mail - Drifting */}
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{
                    x: [0, 50, 100],
                    y: [0, -20, 0],
                    opacity: [0, 0.5, 0],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 12,
                }}
                className="absolute left-[1%] bottom-[20%]"
            >
                <Image
                    src="/mail.svg"
                    alt="Mail"
                    width={60}
                    height={60}
                    className="opacity-50 w-8 h-auto md:w-16"
                />
            </motion.div>

            {/* Organic Flower - Bottom Left */}
            <motion.div
                initial={{ rotate: 0, opacity: 0 }}
                animate={{
                    rotate: [0, 45, 0],
                    opacity: [0, 0.3, 0.3, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4,
                }}
                className="absolute left-[1%] bottom-[5%]"
            >
                <Image
                    src="/organic-flora-2-svgrepo-com.svg"
                    alt="Organic Flower"
                    width={120}
                    height={120}
                    className="opacity-30 w-14 h-auto md:w-28"
                />
            </motion.div>

            {/* Sunflower - Right side */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    y: [0, -30, 0],
                    opacity: [0, 0.6, 0.6, 0],
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 6,
                }}
                className="absolute right-[2%] top-[30%]"
            >
                <Image
                    src="/sunflower.svg"
                    alt="Sunflower"
                    width={90}
                    height={90}
                    className="opacity-50 w-10 h-auto md:w-20"
                />
            </motion.div>

            {/* Yellow Flower - Random spot */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    rotate: [0, -30, 0],
                    scale: [0.9, 1.1, 0.9],
                    opacity: [0, 0.5, 0.5, 0],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 10,
                }}
                className="absolute left-[2%] top-[60%]"
            >
                <Image
                    src="/yellow-flower.svg"
                    alt="Yellow Flower"
                    width={70}
                    height={70}
                    className="opacity-50 w-8 h-auto md:w-16"
                />
            </motion.div>

        </div>
    );
};

export default BackgroundIconsLight;
