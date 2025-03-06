"use client";

import React, { ReactNode } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";

interface AppPaginationTypes {
  currentPage: number;
  maxPage: number;
  link: string;
}

const AppPagination = ({
  currentPage = 1,
  maxPage = 1,
  link,
}: AppPaginationTypes): ReactNode => {
  const router = useRouter();

  // Ensure the page numbers are within valid ranges
  const previousPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage < maxPage ? currentPage + 1 : maxPage;

  const navigateToPage = (page: number) => {
    router.push(`${link}/?page=${page}`);
  };

  // Return nothing if only one page is available
  if (maxPage <= 1) return null;

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious>
            <button
              type='button'
              onClick={() => currentPage > 1 && navigateToPage(previousPage)}
              className='cursor-pointer'
              aria-label='Previous page'
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </PaginationPrevious>
        </PaginationItem>

        {/* Display Previous Page Number */}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationLink
              onClick={() => navigateToPage(previousPage)}
              className='cursor-pointer'
              aria-label={`Go to page ${previousPage}`}
            >
              {previousPage}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* Current Page Number */}
        <PaginationItem>
          <PaginationLink
            isActive
            onClick={() => navigateToPage(currentPage)}
            className='cursor-pointer'
            aria-label={`Current page ${currentPage}`}
          >
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        {/* Display Next Page Number */}
        {currentPage < maxPage && (
          <PaginationItem>
            <PaginationLink
              onClick={() => navigateToPage(nextPage)}
              className='cursor-pointer'
              aria-label={`Go to page ${nextPage}`}
            >
              {nextPage}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* Ellipsis for pagination when there are more pages */}
        {currentPage < maxPage && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext>
            <button
              type='button'
              onClick={() => currentPage < maxPage && navigateToPage(nextPage)}
              className='cursor-pointer'
              aria-label='Next page'
              disabled={currentPage !== maxPage}
            >
              Next
            </button>
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default AppPagination;
