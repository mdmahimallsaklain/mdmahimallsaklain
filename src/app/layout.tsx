import React from "react";
import "@/styles/globals.css";
import { Metadata } from "next";
import DefaultLayout from "@/layouts/Default.Layout";

// Static metadata applied globally
export const metadata: Metadata = {
  title: "Mahim | Web Developer Portfolio",
  description:
    "Showcasing the projects and services of Mahim, a passionate web developer specializing in modern web solutions using Next.js, React, and Node.js. Explore high-quality, responsive designs and seamless user experiences tailored to your needs.",
  keywords:
    "mdmahimallsaklain, MD Mahim All Saklain, Mahim, web developer portfolio, web development, React, Next.js, Node.js, web solutions, frontend development, responsive design, web applications, full-stack development, JavaScript, TypeScript, React developer, Node.js developer, frontend developer, web design services",
  openGraph: {
    title: "Mahim | Web Developer Portfolio",
    description:
      "Mahim's portfolio showcasing projects and services with modern web technologies.",
    url: "https://www.mdmahimallsaklain.vercel.app",
    images: [
      {
        url: "https://mdmahimallsaklain.vercel.app/preview-image.jpg",
        width: 800,
        height: 600,
        alt: "Mahim's Portfolio Image",
      },
    ],
  },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="google-site-verification"
          content="yImWBa4hwp60u9xW4jiKb5edZE6XGKUBNlmizGncqpg"
        />
      </head>
      <body className="antialiased w-[80rem] mx-auto h-screen">
        {/* Keep layout structure */}
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
