"use client";

import { MulishSemiBoldFont } from "@/utils/FontsInitializer"; // Import custom semi-bold font
import Link from "next/link"; // Import Next.js Link component for navigation
import { ReactNode } from "react";
import { Button } from "@/components/ui/button"; // Import custom Button component

// Component to render a button that navigates to the provided link
export const SectionBottom: React.FC<{ link: string }> = ({
  link,
}): ReactNode => {
  return (
    <div className='w-full text-center mt-8'>
      {" "}
      {/* Center the button and add margin-top */}
      {/* Link wrapper that navigates to the provided link when clicked */}
      <Link href={link} className={MulishSemiBoldFont.className}>
        {/* Apply custom semi-bold font style to the link text */}

        <Button variant='outline' size='lg'>
          {" "}
          {/* Custom button with outlined style and large size */}
          Learn more {/* Button text */}
        </Button>
      </Link>
    </div>
  );
};
