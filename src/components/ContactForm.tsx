"use client";

import { contactFormSchema } from "@/lib/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { type ReactNode, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { itemVariants } from "@/components/pages/Contact.Page";
import axios, { type AxiosError } from "axios";
import { toast } from "sonner";

const ROOT_API = process.env.NEXT_PUBLIC_ROOT_API || "";

const ContactForm = (): ReactNode => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    console.log("🚀 ~ file: Contact.tsx ~ onSubmit ~ values:", values);
    setIsSubmitting(true);
    try {
      await axios.post(ROOT_API + `/contacts`, values);
      toast.success("Thank you for your message. I'll get back to you soon.");
      form.reset();
    } catch (err) {
      const error = err as AxiosError;
      console.error(error.message);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.div
      variants={itemVariants}
      className='bg-white/10 dark:bg-gray-800/50 backdrop-blur-xl rounded-lg p-8 shadow-xl'
    >
      <motion.div variants={itemVariants} className='text-center mb-8'>
        <h2 className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2'>
          Contact Me
        </h2>
        <p className='text-gray-600 dark:text-gray-300 sm:text-base text-sm'>
          I love hearing from you!
        </p>
      </motion.div>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          {/* Name Field */}
          <motion.div variants={itemVariants}>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-gray-700 dark:text-gray-200'>
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Your name'
                      {...field}
                      className='bg-gray-100/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-sm sm:text-base'
                      aria-invalid={!!form.formState.errors.name}
                      aria-describedby={
                        form.formState.errors.name ? "name-error" : undefined
                      }
                    />
                  </FormControl>
                  <FormMessage
                    id='name-error'
                    className='text-red-500 text-sm mt-1'
                  />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Email Field */}
          <motion.div variants={itemVariants}>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-gray-700 dark:text-gray-200'>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='your@email.com'
                      type='email'
                      {...field}
                      className='bg-gray-100/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-sm sm:text-base'
                      aria-invalid={!!form.formState.errors.email}
                      aria-describedby={
                        form.formState.errors.email ? "email-error" : undefined
                      }
                    />
                  </FormControl>
                  <FormMessage
                    id='email-error'
                    className='text-red-500 text-sm mt-1'
                  />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Message Field */}
          <motion.div variants={itemVariants}>
            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-gray-700 dark:text-gray-200'>
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Your message here...'
                      {...field}
                      className='min-h-24 sm:min-h-32 bg-gray-100/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent resize-none text-sm sm:text-base'
                      aria-invalid={!!form.formState.errors.message}
                      aria-describedby={
                        form.formState.errors.message
                          ? "message-error"
                          : undefined
                      }
                    />
                  </FormControl>
                  <FormMessage
                    id='message-error'
                    className='text-red-500 text-sm mt-1'
                  />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300'
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.div>
        </form>
      </FormProvider>
    </motion.div>
  );
};

export default ContactForm;
