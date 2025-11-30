"use client";
import { TbBriefcase, TbBrandOperaFilled } from "react-icons/tb";
import { GiJewelCrown } from 'react-icons/gi';
import { FaAdn } from 'react-icons/fa';
import { motion } from "motion/react";

const experiences = [
    {
        featured: true,
        role: "Freelance Developer",
        company: "Jewellery Shop Project",
        date: "Oct 2025 - Nov 2025",
        location: "Remote",
        description: [
            "Developed landing page, login/signup flows and admin dashboard using React, TypeScript, and Redux Toolkit.",
            "Integrated RESTful APIs with Axios for seamless data fetching and state management.",
            "Implemented secure authentication and role-based access control."
        ],
        technologies: ["React", "TypeScript", "Redux Toolkit", "Axios", "Tailwind CSS", "Next.js"],
        icon: GiJewelCrown,
        iconBg: "bg-black text-white dark:bg-white dark:text-black"
    },
    {
        role: "Full Stack Developer Intern",
        company: "Aviraj Infotech",
        date: "April 2025 - Oct 2025",
        location: "Remote",
        description: "Internship of 6 months as a full stack developer.",
        icon: TbBriefcase,
        iconBg: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
    },
    {
        role: "Contractor",
        company: "Octoreal",
        date: "2025",
        location: "Remote",
        description: "Worked as a contractor for a web development agency.",
        icon: TbBrandOperaFilled,
        iconBg: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300"
    },
    {
        role: "Freelance-website",
        company: "Abhilasha Samiti",
        date: "Nov 2025",
        location: "Remote",
        description: "Redeveloped and fixed the website for the NGO.",
        icon: FaAdn,
        iconBg: "bg-emerald-600 text-white"
    }
];

export default function Experience() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full   pt-6  rounded-4xl bg-white/90 border-t border-neutral-100 dark:border-neutral-800 rounded-lg dark:bg-neutral-900/50 mt-10"
        >
            <h2 className="text-3xl md:text-4xl font-black text-neutral-700 dark:text-neutral-200 mb-8 px-3">
                Work Experience
            </h2>
            <div className="space-y-4">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className={` border group rounded-xl transition-all duration-200 ${exp.featured
                            ? "bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-4 md:p-6 shadow-sm"
                            : "hover:bg-neutral-50 dark:hover:bg-neutral-900/50 p-4 flex items-center gap-4"
                            }`}
                    >
                        {/* Icon */}
                        <div className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${exp.iconBg} shadow-sm ${exp.featured ? "mb-4" : ""}`}>
                            <exp.icon className="w-6 h-6" />
                        </div>

                        {/* Content Container */}
                        <div className="flex-1 w-full ">
                            {exp.featured ? (
                                // Featured Layout
                                <div>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                                        <div>
                                            <h3 className="font-bold text-xl text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                                                {exp.company}
                                                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                                    Featured
                                                </span>
                                            </h3>
                                            <p className="text-neutral-600 dark:text-neutral-300 font-medium">
                                                {exp.role}
                                            </p>
                                        </div>
                                        <div className="text-right mt-2 sm:mt-0">
                                            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">{exp.date}</p>
                                            <p className="text-xs text-neutral-400">{exp.location}</p>
                                        </div>
                                    </div>

                                    {/* Technologies */}
                                    <div className="my-4">
                                        <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Technologies & Tools</p>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies?.map((tech, i) => (
                                                <span key={i} className="px-2 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-md border border-neutral-200 dark:border-neutral-700">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Description Points */}
                                    <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400 list-disc list-inside marker:text-neutral-400">
                                        {Array.isArray(exp.description) ? exp.description.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        )) : <li>{exp.description}</li>}
                                    </ul>
                                </div>
                            ) : (
                                // Compact Layout
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                                    <div>
                                        <h3 className="font-bold text-neutral-800 dark:text-neutral-100">
                                            {exp.company}
                                        </h3>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                            {exp.role}
                                        </p>
                                    </div>
                                    <div className="text-right mt-1 sm:mt-0">
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">{exp.date}</p>
                                        <p className="text-xs text-neutral-400 hidden sm:block">{exp.location}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
