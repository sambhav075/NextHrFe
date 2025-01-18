import React from "react";
import Router from "next/router";
import AddUserForm from "@/components/AddUser"

const Employees = () => {
  return (
    <>
    <div className="p-6 bg-slate-50">
      {/* Back Button */}
      <div
        className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-gray-800"
        onClick={() => Router.back()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
        <span className="text-sm font-medium">Back</span>
      </div>

      {/* Title and Tab */}
      <div className="mt-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Employees</h1>
        <div className="border-b border-gray-300">
          <button className="text-blue-500 font-semibold border-b-2 border-blue-500 pb-2">
            DIRECTORY
          </button>
        </div>
      </div>

      {/* Search Section */}
      <div className="mt-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by Employee Name"
            className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute right-4 top-3 w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 12.75 4.5a7.5 7.5 0 0 0 3.9 12.15z"
            />
          </svg>
        </div>
      </div>

      {/* Illustration and Message */}
      <div className="mt-12 flex flex-col items-center">
        <img
          src="/searchill.png" 
          alt="Search Illustration"
          className="w-64 h-64"
        />
        <p className="mt-6 text-black">Search to view records</p>
      </div>
    </div>
    <div className="mt-8">
    <AddUserForm/>
    </div>
   
    </>
  );
};

export default Employees;
