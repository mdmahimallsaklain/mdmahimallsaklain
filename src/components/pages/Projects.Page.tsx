"use client";

import { RootState, useAppDispatch, useAppSelector } from "@/store";
import { fetchData } from "@/store/slices/Projects-Slice";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import SearchBar from "../SearchBar";
import DataFetchError from "../DataFetchError";
import { Skeleton } from "../ui/skeleton";
import ProjectCard from "../ProjectsCard";
import AppPagination from "../App.Pagination";

const ProjectsPage = () => {
  const { data, loading, error } = useAppSelector(
    (state: RootState) => state.projects
  );
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const page = (searchParams && Number(searchParams.get("page"))) || 1;

  useEffect(() => {
    dispatch(fetchData({ page, limit: 6 }));
  }, [dispatch, page]); // Properly added dispatch and page as dependencies

  return (
    <section className='mx-auto max-w-7xl p-4 md:p-6'>
      <div className='w-full flex justify-center items-center lg:justify-end'>
        {!loading && data.data && (
          <div className='w-52 mb-5'>
            <SearchBar />
          </div>
        )}
      </div>

      {error.length > 0 && <DataFetchError error={error} />}

      <div
        className={`${
          data.data && data.data.length <= 3 ? "grid-rows-1" : "grid-rows-2"
        } grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6`}
      >
        {loading
          ? [...Array(6)].map((_, index) => (
              <Skeleton key={index} className='w-full h-52 rounded-md' />
            ))
          : data.data &&
            data.data.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
      </div>

      {!loading && data.data && (
        <AppPagination
          currentPage={page}
          maxPage={data.pagination.totalPages}
          link='/projects'
        />
      )}
    </section>
  );
};

export default ProjectsPage;
