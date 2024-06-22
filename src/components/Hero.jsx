/* eslint-disable no-unused-vars */
// import React from 'react'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export const Hero = () => {
  const cont = useRef();
  const tl = useRef();
  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          defaults: {
            duration: 2,
            ease: "power4.inOut",
          },
          //   scrollTrigger: {
          //     trigger: cont.current,
          //     start: "top top",
          //     end: "top center",
          //     scrub: true, // Smoothly animates the scroll
          //     // markers: true, // Shows markers for debugging
          //     toggleActions: "restart none none none",
          //   },
        })

        .fromTo(
          ".hero-text",
          { clipPath: "polygon(0% 100%, 0% 100%, 0% 0%, 0% 100%)", y: 100 },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            y: 0,
            duration: 2, // Adjust duration as needed
          }
        )
        .fromTo(
          ".hero-img",
          {
            clipPath: "polygon(0 100%, 0 100%, 0 0, 0 0)",
            x: -100,
          },
          {
            // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            clipPath: "polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)",
            x: 0,
            duration: 2, // Adjust duration as needed
          },
          "-=2"
        );
      // .reverse();
    },
    { scope: cont }
  );

  return (
    <>
      <div
        className="container px-3 md:px-10  flex flex-col justify-center mt-[100px] lg:mt-0 lg:grid grid-cols-2 items-center h-full"
        ref={cont}
      >
        <div className="text-center sm:text-left hero-text">
          <p className="p-2 bg-primary-200 w-fit rounded-lg text-sm sm:mx-0 mx-auto">
            <strong className="text-base text-primary-500">New:</strong>{" "}
            Weekends and Holidays for JSS1-SS3
          </p>
          <h1 className="text-primary-800 font-bold text-[40px] md:text-[64px] leading-tight ">
            Learn Coding And Become a Pro
          </h1>
          <p className="text-xl sm:text-2xl mt-2  sm:w-3/4 text-grey-600">
            Our expert-led project based curricullum is designed to take you
            from a newbie to pro
          </p>
          <div className="flex gap-3 mt-5 justify-center sm:justify-start">
            <button className="border py-3 px-2 text-sm sm:text-base sm:px-5 rounded-lg shadow bg-primary-700 text-white">
              Join Us Now
            </button>
            <button className="border py-3 px-2 text-sm sm:text-base sm:px-5 rounded-lg shadow bg-primary-200 text-">
              Download Our Brochure
            </button>
          </div>
        </div>
        <div>
          <code className="text-[250px] hidden sm:block md:text-[300px] hero-img  text-[#016798]">{`</>`}</code>
          {/* <code className="text-[200px]  text-">{`<></>`}</code> */}
          <div className="hidden scroll-down">
            <div className="arrow animate-bounce"></div>
          </div>
        </div>
      </div>
    </>
  );
};
