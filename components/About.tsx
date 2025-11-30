"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { MountainSnow } from "lucide-react";

export const About = () => {
    return (
        <section className="py-20 w-full px-4 md:px-8 relative overflow-hidden border-y border-neutral-200 dark:border-neutral-900 rounded-lg shadow-sm shadow-neutral-200 dark:shadow-neutral-900">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Content (Left Side) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative aspect-[3/4] w-full max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-xl"
                    >
                        <Image
                            src="/about3.JPG"
                            alt="About Me"
                            fill
                            quality={100}
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-cover object-top hover:scale-105 transition-transform duration-700 shadow-lg shadow-neutral-200 dark:shadow-neutral-900"
                        />
                    </motion.div>

                    {/* Text Content (Right Side) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-semibold text-neutral-700 dark:text-neutral-400  underline underline-offset-8">
                            About Me
                        </h2>
                        <p className=" text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Hello! I'm Priyanshu, a Full-Stack developer building backend-heavy applications from the serene mountains of Uttarakhand<MountainSnow className=" inline-flex -mt-1 h-4 w-4  mx-1 text-green-800"/>.
                        </p>
                        <div>
                            <p className="   text-neutral-600 dark:text-neutral-400 leading-relaxed">
                               I love solving complex problems and believe in moving fast—which is why I constantly deep-dive into new tech, from Gen AI to DevOps. My coding journey was started in 2023 when I found a clear purpose and a burning desire to build something meaningful. I embraced the challenge of switching from a non-tech background, mastered the real-world skills, and I'm now pursuing my MCA and my dream to architect the next big thing.
                            </p>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};