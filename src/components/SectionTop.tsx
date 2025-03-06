"use client";

import { MulishBoldFont, MulishLightFont } from "@/utils/FontsInitializer"; // Import custom fonts
import { ReactNode } from "react";
import { motion } from "framer-motion"; // For animations

// Component to render a section with a title and optional description
export const SectionTop: React.FC<{
  title: string; // The title of the section
  description?: string; // Optional description for the section
}> = ({ title, description }): ReactNode => {
  return (
    <div className='w-full text-center mb-8'>
      {/* Centered container for the section */}
      <div className='w-[60%] mx-auto text-center'>
        {/* Animated title with a fade-in and slide-up effect */}
        <motion.h1
          className={`${MulishBoldFont.className} text-xl sm:text-4xl`} // Apply custom bold font style
          initial={{ opacity: 0, y: -20 }} // Initial state: hidden and positioned slightly above
          animate={{ opacity: 1, y: 0 }} // Animate to visible state and original position
          transition={{ duration: 0.4 }} // Duration of the animation
        >
          {title} {/* Display the title */}
        </motion.h1>

        {/* Animated horizontal line with a growing width effect */}
        <motion.hr
          className='w-2 sm:w-28 mx-auto my-2 sm:my-3 border-2 border-based' // Styled horizontal line
          initial={{ width: 0 }} // Initial state: width is 0
          animate={{ width: "50%" }} // Animate width to 50%
          transition={{ duration: 0.4 }} // Duration of the animation
        />

        {/* Render description if provided */}
        {description && (
          <motion.p
            className={`${MulishLightFont.className} text-[#7D7987] text-xs sm:text-base`} // Apply custom light font style
            initial={{ opacity: 0, y: 20 }} // Initial state: hidden and slightly below
            animate={{ opacity: 1, y: 0 }} // Animate to visible state and original position
            transition={{ delay: 0.2, duration: 0.4 }} // Delayed and animated transition for the description
          >
            {description} {/* Display the description */}
          </motion.p>
        )}
      </div>
    </div>
  );
};
