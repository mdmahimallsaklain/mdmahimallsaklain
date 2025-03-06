"use client";
import { MulishBoldFont, MulishRegularFont } from "@/utils/FontsInitializer"; // Custom fonts
import Image from "next/image"; // Next.js image optimization
import Link from "next/link"; // Link component for navigation
import React from "react"; // React import for JSX syntax
import { motion } from "framer-motion"; // Framer Motion for animations
import { Button } from "@/components/ui/button"; // Custom Button component

// Introduction component for the landing page section
const Introduction: React.FC = () => {
  return (
    <section
      id='introduction'
      className='flex flex-col-reverse sm:flex-row justify-between sm:justify-center items-center w-full relative gap-0 sm:gap-10 lg:px-0 px-10 mt-16'
    >
      {/* Background dots image, hidden on smaller screens */}
      <Image
        className='hidden lg:inline absolute top-5 -left-4 opacity-50'
        width={100}
        height={100}
        src='/assets/dots.svg'
        alt='dots'
      />

      {/* Left side content with animations */}
      <motion.div
        className='w-full sm:w-[40%]'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Heading with animation */}
        <motion.h1
          className={`${MulishBoldFont.className} text-2xl mb-2 leading-0 lg:leading-[40px] sm:text-lg text-center sm:text-left`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Hi, I&apos;m Mahim. A Web Developer Crafting Digital Experiences.
        </motion.h1>

        {/* Paragraph description with animation */}
        <motion.p
          className={`${MulishRegularFont.className} font-light leading-[21px] mb-5 text-center sm:text-left text-xs md:text-base text-[#7D7987]`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          Specializing in modern web development with Next.js, React, and
          scalable backend solutions.
        </motion.p>

        {/* Contact button with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className='flex flex-row justify-center items-center sm:inline-block mb-16 sm:mb-0'
        >
          <Link href='/contact'>
            <Button variant='default' size='lg'>
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Right side image with animation */}
      <motion.div
        className='w-[100%] sm:w-auto'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          loading='lazy'
          width={500}
          height={500}
          src='/assets/welcome-section.png'
          alt='introduction image section'
          className='w-[100%] mx-auto sm:w-auto sm:mx-0'
        />
      </motion.div>
    </section>
  );
};

export default Introduction;
