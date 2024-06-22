/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";

export const Explore = ({ match }) => {
  const explore = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          defaults: {
            duration: 3,
            ease: "power4.inOut",
          },
          scrollTrigger: {
            trigger: explore.current,
            start: "top 70%",
            end: "bottom bottom",
            scrub: 3,
            toggleActions: "restart none none none",
            // markers: true,
          },
        })

        .fromTo(
          ".card-1",
          {
            opacity: 0,
            transform: "translateX(-100%)",
            rotation: 0,
            duration: 3,
          },
          {
            opacity: 1,
            transform: "translateX(0%)",
            rotation: 360,
            duration: 3,
            scrollTrigger: {
              trigger: ".card-1",
              start: "top 70%",
              end: "bottom bottom",
              scrub: 3,
              toggleActions: "restart none none none",
              // markers: true,
            },
          }
        )
        .fromTo(
          ".card-2",
          {
            opacity: 0,
            transform: "translateY(-100%)",
            rotation: 0,
            duration: 3,
          },
          {
            opacity: 1,
            transform: "translateY(0%)",
            rotation: 360,
            duration: 3,
            scrollTrigger: {
              trigger: ".card-2",
              start: "top 70%",
              end: "bottom bottom",
              scrub: 3,
              toggleActions: "restart none none none",
              // markers: true,
            },
          },
          "-=3"
        )
        .fromTo(
          ".card-3",
          {
            opacity: 0,
            transform: "translateX(100%)",
            rotation: 0,
            duration: 3,
          },
          {
            opacity: 1,
            transform: "translateX(0%)",
            rotation: 360,
            duration: 3,
            scrollTrigger: {
              trigger: ".card-3",
              start: "top 70%",
              end: "bottom bottom",
              scrub: 3,
              toggleActions: "restart none none none",
              // markers: true,
            },
          },
          "-=3"
        )
        .fromTo(
          ".explore-head",
          {
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            // opacity: 0,
            y: -100,
          },
          {
            // opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            y: 0,
            scrollTrigger: {
              trigger: ".explore-head",
              start: "top 80%",
              end: "bottom bottom",
              scrub: 3,
              toggleActions: "restart none none none",
            },
          },
          "-=3"
        );
      // .reverse();
    },
    { scope: explore }
  );
  return (
    <>
      <div className="container px-3 sm:px-10 pt-20 sm:pt-0" ref={explore}>
        <div className=" text-center explore-head ">
          <h2 className=" text-4xl mb-2 sm:text-[48px] font-bold text-primary-800">
            Explore Our Programs
          </h2>
          <p className="sm:w-3/4 mx-auto mb-10 text-grey-600 text-lg">
            We've carefully designed these programs to cater to your learning
            needs and accommodate various age groups and schedule
          </p>
        </div>
        {/* Programs */}
        <div className="grid lg:grid-cols-3 gap-5">
          {/* Regular */}
          <div className="card-1 relative h-[350px] rounded-lg overflow-hidden group">
            <img
              src="/regular.jpg"
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute px-3 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center space-y-5">
              <h2 className="text-white text-2xl font-bold pt-3">Regular</h2>
              <p className="text-white text-center">
                For individuals who have completed secondary school, students
                awaiting university admission, higher education students,
                members of the National Youth Service Corps (NYSC), and working
                professionals.
              </p>
              <button className="px-10 py-2 bg-primary-800 font-semibold mt-10 text-white rounded hover:bg-primary-700 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                Learn More
              </button>
            </div>
          </div>
          {/* Weekends and holidays */}
          <div className="card-2 relative h-[350px] rounded-lg overflow-hidden group">
            <img
              src="/weekend.jpg"
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute px-3 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center space-y-5">
              <h2 className="text-white text-2xl font-bold pt-3">
                Weekends & Holidays
              </h2>
              <p className="text-white text-center">
                For students ranging from Junior Secondary School (JSS1) to
                Senior Secondary School (SS3)
              </p>
              <button className="px-10 py-2 bg-primary-800 font-semibold mt-10 text-white rounded hover:bg-primary-700 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                Learn More
              </button>
            </div>
          </div>
          {/* Summer */}
          <div className="card-3 relative h-[350px] rounded-lg overflow-hidden group">
            <img
              src="/summer.jpg"
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute px-3 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center space-y-5">
              <h2 className="text-white text-2xl font-bold pt-3">
                Summer Coding Camp
              </h2>
              <p className="text-white text-center">
                Designed for children aged 5 to 18, our program introduces them
                to various coding tracks such as Scratch, Python, Web
                development, and more, tailored to their age and skill level
              </p>
              <button className="px-10 py-2 bg-primary-800 font-semibold mt-10 text-white rounded hover:bg-primary-700 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
