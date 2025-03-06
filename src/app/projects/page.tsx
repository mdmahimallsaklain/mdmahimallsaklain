import ProjectsPage from "@/components/pages/Projects.Page";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Projects | Mahim | Web Developer Portfolio",
  description:
    "Explore the web development projects by Mahim, showcasing high-quality, responsive designs and modern web solutions built with Next.js, React, Node.js, and more.",
  keywords:
    "web development, projects, Next.js, React, Node.js, responsive design, web applications, frontend development, full-stack development, modern web solutions, Mahim portfolio",
  openGraph: {
    title: "Projects | Mahim | Web Developer Portfolio",
    description:
      "Browse through Mahim's web development projects, from modern web applications to responsive designs, built using the latest technologies.",
    url: "https://www.mdmahimallsaklain.vercel.app/projects",
    images: [
      {
        url: "https://mdmahimallsaklain.vercel.app/assets/projects/web-development.png",
        width: 800,
        height: 600,
        alt: "Mahim's Projects",
      },
    ],
  },
};

export default function Projects_page() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsPage />
      </Suspense>
    </main>
  );
}
