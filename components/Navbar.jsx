import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { DateRangePicker } from "react-date-range";
import Header from "./Header";

function Navbar() {
  const [navbar, SetNavbar] = useState(false);
  const handleClick = () => {
    SetNavbar(true);
  };

  return (
    <>
      {!navbar && (
        <>
          <div className="relative top-0 flex h-16 bg-gray-900 items-center justify-center z-50">
            <p className="text-gray-400 text-[1.05rem] underline cursor-pointer">
              Get the latest on our COVID-19 response
            </p>
          </div>
          <div className="flex flex-col">
            <div className="relative z-50 grid grid-cols-3 p-5 md:px-10 2xl:px-20 bg-transparent">
              <div className="flex items-center cursor-pointer my-auto h-10">
                <Image
                  src="https://links.papareact.com/qd3"
                  width="150"
                  height="80"
                  objectFit="contain"
                  objectPosition="left"
                  className="max-h-[20px]"
                />
              </div>
              <div className="flex items-center justify-around px-5 text-white text-lg">
                <p className="cursor-pointer font-semibold">Places to stay</p>
                <p className="cursor-pointer font-semibold">Experiences</p>
                <p className="cursor-pointer font-semibold">
                  Online Experiences
                </p>
              </div>
              <div className="flex items-center space-x-4 justify-end text-white">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full bg-white text-gray-400">
                  <MenuIcon className="h-6 cursor-pointer" />
                  <UserCircleIcon className="h-6 cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="flex search-bar w-full items-center justify-center py-3" onClick={handleClick}>
              <div className="relative flex items-center md:border-2 rounded-full py-2 md:shadow-sm z-50 w-1/2 bg-white">
                <div className="items-nav flex flex-col flex-grow xl:px-3 md:px-2">
                  <label className="px-5 font-semibold">Location</label>
                  <input
                    className="pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
                    type="text"
                    placeholder="Where are you going?"
                  />
                </div>
                <div className="items-nav flex flex-col flex-grow">
                  <label className="px-5 font-semibold">Check in</label>
                  <input
                    className="pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
                    type="text"
                    placeholder="Add dates"
                  />
                </div>
                <div className="items-nav flex flex-col flex-grow">
                  <label className="px-5 font-semibold">Check out</label>
                  <input
                    className="pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
                    type="text"
                    placeholder="Add dates"
                  />
                </div>
                <div className="items-nav flex flex-col flex-grow">
                  <label className="px-5 font-semibold">Guests</label>
                  <input
                    className="pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
                    type="text"
                    placeholder="Add guests"
                  />
                </div>
                <SearchIcon className="hidden md:inline-flex h-8  bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
              </div>
            </div>
          </div>
        </>
      )}
      {navbar && <Header />}
    </>
  );
}

export default Navbar;
