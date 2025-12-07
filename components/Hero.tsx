"use client";
import Image from 'next/image'
import { techStack } from "@/utils/techStack"
import { IoDocumentTextOutline } from 'react-icons/io5';
import Link from 'next/link';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { SocialLinks } from './SocialLinks';
import Skills from './Skills';
import { motion } from 'motion/react';

const Hero = () => {

  return (
    <div className='min-h-screen w-full   relative'>

      {/* Random Decorations */}
      <div className="absolute border w-full left-0 top-100 border-[#f1f1f1] dark:border-[#0c0c0c] hidden md:block" />

      {/* Profile Section */}
      <div className="space-y-6 w-full ">
        {/* Profile Image with Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="border-black px-3  rounded-lg flex gap-2 items-end"
        >
          <Image
            src="/pfp.PNG"
            alt="profile-pic"
            width={400}
            height={600}
            className="border h-40 w-40 object-cover object-top rounded-2xl dark:hidden"
          />
          <Image
            src="/batman1.png"
            alt="profile-pic-dark"
            width={400}
            height={600}
            className="border h-40 w-40 object-cover object-top rounded-2xl hidden dark:block"
          />

          <span className="font-bold text-sm text-neutral-400 dark:text-neutral-200 dark:hidden">
            (__Pookie mode)
          </span>
          <span className="font-bold text-sm text-neutral-400 dark:text-neutral-600 hidden dark:inline">
            (__Batman mode)
          </span>
        </motion.div>

        {/* Header Text with Animation */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className=" px-3 text-4xl md:text-6xl font-black text-neutral-700 dark:text-white"
        >
          HIE, my name is
          <span className="text-[#c562fa] dark:text-[#626161]"> PRIYANshu</span>
        </motion.h1>

        {/* Subtext */}
        <div className="space-y-6 mt-8 w-full">
          {/* Subtitle with Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="w-full flex flex-col md:flex-row md:items-baseline gap-3"
          >
            <h3 className="text-3xl md:text-5xl px-3 text-neutral-600 dark:text-neutral-300">
              I am a Full Stack Dev.
            </h3>

            <span className="text-neutral-400 text-xs dark:hidden">
              — I write clean code at day
            </span>
            <span className="dark:text-neutral-400 text-neutral-600 text-xs dark:block hidden px-3 md:px-0">
              — I save gotham city at night
            </span>
          </motion.div>

          {/* Tech Stack Box with Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className=' space-y-4 rounded-b-lg border-b border-t w-full -mt-2  py-4 px-4 bg-linear-to-b from-[#f4eff7] to-[rgb(255,252,255)] dark:from-[#030303] dark:to-[rgb(18,17,18)] border-neutral-200 dark:border-neutral-900 '
          >
            {/* Tech Line */}
            <p className="text-neutral-400 dark:text-neutral-300 leading-relaxed text-sm md:text-base">
              Full-stack developer focused on interactive UI, scalable backend systems, and applied GenAI ,

              {/* Tech Stack Map */}
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <a
                    key={tech.name}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-[#c562fa] dark:hover:text-[#7f728d] inline-flex items-center gap-1 cursor-pointer border border-neutral-300 px-1.5 py-0.5 md:px-2 md:py-1 rounded-md ml-1
                  hover:bg-neutral-100 dark:hover:bg-neutral-800  
                  bg-linear-to-t from-[#e8e8e8] to-[#f2f2f2]
                  dark:bg-linear-to-t dark:from-[#252525] dark:to-[#545454]
                  dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs md:text-sm font-light
                  hover:-translate-y-0.5 translate-y-0 duration-100 delay-75 transition-all ease-in-out 
                  "
                  >
                    <Icon className="h-3 w-3 md:h-4 md:w-4 " />
                    {tech.name}
                  </a>
                );
              })}

              {" "} and many more.
            </p>

            <p className="text-neutral-400 dark:text-neutral-300 text-sm font-extralight ">
              —— I prefer startups because they move fast as I ——
            </p>

            <div className=' flex flex-wrap gap-2 md:gap-4 py-4'>
              <Link
                href="https://docs.google.com/document/d/1Rtj4lzetbkw3hBYM6ylbnqxDvwkpd0la0UZDbEPI-W0/edit?usp=sharing"
                target="_blank"
                className="
            hover:-translate-y-0.5  translate-y-0

            inline-flex items-center gap-1 px-2 py-1.5 md:px-3 md:py-2 rounded-lg text-xs md:text-base
            transition-all duration-250 cursor-pointer

            /* 🌞 Light mode */
            bg-linear-to-b from-[#fefbff] to-[#f2e4fc] hover:from-[#fbf6fd] hover:to-[#edd4ff]  text-neutral-500
            hover:text-neutral-700
            border-t border-b border-neutral-200
            hover:bg-neutral-50
            ease-in-out
            /* 🌙 Dark mode */
            dark:bg-linear-to-b dark:from-[#4c4a4c] dark:to-[#181618] dark:hover:from-[#7f6281] dark:hover:to-[#140f17]  dark:text-neutral-200
            dark:hover:text-neutral-100
            dark:border-t dark:border-b dark:border-neutral-700
            dark:hover:bg-neutral-800
          "
              >
                Resume / CV

                <IoDocumentTextOutline className="h-3 w-3 md:h-4 md:w-4 rotate-20" />
              </Link>

              <Link
                href="#contact"
                className=" 
              hover:-translate-y-0.5  translate-y-0
                inline-flex items-center gap-1 px-2 py-1.5 md:px-3 md:py-2 rounded-lg text-xs md:text-base
                transition-all   cursor-pointer 
            
                /* 🌞 Light mode (dark gradient) */ 
                bg-gradient-to-b from-[#4c4a4c] to-[#181618]
                hover:from-[#7f6281] hover:to-[#140f17]  
                text-neutral-100 
                hover:text-neutral-50 
                border-t border-b border-neutral-700 
                hover:bg-neutral-800
                
                /* 🌙 Dark mode (light gradient) */ 
                dark:bg-gradient-to-b dark:from-[#fefbff] dark:to-[#f2e4fc] 
                dark:hover:from-[#fbf6fd] dark:hover:to-[#edd4ff]  
                dark:text-neutral-500 
                dark:hover:text-neutral-700 
                dark:border-t dark:border-b dark:border-neutral-200 
                dark:hover:bg-neutral-50
                  duration-300 ease-in-out 
              "
              >
                Get in touch
                <MdOutlinePhoneInTalk className="h-3 w-3 md:h-4 md:w-4 -rotate-" />
              </Link>

            </div>
            {/* Social Icons Section - Added as per request */}
            <SocialLinks />

          </motion.div>

          {/* Skills Section with Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <Skills />
          </motion.div>
        </div>

      </div>

    </div>
  )
}

export default Hero
