"use client";
import { MulishSemiBoldFont } from "@/utils/FontsInitializer";
import Image from "next/image";
import React, { ReactNode } from "react";

const Logo: React.FC = (): ReactNode => {
  return (
    <div className='flex items-center space-x-2'>
      <div className='w-10 h-10'>
        <Image width={50} height={50} src='/favicon.ico' alt='logo' />
      </div>
      <span className={`${MulishSemiBoldFont.className} text-xl text-gray-900 dark:text-white`}>
        MD Mahim All Saklain
      </span>
    </div>
  );
};

export default Logo;
