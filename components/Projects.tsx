// "use client";
// import React from 'react';
// import Link from 'next/link';
// import { TbBrandNextjs, TbBrandReact, TbBrandTailwind, TbBrandTypescript, TbBrandFramerMotion, TbBrandPrisma, TbBrandMongodb, TbBrandRedux, TbBrandNodejs, TbDatabase, TbCloud, TbBrandGithub, TbExternalLink, TbCheck, TbBrandYoutube, TbChartBar } from "react-icons/tb";
// import { SiExpress, SiSocketdotio, SiCloudinary, SiAxios } from "react-icons/si";
// import { FaGlobe } from "react-icons/fa";
// import { motion } from "motion/react";

// const projects = [
//     {
//         title: "Om Jewellers",
//         description: "Real-world jewellery dashboard and landing page; backend-connected",
//         tech: ["Next.js", "React", "Framer Motion", "Tailwind CSS", "Backend Integration"],
//         liveLink: "https://www.omjewellersjdp.com/",
//         link1: "https://www.omjewellersjdp.com/",
//         link2: "https://forms.omjewellersjdp.com/",
//         bgUrl: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1200&q=60",
//         from: "#8a6d3b",
//         to: "#f5e6c5"
//     },
//     {
//         title: "Cracked Media",
//         description: "AI-Powered platform where you can edit your images and compress your videos",
//         tech: ["Next.js", "Neon DB", "Motion", "Tailwind CSS", "Prisma", "Cloudinary"],
//         gitLink: "https://github.com/Priyanshu090803/cracked-media",
//         liveLink: "https://cracked-media-1.vercel.app/home",
//         bgUrl: "https://img.freepik.com/free-photo/view-3d-cinema-elements_23-2150720820.jpg",
//         from: "#1d9679",
//         to: "#899cb2"
//     },
//     {
//         title: "Octoreal",
//         description: "A Web development agency",
//         tech: ["Next.js", "Tailwind CSS", "Cloudinary", "TypeScript", "Framer Motion"],
//         liveLink: "https://octoreal.com/",
//         bgUrl: "https://wallpapers.com/images/hd/dark-purple-and-black-plain-75znhgkjjxu552fr.jpg",
//         from: "#111",
//         to: "#f0f0f0"
//     },
//     {
//         title: "H00man App",
//         description: "A application where human connect with human",
//         tech: ["React", "Tailwind", "Redux", "Axios", "Express", "MongoDb", "Websockets"],
//         gitLink: "https://github.com/Priyanshu090803/Hooman_app",
//         liveLink: "https://hooman-app.onrender.com/",
//         bgUrl: "https://www.eusemfronteiras.com.br/wp-content/uploads/2019/04/77348807_m.jpg",
//         from: "#102541",
//         to: "#fcef8a"
//     },
//     {
//         title: "Enpal Dashboard",
//         description: "Real-world solar data via NREL API with a custom backend",
//         tech: ["Next.js", "Tailwind CSS", "Recharts", "Prisma", "NREL Real-time API", "Prisma ORM"],
//         gitLink: "https://github.com/Priyanshu090803/enpal-dashboard",
//         liveLink: "https://enpal-dashboard-b5j3.vercel.app/",
//         bgUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=60",
//         from: "#0ea15a",
//         to: "#a7f3d0"
//     },
//     {
//         title: "Youtube Clone",
//         description: "YouTube clone using React",
//         tech: ["React", "Tailwind", "Redux", "YouTube api", "Api polling", "Debouncing"],
//         gitLink: "https://github.com/Priyanshu090803/YouTube-Clone",
//         liveLink: "https://you-tube-clone-phi-seven.vercel.app/",
//         bgUrl: "https://letsplays.b-cdn.net/wp-content/uploads/2014/10/youtube-iphone-app-logo.png",
//         from: "#a00004",
//         to: "#fb7190"
//     }
// ];

// const TechIcon = ({ name }: { name: string }) => {
//     const iconClass = "w-4 h-4";
//     if (name.includes("Next.js")) return <TbBrandNextjs className={iconClass} />;
//     if (name.includes("React")) return <TbBrandReact className={iconClass} />;
//     if (name.includes("Tailwind")) return <TbBrandTailwind className={iconClass} />;
//     if (name.includes("TypeScript")) return <TbBrandTypescript className={iconClass} />;
//     if (name.includes("Motion") || name.includes("Framer")) return <TbBrandFramerMotion className={iconClass} />;
//     if (name.includes("Prisma")) return <TbBrandPrisma className={iconClass} />;
//     if (name.includes("Mongo")) return <TbBrandMongodb className={iconClass} />;
//     if (name.includes("Redux")) return <TbBrandRedux className={iconClass} />;
//     if (name.includes("Express")) return <SiExpress className={iconClass} />;
//     if (name.includes("Neon")) return <TbDatabase className={iconClass} />;
//     if (name.includes("Cloudinary")) return <SiCloudinary className={iconClass} />;
//     if (name.includes("Recharts")) return <TbChartBar className={iconClass} />;
//     if (name.includes("Axios")) return <SiAxios className={iconClass} />;
//     if (name.includes("YouTube")) return <TbBrandYoutube className={iconClass} />;
//     return <TbDatabase className={iconClass} />;
// };

