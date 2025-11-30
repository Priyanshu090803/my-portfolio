"use client";
import Link from 'next/link';
import ThemeToggle from './ui/theme-toggle';
import { useState } from 'react';
import { TbMenu2, TbX } from 'react-icons/tb';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className='z-50 w-full h-12 flex justify-center border font-stack font-light text-neutral-700 dark:text-neutral-300 top-0 sticky border-neutral-100 dark:border-neutral-900 dark:bg-black bg-[#fdfcff]'>
      <div className='h-full border absolute left-[16.62%] dark:border-neutral-950 border-[#f4f3f3] hidden md:block' />
      <div className='h-full border absolute right-[16.62%] dark:border-neutral-950 border-[#f4f3f3] hidden md:block' />

      <div className='w-full md:w-4/6 px-4 md:px-2 flex justify-between md:justify-end gap-6 items-center relative'>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className='md:hidden p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors'
          aria-label="Toggle menu"
        >
          {isOpen ? <TbX className="w-5 h-5" /> : <TbMenu2 className="w-5 h-5" />}
        </button>

        {/* Desktop Links */}
        <div className='hidden md:flex gap-6 items-center'>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className='uppercase hover:text-black dark:hover:text-white transition-colors text-sm'>
              {link.name}
            </Link>
          ))}
        </div>

        <ThemeToggle />
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className='absolute top-12 left-0 w-full bg-[#fdfcff] dark:bg-black border-b border-neutral-100 dark:border-neutral-900 md:hidden flex flex-col items-center py-4 shadow-lg'
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='uppercase py-3 w-full text-center hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors text-sm'
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;