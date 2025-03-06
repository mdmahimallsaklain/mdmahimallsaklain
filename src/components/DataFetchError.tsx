import { MulishBoldFont } from "@/utils/FontsInitializer"; // Importing custom font initialization
import Image from "next/image"; // Importing the Image component from Next.js for optimized images
import React, { ReactNode } from "react";

// The DataFetchError component displays an error message with an image when data fetching fails.
const DataFetchError: React.FC<{ error: string }> = ({ error }): ReactNode => {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center py-12">
      {/* Wrapper div for centering content with added padding for better spacing */}
      <div>
        {/* Error icon image */}
        <Image
          width={300} // Defining the width of the image
          height={300} // Defining the height of the image
          className="inline-block mx-auto mb-8" // Centering the image horizontally with margin bottom
          src="/icons/errors.png" // Path to the error image
          // src="/icons/404-error.png" // Alternative error image path (commented out)
          alt="404 - page not found" // Alt text for the image for accessibility
        />
        {/* Error message */}
        <h1
          className={`${MulishBoldFont.className} text-3xl text-red-500 -mt-10`} // Applying custom font and styling
        >
          {/* Displaying the error message passed as a prop */}
          {error}
        </h1>
      </div>
    </div>
  );
};

export default DataFetchError;
