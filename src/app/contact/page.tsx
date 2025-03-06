import ContactPage from "@/components/pages/Contact.Page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Mahim | Web Developer Portfolio",
  description:
    "Get in touch with Mahim, a skilled web developer specializing in Next.js, React, Node.js, and more. Reach out for collaboration, projects, or inquiries.",
  keywords:
    "contact, Mahim, web developer, React, Next.js, Node.js, web development, collaboration, inquiries, projects",
  openGraph: {
    title: "Contact Mahim | Web Developer Portfolio",
    description:
      "Connect with Mahim for web development opportunities, collaborations, or inquiries about his portfolio and services.",
    url: "https://www.mdmahimallsaklain.vercel.app/contact", // Update to correct contact page URL
    images: [
      {
        url: "https://mdmahimallsaklain.vercel.app/assets/projects/web-development.png",
        width: 800,
        height: 600,
        alt: "Contact Mahim",
      },
    ],
  },
};

export default function Contact_Page() {
  return (
    <main>
      <ContactPage />
    </main>
  );
}
