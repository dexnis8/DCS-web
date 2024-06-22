/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const WhyChooseUs = ({ match }) => {
  const why = useRef();
  // const tl = useRef();
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".why-box");
      boxes.forEach((box) => {
        gsap.fromTo(
          box,
          { x: -300, rotation: 0 },
          {
            x: 0,
            rotation: 360,
            scrollTrigger: {
              trigger: box,
              start: "top 70%",
              end: "bottom bottom",
              scrub: 3,
              toggleActions: "restart none none none",
              // markers: true,
            },
          }
        );

        gsap.fromTo(
          ".why-head",
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
              trigger: ".why-head",
              start: "top 80%",
              end: "bottom bottom",
              scrub: 3,
              toggleActions: "restart none none none",
            },
          }
        );
        gsap.fromTo(
          ".card-txt",
          {
            scale: 0.5,
            opacity: 0,

            // y: -100,
          },
          {
            opacity: 1,
            scale: 1,
            stagger: 0.2,
            // y: 0,
            scrollTrigger: {
              trigger: ".card-txt",
              start: "top 70%",
              end: "top bottom",
              scrub: 3,
              toggleActions: "restart none none none",
            },
          },
          "-=2"
        );
      });
    },
    { scope: why }
  );

  return (
    <>
      <div className="container px-3 md:px-10 pt-10 why" ref={why}>
        <div className={` ${match ? "no-animation" : "why-head"} text-center`}>
          <h2 className=" text-4xl mb-2 sm:text-[48px] font-bold text-primary-800">
            Why Choose Us{" "}
          </h2>
          <p className="sm:w-3/4 mx-auto text-grey-600 text-lg">
            Beyond being affordable and providing 24/7 electricity and quality
            internet in a conducive environment, here are some more reasons
          </p>
        </div>

        <div className=" md:grid grid-cols-3 gap-5 mt-10">
          <div className=" overflow-hidden flex pl-2 flex-col gap-3 items-center justify-center">
            <span
              className={`${
                match ? "no-animation" : "why-box"
              } h-[100px] w-[100px] bg-primary-800 rounded-lg border `}
            >
              <img src="" alt="" />
            </span>
            <div
              className={`flex flex-col ${
                match ? "no-animation" : "card-txt"
              } gap-3 items-center justify-center`}
            >
              <h3 className="font-semibold text-2xl text-primary-800 mt-2">
                Project Based
              </h3>
              <p className="text-grey-600">
                We believe in learning by doing. Our classes emphasize hands-on
                coding exercises and projects from day one, allowing you to
                apply what you learn immediately.
              </p>
              <span className="text-[64px] font-bold text-primary-800  opacity-50">
                01.
              </span>
            </div>
          </div>

          <div className=" overflow-hidden flex pl-2 flex-col gap-3 items-center justify-center">
            <span
              className={`${
                match ? "no-animation" : "why-box"
              } h-[100px] w-[100px] bg-red-300 rounded-lg border `}
            >
              <img src="" alt="" />
            </span>
            <div
              className={`flex flex-col ${
                match ? "no-animation" : "card-txt"
              } gap-3 items-center justify-center`}
            >
              <h3 className="font-semibold text-2xl text-red-300 mt-2">
                One-on-one
              </h3>
              <p className="text-grey-600">
                Our instructor-to-student ratio is 1:1. We offer personalized
                guidance, helping you overcome challenges and achieve your
                goals.
              </p>
              <span className="text-[64px] font-bold text-red-300  opacity-50">
                02.
              </span>
            </div>
          </div>
          <div className=" overflow-hidden flex pl-2 flex-col gap-3 items-center justify-center">
            <span
              className={`${
                match ? "no-animation" : "why-box"
              } h-[100px] w-[100px] bg-grey-600 rounded-lg border `}
            >
              <img src="" alt="" />
            </span>
            <div
              className={`flex flex-col ${
                match ? "no-animation" : "card-txt"
              } gap-3 items-center justify-center`}
            >
              <h3 className="font-semibold text-2xl text-grey-600 mt-2">
                Industry Relevant Curriculum
              </h3>
              <p className="text-grey-600">
                Our curriculum is carefully crafted to align with industry
                trends and demands. You'll learn the latest tools and
                technologies used by top tech companies.
              </p>
              <span className="text-[64px] font-bold text-grey-600 opacity-50">
                03.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
