"use client";

import { Search } from "lucide-react"; // Import the Search icon from lucide-react
import { Input } from "@/components/ui/input"; // Import custom Input component
import React, { FormEvent, ReactNode, useState } from "react"; // Import necessary React hooks
import { AppDispatch, useAppDispatch } from "@/store"; // Import app dispatch and store hooks
import { fetchData } from "@/store/slices/Projects-Slice"; // Import fetchData action from the slice

// SearchBar component for handling search functionality
const SearchBar: React.FC = (): ReactNode => {
  const [search, setSearch] = useState<string>(""); // State for storing search query
  const dispatch = useAppDispatch() as AppDispatch; // Dispatch hook to interact with Redux store

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    dispatch(fetchData({ search })); // Dispatch fetchData action with search term
  };

  return (
    <form className='relative' onSubmit={handleSubmit}>
      {/* Form wrapper with relative positioning */}
      {/* Custom Input component for the search term */}
      <Input
        placeholder='Search' // Placeholder text
        className='pr-8' // Right padding for icon space
        onChange={(e) => setSearch(e.target.value)} // Update search term on change
        value={search} // Bind input value to search state
      />
      {/* Submit button for the search action */}
      <button
        type='submit' // Submit button triggers form submission
        className='absolute right-0 top-0 h-full w-[15%] text-muted-foreground rounded-r-md flex justify-center items-center transition-all duration-200 hover:text-white'
      >
        {/* Search icon inside the button */}
        <Search className='w-[65%]' />
      </button>
    </form>
  );
};

export default SearchBar;
