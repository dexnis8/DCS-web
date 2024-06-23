// import React from 'react'

import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col pt-20 border h-full w-full justify-between">
        <div>
          <h1 className="text-[48px] sm:text-[64px] font-bold text-primary-700">
            Join Us Today
          </h1>
          <button className="hover:bg-primary-700 transition-all duration-700 px-10 sm:px-20 py-3 mb-10 sm:mb-0 sm:py-5 bg-red-300 rounded-lg text-white mt-5">
            <Link to="https://api.whatsapp.com/send?phone=2349032565436&text=My%20name%20is%20________%2C%20and%20I%20would%20like%20to%20inquire%20about%20______.">
              {" "}
              Enroll Now
            </Link>
          </button>
        </div>
        <div className="bg-primary-700 -mb-14  sm:mb-0 py-7 text-center w-full">
          <h1 className="text-white font-bold text-2xl">Delux Coding School</h1>
        </div>
      </div>
    </>
  );
};
