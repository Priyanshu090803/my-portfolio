// import { skills } from "@/utils/skills";
// import { motion } from 'motion/react';
 

// const Skills = () => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true, margin: "-100px" }}
//       transition={{ duration: 1, ease: "easeOut" }}
//       className='space-y-4 mb-4 rounded-lg w-full -mt-2 py-4 px-4'
//     >
//       <motion.p 
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//         className="text-neutral-400 dark:text-neutral-300 leading-relaxed text-sm font-medium text-xl"
//       >
//         Tech-Tools
//       </motion.p>
      
//       <motion.div 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={{
//           visible: {
//             transition: {
//               staggerChildren: 0.04,
//               delayChildren: 0.2
//             }
//           }
//         }}
//         className="grid grid-cols-7 gap-2 sm:grid-cols-[repeat(13,minmax(0,1fr))] sm:w-fit"
//       >
//         {skills.map((skill) => {
//           const Icon = skill.icon;
//           return (
//             <motion.div
//               key={skill.name}
//               variants={{
//                 hidden: { 
//                   opacity: 0, 
//                   scale: 0.8,
//                   y: 20
//                 },
//                 visible: { 
//                   opacity: 1, 
//                   scale: 1,
//                   y: 0,
//                   transition: {
//                     duration: 0.5,
//                     ease: [0.22, 1, 0.36, 1]
//                   }
//                 }
//               }}
//               whileHover={{ 
//                 y: -4,
//                 scale: 1.05,
//                 transition: { 
//                   duration: 0.2,
//                   ease: "easeOut"
//                 }
//               }}
//               whileTap={{ 
//                 scale: 0.95,
//                 transition: { duration: 0.1 }
//               }}
//               className="relative group cursor-pointer border border-neutral-300 p-1.5 md:p-2 rounded-md
//                 hover:bg-neutral-100 dark:hover:bg-neutral-800
//                 bg-linear-to-t from-[#e8e8e8] to-[#f2f2f2]
//                 dark:bg-linear-to-t dark:from-[#252525] dark:to-[#545454]
//                 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300
//                 flex items-center justify-center
//                 hover:text-[var(--hover-color)] hover:border-[var(--hover-color)]
//                 dark:hover:text-[var(--hover-color-dark)] dark:hover:border-[var(--hover-color-dark)]"
//               style={{
//                 // @ts-ignore
//                 "--hover-color": skill.color,
//                 // @ts-ignore
//                 "--hover-color-dark": skill.colorDark || skill.color
//               }}
//             >
//               <motion.div
//                 whileHover={{ 
//                   scale: 1.15,
//                   rotate: [0, -5, 5, 0],
//                   transition: { 
//                     rotate: {
//                       duration: 0.5,
//                       ease: "easeInOut"
//                     },
//                     scale: {
//                       duration: 0.2,
//                       ease: "easeOut"
//                     }
//                   }
//                 }}
//               >
//                 <Icon
//                   className="h-4 w-4 md:h-5 md:w-5 transition-colors duration-200"
//                   style={{ color: "inherit" }}
//                 />
//               </motion.div>
              
//               <motion.span 
//                 initial={{ opacity: 0, y: 5 }}
//                 whileHover={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//                 className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-neutral-800 dark:bg-neutral-700 rounded whitespace-nowrap pointer-events-none z-10 shadow-lg"
//               >
//                 {skill.name}
//               </motion.span>
//             </motion.div>
//           );
//         })}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Skills;
// import { skills } from "@/utils/skills";
// import { motion } from 'motion/react';
 

// const Skills = () => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true, margin: "-100px" }}
//       transition={{ duration: 1, ease: "easeOut" }}
//       className='space-y-4 mb-4 rounded-lg w-full -mt-2 py-4 px-4'
//     >
//       <motion.p 
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
//         className="text-neutral-400 dark:text-neutral-300 leading-relaxed text-sm font-medium text-xl"
//       >
//         Tech-Tools
//       </motion.p>
      
