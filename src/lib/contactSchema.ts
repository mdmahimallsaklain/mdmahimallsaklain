import { z } from "zod";

// Schema for validating contact form input using Zod
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .trim(),

  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .trim(),

  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .trim(),
});

// Type for the contact form data based on the Zod schema
export type ContactFormData = z.infer<typeof contactFormSchema>;
