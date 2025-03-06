"use client";

import ContactForm from "@/components/ContactForm";
import ContactSocial from "@/components/ContactSocial";
import { motion } from "framer-motion";
import React from "react";

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const ContactPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <motion.div
        variants={containerVariants}
        initial='hidden'  
        animate='visible'
        className='w-full max-w-md'
      >
        {/* Social Media Links */}
        <ContactSocial />

        {/* Contact Form Card */}
        <ContactForm />
      </motion.div>
    </div>
  );
};

export default ContactPage;
