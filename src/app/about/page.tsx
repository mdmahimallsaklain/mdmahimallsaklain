import AboutPage from "@/components/pages/About.Page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Mahim | Web Developer Portfolio",
  description:
    "Learn more about Mahim, a passionate web developer with expertise in building modern web applications using Next.js, React, Node.js, and other cutting-edge technologies.",
  keywords:
    "about, Mahim, web developer, React, Next.js, Node.js, portfolio, development, skills, projects",
  openGraph: {
    title: "About Mahim | Web Developer Portfolio",
    description:
      "Discover Mahim's journey, skills, and projects that showcase his work as a web developer.",
    url: "https://www.mdmahimallsaklain.vercel.app/about", // Update to correct About page URL
    images: [
      {
        url: "https://mdmahimallsaklain.vercel.app/assets/projects/web-development.png",
        width: 800,
        height: 600,
        alt: "About Mahim",
      },
    ],
  },
};

export default function About_Page() {
  return (
    <>
      <main>
        <AboutPage />
      </main>
    </>
  );
}
