"use client";

import { motion } from "motion/react";
import Image from "next/image";

const BackgroundBats = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-10 hidden dark:block overflow-hidden">
            {/* Bat 1 - Left Side */}
            <motion.div
                initial={{ x: -100, y: 100, opacity: 0 }}
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    opacity: [0, 1, 1, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0,
                }}
                className="absolute left-[5%] top-[20%]"
            >
                <Image
                    src="/bat1.svg"
                    alt="Bat 1"
                    width={80}
                    height={80}
                    className="opacity-30 md:opacity-60 dark:invert w-10 h-auto md:w-20"
                />
            </motion.div>

            {/* Bat 2 - Right Side */}
            <motion.div
                initial={{ x: 100, y: 300, opacity: 0 }}
                animate={{
                    x: [0, -60, 0],
                    y: [0, -50, 0],
                    opacity: [0, 1, 1, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 5,
                }}
                className="absolute right-[5%] top-[40%]"
            >
                <Image
                    src="/bat2.svg"
                    alt="Bat 2"
                    width={100}
                    height={100}
                    className="opacity-30 md:opacity-60 dark:invert w-12 h-auto md:w-24"
                />
            </motion.div>

            {/* Bat 3 - Top Left moving across */}
            <motion.div
                initial={{ x: -200, y: -100, opacity: 0 }}
                animate={{
                    x: ["10vw", "15vw"],
                    y: ["10vh", "15vh"],
                    opacity: [0, 0.4, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="hidden md:block absolute left-0 top-0"
            >
                <Image
                    src="/bat2.svg"
                    alt="Bat 3"
                    width={60}
                    height={60}
                    className="opacity-40 dark:invert w-8 h-auto md:w-16"
                />
            </motion.div>

            {/* Bat 4 - Bottom Left diagonal fly */}
            <motion.div
                initial={{ x: -100, y: 500, opacity: 0 }}
                animate={{
                    x: [0, 200, 400],
                    y: [0, -100, -300],
                    opacity: [0, 0.5, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 8,
                }}
                className="hidden md:block absolute left-[2%] bottom-[10%]"
            >
                <Image
                    src="/bat1.svg"
                    alt="Bat 4"
                    width={70}
                    height={70}
                    className="opacity-50 dark:invert w-8 h-auto md:w-16"
                />
            </motion.div>

            {/* Bat 5 - Top Right circling/hovering */}
            <motion.div
                initial={{ x: 100, y: -50, opacity: 0 }}
                animate={{
                    x: [0, -30, 0, 30, 0],
                    y: [0, 20, 40, 20, 0],
                    opacity: [0, 0.6, 0.6, 0.6, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3,
                }}
                className="hidden md:block absolute right-[10%] top-[15%]"
            >
                <Image
                    src="/bat2.svg"
                    alt="Bat 5"
                    width={50}
                    height={50}
                    className="opacity-40 dark:invert w-6 h-auto md:w-12"
                />
            </motion.div>

            {/* Bat 6 - Bottom Right flying up */}
            <motion.div
                initial={{ x: 50, y: 100, opacity: 0 }}
                animate={{
                    x: [0, -40, -80],
                    y: [0, -200, -400],
                    opacity: [0, 0.5, 0],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeIn",
                    delay: 12,
                }}
                className="hidden md:block absolute right-[5%] bottom-[5%]"
            >
                <Image
                    src="/bat1.svg"
                    alt="Bat 6"
                    width={90}
                    height={90}
                    className="opacity-50 dark:invert w-10 h-auto md:w-24"
                />
            </motion.div>
        </div>
    );
};

export default BackgroundBats;
