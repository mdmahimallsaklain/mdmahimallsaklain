import { MulishBoldFont, MulishSemiBoldFont } from "@/utils/FontsInitializer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found",
  description:
    "The page you are looking for does not exist. Please check the URL or return to the homepage.",
};

export default async function NotFound() {
  return (
    <main className='sm:flex sm:flex-row sm:justify-center sm:items-center w-full h-[80vh] sm:h-[60vh]'>
      <div className='text-center sm:p-52'>
        <div className='flex flex-row justify-center items-center'>
          <Image
            width={200}
            height={200}
            className='block mx-auto'
            src='/icons/404-error.png'
            alt='404 - page not found'
          />
        </div>
        <h1
          className={`${MulishSemiBoldFont.className} text-xl sm:text-5xl mt-3 mb-6`}
        >
          404 - Page Not Found
        </h1>
        <div>
          <p className={`${MulishBoldFont.className} text-sm mb-2`}>
            The page you are looking for could not be found.
          </p>
          <Link
            className={`${MulishSemiBoldFont.className} py-2 px-5 text-black bg-based dark:text-white rounded-full font-medium text-xs sm:text-lg inline-block  hover:shadow hover:shadow-based focus:shadow focus:shadow-based transition-shadow duration-200`}
            href='/'
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
