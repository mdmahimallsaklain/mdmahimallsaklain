"use client";
import React, { useState } from "react";
import { SectionTop } from "@/components/SectionTop";
import { SectionBottom } from "@/components/SectionBottom";
import Image from "next/image";
import ProjectCard from "@/components/ProjectsCard";
import { Skeleton } from "./ui/skeleton";
import axios, { AxiosError } from "axios";
import { ProjectType } from "@/interfaces/Data.Interface";
import DataFetchError from "./DataFetchError";
import { useInView } from "react-intersection-observer";

const ROOT_API = process.env.NEXT_PUBLIC_ROOT_API;

const FeaturedProjects: React.FC = () => {
  const [data, setData] = useState<ProjectType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [hasFetched, setHasFetched] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  const fetchData = async () => {
    try {
      const api = ROOT_API + `/projects?is_featured=true` || "";
      const response = await axios.get(api);
      setData(response.data.data);
    } catch (err) {
      const error = err as AxiosError;
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when the section is in view
  if (inView && !hasFetched) {
    fetchData();
    setHasFetched(true);
  }

  return (
    <section ref={ref} className='my-16'>
      <SectionTop
        title='Featured Projects'
        description='A collection of my recent work and side projects'
      />

      {error.length > 0 && <DataFetchError error={error} />}

      {!error && (
        <div className='flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:grid-rows-1 sm:px-[10%] px-[8%] gap-5 relative'>
          <Image
            className={`${
              loading ? "opacity-0" : "opacity-50"
            } hidden sm:inline-block absolute inset-0 -mt-8 ml-16`}
            width={150}
            height={150}
            src='/assets/dots.svg'
            alt='dots'
          />

          {loading
            ? [...Array(3)].map((_, index) => (
                <Skeleton
                  key={index}
                  className='block relative w-full h-52 rounded-md'
                />
              ))
            : data?.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
        </div>
      )}

      <SectionBottom link='projects' />
    </section>
  );
};

export default FeaturedProjects;
