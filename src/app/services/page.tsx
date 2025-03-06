import ServicesPage from "@/components/pages/Services.Page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Mahim | Web Developer Portfolio",
  description:
    "Explore the professional web development services offered by Mahim. Specializing in modern web solutions, including custom website design, full-stack development, and more.",
  keywords:
    "web development, services, custom websites, full-stack development, responsive design, web applications, frontend development, Node.js, React, Next.js, web design services",
  openGraph: {
    title: "Services | Mahim | Web Developer Portfolio",
    description:
      "Discover the range of web development services offered by Mahim, including custom websites, web applications, and full-stack development tailored to your needs.",
    url: "https://www.mdmahimallsaklain.vercel.app/services",
    images: [
      {
        url: "https://mdmahimallsaklain.vercel.app/assets/projects/web-development.png",
        width: 800,
        height: 600,
        alt: "Mahim's Services",
      },
    ],
  },
};

export default function Services_page() {
  return (
    <main>
      <ServicesPage />
    </main>
  );
}