// export function Projects() {
//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="w-full py-10 max-w-5xl mx-auto px-3"
//         >
//             <div className="mb-8 ">
//                 <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Featured</span>
//                 <h2 className="text-3xl md:text-4xl font-black text-neutral-700 dark:text-neutral-200">
//                     Projects
//                 </h2>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {projects.map((project, index) => (
//                     <div
//                         key={index}
//                         className="group rounded-2xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
//                     >
//                         {/* Image/Header Area */}
//                         <div
//                             className="h-40 w-full relative overflow-hidden"
//                             style={{
//                                 background: `linear-gradient(135deg, ${project.from}, ${project.to})`
//                             }}
//                         >
//                             {/* Overlay Image if needed, or just use the gradient/image provided */}
//                             <div
//                                 className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-105"
//                                 style={{ backgroundImage: `url(${project.bgUrl})` }}
//                             />

//                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

//                             <div className="absolute bottom-4 left-4 right-4 text-white">
//                                 <h3 className="text-xl font-bold mb-1 shadow-black drop-shadow-md">{project.title}</h3>
//                             </div>
//                         </div>

//                         {/* Content Area */}
//                         <div className="p-4 flex flex-col flex-1">
//                             <div className="flex justify-between items-start mb-3">
//                                 <div className="flex gap-2">
//                                     <Link href={project.liveLink} target="_blank" className="p-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
//                                         <FaGlobe className="w-4 h-4" />
//                                     </Link>
//                                     {project.gitLink && (
//                                         <Link href={project.gitLink} target="_blank" className="p-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
//                                             <TbBrandGithub className="w-4 h-4" />
//                                         </Link>
//                                     )}
//                                 </div>
//                             </div>

//                             <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2 flex-1">
//                                 {project.description}
//                             </p>

//                             <div className="space-y-3">
//                                 <div>
//                                     <p className="text-[10px] font-semibold text-neutral-500 dark:text-neutral-500 mb-2 uppercase tracking-wider">Technologies</p>
//                                     <div className="flex flex-wrap gap-1.5">
//                                         {project.tech.map((t, i) => (
//                                             <div key={i} className="relative group/tech flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-[10px] font-medium text-neutral-600 dark:text-neutral-300 cursor-help">
//                                                 <TechIcon name={t} />
//                                                 <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] text-white bg-neutral-900/90 dark:bg-neutral-100/90 dark:text-neutral-900 rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
//                                                     {t}
//                                                 </span>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
//                                     <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-medium">
//                                         <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
//                                         All Systems Operational
//                                     </div>

//                                     <Link href={project.liveLink} target="_blank" className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 flex items-center gap-1 transition-colors">
//                                         View Details <TbExternalLink className="w-3 h-3" />
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </motion.div>
//     );
// }

"use client";
import React from 'react';
import Link from 'next/link';
import { TbBrandNextjs, TbBrandReact, TbBrandTailwind, TbBrandTypescript, TbBrandFramerMotion, TbBrandPrisma, TbBrandMongodb, TbBrandRedux, TbBrandNodejs, TbDatabase, TbCloud, TbBrandGithub, TbExternalLink, TbCheck, TbBrandYoutube, TbChartBar } from "react-icons/tb";
import { SiExpress, SiSocketdotio, SiCloudinary, SiAxios } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";
import { motion } from "motion/react";

const projects = [
    {
        title: "Om Jewellers",
        description: "Real-world jewellery dashboard and landing page; backend-connected",
        tech: ["Next.js", "React", "Framer Motion", "Tailwind CSS", "Backend Integration"],
        liveLink: "https://www.omjewellersjdp.com/",
        link1: "https://www.omjewellersjdp.com/",
        link2: "https://forms.omjewellersjdp.com/",
        bgUrl: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1200&q=60",
        from: "#8a6d3b",
        to: "#f5e6c5"
    },
    {
        title: "Cracked Media",
        description: "AI-Powered platform where you can edit your images and compress your videos",
        tech: ["Next.js", "Neon DB", "Motion", "Tailwind CSS", "Prisma", "Cloudinary"],
        gitLink: "https://github.com/Priyanshu090803/cracked-media",
        liveLink: "https://cracked-media-1.vercel.app/home",
        bgUrl: "https://img.freepik.com/free-photo/view-3d-cinema-elements_23-2150720820.jpg",
        from: "#1d9679",
        to: "#899cb2"
    },
    {
        title: "Octoreal",
        description: "A Web development agency",
        tech: ["Next.js", "Tailwind CSS", "Cloudinary", "TypeScript", "Framer Motion"],
        liveLink: "https://octoreal.com/",
        bgUrl: "https://wallpapers.com/images/hd/dark-purple-and-black-plain-75znhgkjjxu552fr.jpg",
        from: "#111",
        to: "#f0f0f0"
    },
    {
        title: "H00man App",
        description: "A application where human connect with human",
        tech: ["React", "Tailwind", "Redux", "Axios", "Express", "MongoDb", "Websockets"],
        gitLink: "https://github.com/Priyanshu090803/Hooman_app",
        liveLink: "https://hooman-app.onrender.com/",
        bgUrl: "https://www.eusemfronteiras.com.br/wp-content/uploads/2019/04/77348807_m.jpg",
        from: "#102541",
        to: "#fcef8a"
    },
    {
        title: "Enpal Dashboard",
        description: "Real-world solar data via NREL API with a custom backend",
        tech: ["Next.js", "Tailwind CSS", "Recharts", "Prisma", "NREL Real-time API", "Prisma ORM"],
        gitLink: "https://github.com/Priyanshu090803/enpal-dashboard",
        liveLink: "https://enpal-dashboard-b5j3.vercel.app/",
        bgUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=60",
        from: "#0ea15a",
        to: "#a7f3d0"
    },
    {
        title: "Youtube Clone",
        description: "YouTube clone using React",
        tech: ["React", "Tailwind", "Redux", "YouTube api", "Api polling", "Debouncing"],
        gitLink: "https://github.com/Priyanshu090803/YouTube-Clone",
        liveLink: "https://you-tube-clone-phi-seven.vercel.app/",
        bgUrl: "https://letsplays.b-cdn.net/wp-content/uploads/2014/10/youtube-iphone-app-logo.png",
        from: "#a00004",
        to: "#fb7190"
    }
];

