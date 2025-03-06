"use client";

import { SectionTop } from "@/components/SectionTop"; // Top section component
import { SectionBottom } from "@/components/SectionBottom"; // Bottom section component
import ServicesCard from "@/components/ServicesCard"; // Service card component
import React, { ReactNode, useEffect, useState } from "react"; // React hooks
import axios, { AxiosError } from "axios"; // Axios for API requests
import { ServiceType } from "@/interfaces/Data.Interface"; // Service type definition
import DataFetchError from "./DataFetchError"; // Error component for API failures
import { Skeleton } from "./ui/skeleton"; // Skeleton loader component

const ROOT_API = process.env.NEXT_PUBLIC_ROOT_API; // API URL from environment variable

const FeaturedServices: React.FC = (): ReactNode => {
  const [data, setData] = useState<ServiceType[] | null>(null); // State for services data
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string>(""); // Error state

  // Fetch data from API
  const fetchData = async () => {
    try {
      const api = ROOT_API + `/services?is_featured=true`; // API endpoint
      const response = await axios.get(api); // Send GET request
      setData(response.data.data); // Set data to state
    } catch (err) {
      const error = err as AxiosError; // Cast error
      setError(error.message); // Set error message if API fails
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    if (data !== null) return; // If data is already fetched, don't fetch again
    fetchData(); // Fetch data when component mounts
  }, [data]);

  return (
    <div className='mx-auto max-w-7xl p-4 md:p-6'>
      {/* Section Top */}
      <SectionTop
        title='What I offer'
        description='I provide top-notch web development services tailored to your needs. From design to deployment, I ensure high-quality results that help your business grow.'
      />

      {/* Display error message if API call fails */}
      {error.length > 0 && <DataFetchError error={error} />}

      {/* Services grid */}
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:px-16'>
        {/* Show skeleton loader if data is still loading */}
        {loading ? (
          <>
            {[...Array(3)].map((_, index) => (
              <Skeleton
                key={index}
                className='block relative w-full h-52 rounded-md'
              />
            ))}
          </>
        ) : (
          // Map through the services and display them in cards
          data?.map((service, index) => (
            <ServicesCard key={service.title} service={service} index={index} />
          ))
        )}
      </div>

      {/* Section Bottom with link to all services */}
      <SectionBottom link='/services' />
    </div>
  );
};

export default FeaturedServices;
