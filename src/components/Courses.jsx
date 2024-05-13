/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
export const Courses = () => {
  const courses = useRef();
  const tl = useRef();

  const coursesArr = [
    {
      id: 1,
      title: "Front End Development",
      duration: "3 months",
      price: 150,
    },
    {
      id: 2,
      title: "Front End Development",
      duration: "6 months",
      price: 250,
    },
    {
      id: 3,
      title: "Back End Development",
      duration: "6 months",
      price: 250,
    },
    {
      id: 4,
      title: "Full Stack Development",
      duration: "1 year",
      price: 450,
    },
    {
      id: 5,
      title: " App Development",
      duration: "6 months",
      price: 250,
    },
    {
      id: 6,
      title: "Data Analyst",
      duration: "3 months",
      price: 150,
    },
    {
      id: 7,
      title: "Data Science",
      duration: "6 months",
      price: 250,
    },
    {
      id: 8,
      title: "Cyber Security",
      duration: "6 months",
      price: 250,
    },
    {
      id: 9,
      title: "Product Design(UI/UX)",
      duration: "3 months",
      price: 150,
    },
  ];

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          defaults: {
            duration: 3,
            ease: "power4.inOut",
          },
          scrollTrigger: {
            trigger: courses.current,
            start: "top 70%",
            end: "bottom bottom",
            scrub: 3,
            toggleActions: "restart none none none",
            // markers: true,
          },
        })

        .fromTo(
          ".card-1,.card-4",
          {
            opacity: 0,
            transform: "translateX(-100%)",
            // rotation: 0,
            duration: 3,
          },
          {
            opacity: 1,
            transform: "translateX(0%)",
            // rotation: 360,
            duration: 3, // Adjust duration as needed
          }
        )
        .fromTo(
          ".card-2",
          {
            opacity: 0,
            transform: "translateY(-120%)",
            // rotation: 0,
            duration: 3,
          },
          {
            opacity: 1,
            transform: "translateY(0%)",
            // rotation: 360,
            duration: 3, // Adjust duration as needed
          },
          "-=3"
        )
        .fromTo(
          ".card-6,.card-7,.card-8, .card-9",
          {
            // opacity: 0,
            transform: "translateY(-118%)",
            // rotation: 0,
            duration: 3,
          },
          {
            opacity: 1,
            transform: "translateY(0%)",
            // rotation: 360,
            duration: 3, // Adjust duration as needed
          },
          "-=3"
        )
        .fromTo(
          ".card-3",
          {
            opacity: 0,
            transform: "translateX(120%)",
            // rotation: 0,
            duration: 3,
          },
          {
            opacity: 1,
            transform: "translateX(0%)",
            // rotation: 360,
            duration: 3, // Adjust duration as needed
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
    { scope: courses }
  );
  return (
    <>
      <div className="container px-10 pt-7" ref={courses}>
        <div className=" text-center explore-head ">
          <h2 className=" text-4xl mb-5  font-bold text-primary-800">
            Available Courses
          </h2>
          {/* <p className="sm:w-3/4 mx-auto mb-10 text-grey-600 text-lg">
            Learn coding from industry experts either in our well-conducive
            learning environment or remotely.
          </p> */}
        </div>

        <div className="grid grid-cols-5 gap-5">
          {coursesArr?.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-white overflow-hidden relative rounded-lg p-4 text-left group card-${
                idx + 1
              }`}
            >
              <h3 className="text-black text-base font-semibold mb-3">
                {item.title}
              </h3>
              <div className="h-[100px] mb-3 border overflow-hidden w-full">
                <img src="/img-1.jpg" alt="img" className="w-full h-full" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="py-1 px-3 text-sm font-semibold bg-primary-200">
                  {item.duration}
                </span>
                <span className="py-1 px-3 text-sm font-semibold text-white bg-primary-500">
                  ₦ {item.price}k
                </span>
              </div>
              <div className="flex  items-center gap-3">
                <span className="flex items-center gap-1  text-sm font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#888888"
                      d="M12 0C7.268 0 3 4.168 3 8.893c0 3.076 2.513 6.246 7.03 12.07l1.97 2.756a.5.5 0 0 0 .764 0l1.97-2.756C18.487 15.139 21 12.969 21 8.893 21 4.168 16.732 0 12 0zm0 12.8a4.8 4.8 0 1 1 0-9.6 4.8 4.8 0 0 1 0 9.6z"
                    ></path>
                  </svg>
                  <span> On-site/Online</span>
                </span>
                {/* <span className="flex items-center gap-1 text-grey-600  text-sm font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#888888"
                      d="M12 0C7.268 0 3 4.168 3 8.893c0 3.076 2.513 6.246 7.03 12.07l1.97 2.756a.5.5 0 0 0 .764 0l1.97-2.756C18.487 15.139 21 12.969 21 8.893 21 4.168 16.732 0 12 0zm0 12.8a4.8 4.8 0 1 1 0-9.6 4.8 4.8 0 0 1 0 9.6z"
                    ></path>
                  </svg>
                  <span># 500k</span>
                </span> */}
              </div>
              <div className="transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/50 w-full h-full">
                <button className="px-10 py-3 bg-red-300 hover:opacity-100 opacity-75 rounded-lg text-white font-bold">
                  Enroll now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
