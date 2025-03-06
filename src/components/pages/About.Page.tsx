"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { RootState, useAppSelector } from "@/store";
import * as ReactLucide from "lucide-react";

const AboutPage = () => {
  const { data, loading } = useAppSelector(
    (state: RootState) => state.socialMedia
  );

  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const sections = [
    {
      title: "Introduction",
      content:
        "Hello! I'm Mahim, a dedicated web developer from Bangladesh with a passion for crafting modern and innovative digital solutions. I specialize in transforming ideas into functional and visually appealing websites and applications that make a lasting impact.",
    },
    {
      title: "My Journey",
      content:
        "My web development journey began with a simple curiosity about how websites are built, which quickly evolved into a deep passion for coding. Over time, I mastered both frontend and backend technologies, enabling me to develop seamless, responsive, and user-friendly solutions. Today, I focus on building projects that combine creativity and functionality to deliver exceptional user experiences.",
    },
    {
      title: "Skills and Expertise",
      content: [
        "I have expertise in a wide range of technologies, including:",
        {
          list: [
            {
              title: "Frontend Development",
              desc: "HTML, CSS, JavaScript, React.js, TypeScript, and Next.js.",
            },
            {
              title: "Backend Development",
              desc: "Node.js, PHP, Express.js, MySQL, and MongoDB.",
            },
            {
              title: "State Management",
              desc: "Redux for handling complex application states.",
            },
            {
              title: "Validation and Optimization",
              desc: "Zod for schema validation and secure data handling.",
            },
          ],
        },
        "My approach emphasizes clean code, performance optimization, and adaptability to meet unique project requirements.",
      ],
    },
    {
      title: "Projects and Experience",
      content: [
        "I've worked on various projects that reflect my commitment to quality and innovation. From creating dynamic admin dashboards to building portfolio websites, I ensure every detail aligns with the client's vision. Some of my notable projects include:",
        {
          list: [
            { title: "Admin Dashboards", desc: "with Redux integration." },
            {
              title: "Next.js Applications",
              desc: ", such as next-blog, to showcase dynamic content.",
            },
            {
              title: "Portfolio Websites",
              desc: "designed for personal branding and showcasing expertise.",
            },
          ],
        },
      ],
    },
    {
      title: "Beyond Coding",
      content: [
        "Outside of web development, I enjoy playing Free Fire, a game that fuels my creativity and strategic thinking.",
        "I'm also active on Fiverr, where I offer my expertise in the Programming & Tech category. Whether it's building a website from scratch or optimizing an existing one, I love helping clients achieve their goals.",
      ],
    },
    {
      title: "My Vision",
      content: [
        "I believe in the power of technology to create meaningful change. My ultimate goal is to build innovative web solutions that not only meet current needs but also adapt to future challenges. As I continue learning and growing, I aim to leave a mark in the web development world with projects that stand out for their quality and impact.",
        "Let's connect and create something amazing together!",
      ],
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 transition-colors duration-300'>
      <div className='container mx-auto px-4 py-16'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-16'>
          <motion.div
            className='flex-1 space-y-12'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                className='space-y-4'
                initial='initial'
                animate='animate'
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
                  {section.title}
                </h2>

                {Array.isArray(section.content) ? (
                  <div className='space-y-4'>
                    {section.content.map((item, i) =>
                      typeof item === "string" ? (
                        <p
                          key={i}
                          className='text-gray-600 dark:text-gray-300 leading-relaxed'
                        >
                          {item}
                        </p>
                      ) : (
                        <ul key={i} className='space-y-2 ml-6'>
                          {item.list.map((listItem, j) => (
                            <li
                              key={j}
                              className='text-gray-600 dark:text-gray-300 list-disc'
                            >
                              <span className='font-semibold'>
                                {listItem.title}:
                              </span>{" "}
                              {listItem.desc}
                            </li>
                          ))}
                        </ul>
                      )
                    )}
                  </div>
                ) : (
                  <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                    {section.content}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className='lg:w-80'
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className='sticky top-20 p-6 bg-white dark:bg-gray-800 border-none shadow-xl'>
              <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-6'>
                Connect With Me
              </h3>
              <div className='space-y-4'>
                {loading ? (
                  <>
                    {Array(4)
                      .fill(null)
                      .map((_, index) => (
                        <div
                          key={index}
                          className='flex items-center gap-3 p-3'
                        >
                          <Skeleton className='w-5 h-5 p-5 rounded-full' />
                          <Skeleton className='w-full h-5 p-5 rounded-lg' />
                        </div>
                      ))}
                  </>
                ) : (
                  data.data &&
                  data.data.map((item) => {
                    const { platformName, url, icon } = item;
                    const IconComponent =
                      (ReactLucide[
                        icon as keyof typeof ReactLucide
                      ] as React.ComponentType<ReactLucide.LucideProps>) ||
                      ReactLucide.HelpCircle;
                    return (
                      <Link
                        key={platformName}
                        href={url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 group'
                      >
                        {loading ? (
                          <>
                            <Skeleton className='w-5 h-5 p-5 rounded-full' />
                            <Skeleton className='w-full h-5 p-5 rounded-lg' />
                          </>
                        ) : (
                          <>
                            <div className='p-2 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors duration-300'>
                              <IconComponent className='w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400' />
                            </div>
                            <span className='text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 font-medium'>
                              {platformName}
                            </span>
                          </>
                        )}
                      </Link>
                    );
                  })
                )}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
