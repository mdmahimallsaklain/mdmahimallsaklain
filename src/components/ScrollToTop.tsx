"use client";

import React, { ReactNode, useEffect, useState } from "react"; // Import React and necessary hooks
import { FaAngleUp } from "react-icons/fa6"; // Import the scroll-to-top icon

// ScrollToTop component to handle smooth scrolling back to the top of the page
const ScrollToTop: React.FC = (): ReactNode => {
  const [isVisible, setIsVisible] = useState<boolean>(false); // State to track button visibility

  // Effect to toggle the visibility of the scroll-to-top button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      // If the user scrolls down 300px or more, show the button
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener to detect scroll position
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Function to scroll smoothly to the top of the page
  const scrollToTop = () => {
    setIsVisible(false); // Hide the button after clicking
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Smooth scrolling behavior
    });
  };

  return (
    <div>
      {/* Button that triggers scroll to top when clicked */}
      <button
        onClick={scrollToTop} // Trigger the scrollToTop function on click
        type='button'
        className={`fixed right-3 sm:right-8 bottom-3 sm:bottom-8 text-xl sm:text-2xl bg-based p-4 sm:p-4 rounded-full text-white transition-all duration-200 hover:shadow hover:shadow-based ${
          isVisible
            ? "translate-y-0 opacity-1 pointer-events-auto" // Visible state
            : "translate-y-20 opacity-0 pointer-events-none" // Hidden state
        }`}
      >
        <FaAngleUp /> {/* Scroll-to-top icon */}
      </button>
    </div>
  );
};

export default ScrollToTop;
