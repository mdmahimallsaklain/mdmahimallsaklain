import HomePage from "@/components/pages/Home.Page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mahim | Web Developer Portfolio",
  description:
    "Showcasing the projects and services of Mahim, a passionate web developer.",
  openGraph: {
    type: "website",
    url: "https://www.mdmahimallsaklain.vercel.app",
    title: "Mahim | Web Developer Portfolio",
    description:
      "Mahim's portfolio showcasing projects and services with modern web technologies.",
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
export default function page() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
