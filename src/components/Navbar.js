import React from 'react';
import {
  UserIcon,
  SearchIcon,
  BellIcon,
  AdjustmentsIcon,
} from '@heroicons/react/solid';

const Navbar = ({setQuery}) => {
 
  return (
    <div className="shadow-lg grid md:grid-cols-3 grid-cols-1 items-center  justify-items-center p-4">
        <h2 className="font-extrabold text-5xl text-red-500">WN2</h2>
      <div className="cursor-pointer flex items-center p-2 border border-gray-600 rounded-lg ">
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          className="outline-none"
          name="search"
          placeholder="Search"
        />
        <SearchIcon className="w-4 h-4" />
      </div>

      <div className="">
        <div className="flex  w-full gap-4 items-center">
          <div className="font-bold flex gap-2">
            <AdjustmentsIcon className="w-5 h-5 rotate-90" />
            Categories
          </div>
          <p>
            <BellIcon className="w-6 h-6" />
          </p>
          <UserIcon className="w-8 h-8 border p-1 rounded-full bg-red-500 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