//       <motion.div 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={{
//           visible: {
//             transition: {
//               staggerChildren: 0.04,
//               delayChildren: 0.2
//             }
//           }
//         }}
//         className="grid grid-cols-7 gap-2 sm:grid-cols-[repeat(13,minmax(0,1fr))] sm:w-fit"
//       >
//         {skills.map((skill) => {
//           const Icon = skill.icon;
//           return (
//             <motion.div
//               key={skill.name}
//               variants={{
//                 hidden: { 
//                   opacity: 0, 
//                   scale: 0.8,
//                   y: 20
//                 },
//                 visible: { 
//                   opacity: 1, 
//                   scale: 1,
//                   y: 0,
//                   transition: {
//                     duration: 0.5,
//                     ease: [0.22, 1, 0.36, 1]
//                   }
//                 }
//               }}
//               whileHover={{ 
//                 y: -4,
//                 scale: 1.05,
//                 transition: { 
//                   duration: 0.2,
//                   ease: "easeOut"
//                 }
//               }}
//               whileTap={{ 
//                 scale: 0.95,
//                 transition: { duration: 0.1 }
//               }}
//               className="relative group cursor-pointer border border-neutral-300 p-1.5 md:p-2 rounded-md
//                 hover:bg-neutral-100 dark:hover:bg-neutral-800
//                 bg-linear-to-t from-[#e8e8e8] to-[#f2f2f2]
//                 dark:bg-linear-to-t dark:from-[#252525] dark:to-[#545454]
//                 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300
//                 flex items-center justify-center
//                 hover:text-[var(--hover-color)] hover:border-[var(--hover-color)]
//                 dark:hover:text-[var(--hover-color-dark)] dark:hover:border-[var(--hover-color-dark)]"
//               style={{
//                 // @ts-ignore
//                 "--hover-color": skill.color,
//                 // @ts-ignore
//                 "--hover-color-dark": skill.colorDark || skill.color
//               }}
//             >
//               <motion.div
//                 whileHover={{ 
//                   scale: 1.15,
//                   rotate: [0, -5, 5, 0],
//                   transition: { 
//                     rotate: {
//                       duration: 0.5,
//                       ease: "easeInOut"
//                     },
//                     scale: {
//                       duration: 0.2,
//                       ease: "easeOut"
//                     }
//                   }
//                 }}
//               >
//                 <Icon
//                   className="h-4 w-4 md:h-5 md:w-5 transition-colors duration-200"
//                   style={{ color: "inherit" }}
//                 />
//               </motion.div>
              
//               <motion.span 
//                 initial={{ opacity: 0, y: 5 }}
//                 whileHover={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 2 }}
//                 className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-neutral-800 dark:bg-neutral-700 rounded whitespace-nowrap pointer-events-none z-10 shadow-lg"
//               >
//                 {skill.name}
//               </motion.span>
//             </motion.div>
//           );
//         })}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Skills;
import { skills } from "@/utils/skills";
import { motion } from 'motion/react';
 

const Skills = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className='space-y-4 mb-4 rounded-lg w-full -mt-2 py-4 px-4'
    >
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="text-neutral-400 dark:text-neutral-300 leading-relaxed text-sm font-medium text-xl"
      >
        Tech-Tools
      </motion.p>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.04,
              delayChildren: 0.2
            }
          }
        }}
        className="grid grid-cols-7 gap-2 sm:grid-cols-[repeat(13,minmax(0,1fr))] sm:w-fit"
      >
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { 
                  opacity: 0, 
                  scale: 0.8,
                  y: 20
                },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
              whileHover={{ 
                y: -4,
                scale: 1.05,
                transition: { 
                  duration: 0.2,
                  ease: "easeOut"
                }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
              className="relative group cursor-pointer border border-neutral-300 p-1.5 md:p-2 rounded-md
                hover:bg-neutral-100 dark:hover:bg-neutral-800
                bg-linear-to-t from-[#e8e8e8] to-[#f2f2f2]
                dark:bg-linear-to-t dark:from-[#252525] dark:to-[#545454]
                dark:border-neutral-700 text-neutral-600 dark:text-neutral-300
                flex items-center justify-center
                hover:text-[var(--hover-color)] hover:border-[var(--hover-color)]
                dark:hover:text-[var(--hover-color-dark)] dark:hover:border-[var(--hover-color-dark)]"
              style={{
                // @ts-ignore
                "--hover-color": skill.color,
                // @ts-ignore
                "--hover-color-dark": skill.colorDark || skill.color
              }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, -5, 5, 0],
                  transition: { 
                    rotate: {
                      duration: 0.5,
                      ease: "easeInOut"
                    },
                    scale: {
                      duration: 0.2,
                      ease: "easeOut"
                    }
                  }
                }}
              >
                <Icon
                  className="h-4 w-4 md:h-5 md:w-5 transition-colors duration-200"
                  style={{ color: "inherit" }}
                />
              </motion.div>
              
              <motion.span 
                initial={{ opacity: 0, y: 5 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-neutral-800 dark:bg-neutral-700 rounded whitespace-nowrap pointer-events-none z-10 shadow-lg"
              >
                {skill.name}
              </motion.span>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Skills;