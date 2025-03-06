"use client";
import React, { ReactNode, useEffect } from "react";
import ScrollToTop from "../ScrollToTop";
import { Button } from "../ui/button";
import Link from "next/link";
import Logo from "./Logo";
import {
  AppDispatch,
  RootState,
  useAppDispatch,
  useAppSelector,
} from "@/store";
import { fetchData } from "@/store/slices/Social-Media-slice";
import * as ReactLucide from "lucide-react";
import { Skeleton } from "../ui/skeleton";

const Footer: React.FC = (): ReactNode => {
  const dispatch = useAppDispatch() as AppDispatch;
  const { data, loading } = useAppSelector(
    (state: RootState) => state.socialMedia
  );

  useEffect(() => {
    dispatch(fetchData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <footer className='w-full border-t bg-white dark:bg-gray-950 transition-colors duration-300'>
        <div className='container mx-auto px-4 py-6'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            {/* Logo and Brand */}
            <Logo />

            {/* Copyright */}
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              Copyright © {new Date().getFullYear()} MD Mahim All Saklain
            </p>

            {/* Social Links */}
            <div className='flex items-center space-x-4'>
              {loading ? (
                <>
                  {...Array(4).map((_, index) => {
                    return (
                      <Skeleton
                        key={index}
                        className='w-5 h-5 p-5 rounded-full'
                      />
                    );
                  })}
                </>
              ) : (
                data.data &&
                data.data.map((curElm) => {
                  const { platformName, url, icon } = curElm;
                  const IconComponent =
                    (ReactLucide[
                      icon as keyof typeof ReactLucide
                    ] as React.ComponentType<ReactLucide.LucideProps>) ||
                    ReactLucide.HelpCircle;
                  return (
                    <Link key={platformName} href={url}>
                      <Button
                        variant='ghost'
                        size='icon'
                        className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                        aria-label='Facebook'
                      >
                        <IconComponent />
                      </Button>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </>
  );
};

export default Footer;
