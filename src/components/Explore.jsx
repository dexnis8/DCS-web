/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";

export const Explore = () => {
  const explore = useRef();
  return (
    <>
      <div>
        <div className=" why-head text-center " ref={explore}>
          <h2 className=" text-4xl mb-2 sm:text-[48px] font-bold text-primary-800">
            Explore Our Programs
          </h2>
          <p className="sm:w-3/4 mx-auto text-grey-600 text-lg">
            We've carefully designed these programs to cater to your learning
            needs and accommodate various age groups and schedule
          </p>
        </div>
        {/* Programs */}
        {/* <div className="flex flex-col gap-10">
          {[1, 2, 3].map((program) => (
            <>
              <div key={program} className="grid grid-cols-9 ">
                <div className="col-span-4 border h-[475px] w-[357px] rounded-lg"></div>
                <div className="col-span-5 border "></div>
              </div>
            </>
          ))}
        </div> */}
      </div>
    </>
  );
};
