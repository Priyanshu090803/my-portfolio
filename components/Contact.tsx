"use client";
import { useState } from "react";
import Link from "next/link";
import { TbBrandGithub, TbBrandLinkedin, TbBrandX, TbCopy, TbCheck, TbBrandInstagram } from "react-icons/tb";
import { motion } from "motion/react";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("priyanshu121@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="px-3 py-10 border-b border-neutral-200 dark:border-neutral-800"
        >
            <h4 className="text-4xl font-black text-neutral-700 dark:text-neutral-200">
                Contact
            </h4>
            <p className="text-neutral-500 dark:text-neutral-400 mt-2">
                Let&apos;s build something great together.
            </p>

            <div className="mt-8 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 ">
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    Feel free to Reach me on X (Twitter) I&apos;m quick to respond.
                </p>

                <div className="flex flex-wrap gap-3">
                    <Link
                        href="https://x.com/Priyanshu9_8_03"
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                    >
                        <TbBrandX className="text-lg " />
                        <span className="font-medium text-sm md:text-base">@Priyanshu9_8_03</span>
                    </Link>

                    <Link
                        href="https://www.instagram.com/priyanshu_9_8_03/"
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                    >
                        <TbBrandInstagram className="text-lg " />
                        <span className="font-medium text-sm md:text-base">@priyanshu_9_8_03</span>
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/priyanshu-chandra-tamta-641123320/"
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                    >
                        <TbBrandLinkedin className="text-lg " />
                        <span className="font-medium text-sm md:text-base">LinkedIn</span>
                    </Link>

                    <Link
                        href="https://github.com/Priyanshu090803"
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                    >
                        <TbBrandGithub className="text-lg " />
                        <span className="font-medium text-sm md:text-base">GitHub</span>
                    </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center gap-2">
                    <p className="text-neutral-600 dark:text-neutral-300">
                        Or email:{" "}
                        <a
                            href="mailto:priyanshu121@gmail.com"
                            className="text-neutral-900 dark:text-white underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-900 dark:hover:decoration-white transition-all text-sm md:text-base"
                        >
                            priyanshu121@gmail.com
                        </a>
                    </p>
                    <button
                        onClick={handleCopy}
                        className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400 transition-colors"
                        title="Copy email"
                    >
                        {copied ? <TbCheck className="text-green-500" /> : <TbCopy />}
                    </button>
                </div>
            </div>
        </motion.div>
    );
}