const TechIcon = ({ name }: { name: string }) => {
    const iconClass = "w-4 h-4";
    if (name.includes("Next.js")) return <TbBrandNextjs className={iconClass} />;
    if (name.includes("React")) return <TbBrandReact className={iconClass} />;
    if (name.includes("Tailwind")) return <TbBrandTailwind className={iconClass} />;
    if (name.includes("TypeScript")) return <TbBrandTypescript className={iconClass} />;
    if (name.includes("Motion") || name.includes("Framer")) return <TbBrandFramerMotion className={iconClass} />;
    if (name.includes("Prisma")) return <TbBrandPrisma className={iconClass} />;
    if (name.includes("Mongo")) return <TbBrandMongodb className={iconClass} />;
    if (name.includes("Redux")) return <TbBrandRedux className={iconClass} />;
    if (name.includes("Express")) return <SiExpress className={iconClass} />;
    if (name.includes("Neon")) return <TbDatabase className={iconClass} />;
    if (name.includes("Cloudinary")) return <SiCloudinary className={iconClass} />;
    if (name.includes("Recharts")) return <TbChartBar className={iconClass} />;
    if (name.includes("Axios")) return <SiAxios className={iconClass} />;
    if (name.includes("YouTube")) return <TbBrandYoutube className={iconClass} />;
    return <TbDatabase className={iconClass} />;
};

export function Projects() {
    return (
        <div className="w-full py-10 max-w-5xl mx-auto px-3">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-8"
            >
                <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Featured</span>
                <h2 className="text-3xl md:text-4xl font-black text-neutral-700 dark:text-neutral-200">
                    Projects
                </h2>
            </motion.div>

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.15,
                            delayChildren: 0.1
                        }
                    }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { 
                                opacity: 1,
                                transition: {
                                    duration: 1,
                                    ease: "easeOut"
                                }
                            }
                        }}
                        className="group rounded-2xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
                    >
                        {/* Image/Header Area */}
                        <div
                            className="h-40 w-full relative overflow-hidden"
                            style={{
                                background: `linear-gradient(135deg, ${project.from}, ${project.to})`
                            }}
                        >
                            {/* Overlay Image if needed, or just use the gradient/image provided */}
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-105"
                                style={{ backgroundImage: `url(${project.bgUrl})` }}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-1 shadow-black drop-shadow-md">{project.title}</h3>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-4 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex gap-2">
                                    <Link href={project.liveLink} target="_blank" className="p-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                                        <FaGlobe className="w-4 h-4" />
                                    </Link>
                                    {project.gitLink && (
                                        <Link href={project.gitLink} target="_blank" className="p-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                                            <TbBrandGithub className="w-4 h-4" />
                                        </Link>
                                    )}
                                </div>
                            </div>

                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2 flex-1">
                                {project.description}
                            </p>

                            <div className="space-y-3">
                                <div>
                                    <p className="text-[10px] font-semibold text-neutral-500 dark:text-neutral-500 mb-2 uppercase tracking-wider">Technologies</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tech.map((t, i) => (
                                            <div key={i} className="relative group/tech flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-[10px] font-medium text-neutral-600 dark:text-neutral-300 cursor-help">
                                                <TechIcon name={t} />
                                                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] text-white bg-neutral-900/90 dark:bg-neutral-100/90 dark:text-neutral-900 rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                                                    {t}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        All Systems Operational
                                    </div>

                                    <Link href={project.liveLink} target="_blank" className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 flex items-center gap-1 transition-colors">
                                        View Details <TbExternalLink className="w-3 h-3" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}