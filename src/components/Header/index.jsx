import React from "react";
import {
  MagnifyingGlassIcon,
  BellIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "@/context/authContext";
import Link from "next/link"; 
const Header = () => {
    const { user} = useAuth();
  return (
    <header className="bg-[#82CAFF] border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Left Section: Company Logo */}
        <Link href="/">
        <div className="flex items-center space-x-4 flex-shrink-0">
          <img
            src="/comapny.png"
            alt="Company Logo"
            className="h-12 w-auto hover:opacity-90 transition-opacity"
          />
          <span className="text-2xl font-bold text-gray-800 tracking-tight">
            NEXTHR
          </span>
        </div>
        </Link>
        {/* Center Section: Search Bar */}
        <div className="relative flex-1 max-w-2xl mx-8">
          <input
            type="text"
            placeholder="Search by Name , Employee Id..."
            className="w-full bg-gray-50 border border-gray-300 rounded-full py-2.5 px-5 pl-12 text-gray-700 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-4 top-3" />
        </div>

        {/* Right Section: Icons and Profile */}
        <div className="flex items-center space-x-8">
          {/* Clock Icon */}
          <button
            type="button"
            className="flex items-center text-gray-600 hover:text-blue-600 focus:outline-none group transition-colors"
          >
            <ClockIcon className="h-6 w-6 group-hover:scale-105 transition-transform" />
            <span className="hidden md:block ml-2 text-sm font-medium">
              Clock In/Out
            </span>
          </button>

          {/* Notification Icon */}
          <button
            type="button"
            className="relative text-gray-600 hover:text-blue-600 focus:outline-none group transition-colors"
          >
            <BellIcon className="h-6 w-6 group-hover:scale-105 transition-transform" />
            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center ring-2 ring-white">
              3
            </span>
          </button>

          {/* Profile Section */}
          <div className="flex items-center space-x-3 cursor-pointer group">
            <div className="relative">
              <Link href="/signUp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-10 w-10 rounded-full object-cover border-2 border-gray-200 group-hover:border-blue-500 transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />

              </svg>
              </Link>

              <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <span className="hidden md:block text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
         {/* {user.email} */}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
