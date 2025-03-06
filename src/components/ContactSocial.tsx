"use client";

import Link from "next/link"; // Importing Link component for navigation
import React, { ReactNode } from "react"; // Importing React and ReactNode
import { motion } from "framer-motion"; // Importing motion for animations
import { itemVariants } from "@/components/pages/Contact.Page"; // Importing item variants for animation
import { RootState, useAppSelector } from "@/store"; // Importing Redux state and selector
import * as ReactLucide from "lucide-react"; // Importing Lucide icons for social media platforms

// Animation variants for social media icons
const socialVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3, // Smooth transition for visibility
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 300, // Spring animation for hover effect
    },
  },
};

const ContactSocial = (): ReactNode => {
  // Fetching data from Redux store for social media links
  const { data, loading } = useAppSelector(
    (state: RootState) => state.socialMedia
  );

  return (
    <motion.div
      className='flex justify-center gap-4 sm:gap-6 mb-8'
      variants={itemVariants} // Using imported itemVariants for animation
    >
      {loading ? (
        <p>Loading...</p> // Placeholder text while data is loading
      ) : (
        data.data &&
        data.data.map((item, index) => {
          const { platformName, icon, url } = item;

          // Dynamically selecting the icon based on the data
          const IconComponent =
            (ReactLucide[
              icon as keyof typeof ReactLucide
            ] as React.ComponentType<ReactLucide.LucideProps>) ||
            ReactLucide.HelpCircle; // Default icon in case of missing or incorrect icon

          return (
            <motion.div
              key={platformName}
              variants={socialVariants} // Animation variants for each social icon
              whileHover='hover' // Trigger hover effect
              custom={index} // Custom animation for each icon based on index
            >
              <Link
                href={url}
                target='_blank'
                rel='noopener noreferrer' // Secure external link
                className='relative group'
              >
                {/* Decorative background with gradient effect on hover */}
                <div className='absolute inset-0 rounded-full bg-gradient-to-br opacity-75 group-hover:opacity-100 blur transition-opacity duration-300'></div>
                {/* Icon wrapper with shadow effect */}
                <div className='relative p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg'>
                  {/* Display the social media icon with scaling effect on hover */}
                  <IconComponent className='w-4 sm:w-6 h-4 sm:h-6 text-gray-800 dark:text-white transition-transform duration-300 group-hover:scale-110' />
                </div>
              </Link>
            </motion.div>
          );
        })
      )}
    </motion.div>
  );
};

export default ContactSocial;
