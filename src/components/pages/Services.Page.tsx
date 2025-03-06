"use client";

import ServicesCard from "@/components/ServicesCard";
import {
  AppDispatch,
  RootState,
  useAppDispatch,
  useAppSelector,
} from "@/store";
import React, { ReactNode, useEffect } from "react";
import { Skeleton } from "../ui/skeleton";
import DataFetchError from "../DataFetchError";
import { fetchData } from "@/store/slices/Services-Slice";

const ServicesPage: React.FC = (): ReactNode => {
  const dispatch = useAppDispatch() as AppDispatch;
  const { data, loading, error } = useAppSelector(
    (state: RootState) => state.services
  );

  useEffect(() => {
    dispatch(fetchData({ page: 1, limit: 9999999999 }));
  }, [dispatch]); // Add dispatch to the dependency array

  if (error.length > 0) {
    return <DataFetchError error={error} />;
  }

  const renderSkeletons = () =>
    [...Array(6)].map((_, index) => (
      <Skeleton key={index} className='block relative w-full h-52 rounded-md' />
    ));

  const renderServices = () =>
    data?.data?.map((service, index) => (
      <ServicesCard key={service.title} service={service} index={index} />
    ));

  return (
    <div className='mx-auto max-w-7xl p-4 md:p-6 md:my-10'>
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {loading ? renderSkeletons() : renderServices()}
      </div>
    </div>
  );
};

export default ServicesPage;
