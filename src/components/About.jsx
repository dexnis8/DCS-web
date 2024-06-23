/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { TextPlugin } from "gsap/TextPlugin";
import { useMediaQuery } from "@mui/material";

gsap.registerPlugin(TextPlugin);
export const About = ({ match }) => {
  const about = useRef();
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
            trigger: about.current,
            // start: "top 70%", // for desktop
            start: "top 50%",
            end: "top center",
            // end: "bottom bottom",
            scrub: 3,
            toggleActions: "restart none none none",
            // markers: true,
          },
        })

        .fromTo(
          ".about-img-s",
          {
            clipPath: "polygon(0 0, 0 0, 61% 45%, 0% 100%)",
            // rotationX: 0,
            // rotateZ: 360,
            backgroundColor: "#015182",
            duration: 3,
          },
          {
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            backgroundColor: "#EE4691",
            duration: 3,
          }
        )
        .fromTo(
          ".about-img",
          {
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)",
            backgroundColor: "#015182",
            duration: 3,
            scrollTrigger: {
              trigger: ".about-img-sm", // Use the wrapper container as the trigger
              start: "top top%",
              end: "bottom bottom",
              scrub: 2,
              toggleActions: "restart none none none",
            },
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            backgroundColor: "#EE4691",
            duration: 3, // Adjust duration as needed
          }
        )

        .fromTo(
          ".abt-header",
          {
            x: -100,
            y: -80,
            fontSize: "48px",
            duration: 2,
          },
          {
            x: 0,
            y: 0,
            fontSize: "36px",
            duration: 2, // Adjust duration as needed
          },
          "-=2"
        )
        .fromTo(
          ".abt-header-s",
          {
            x: -100,
            y: -80,
            opacity: 0,
            fontSize: "48px",
            duration: 1,
          },
          {
            x: 0,
            y: 0,
            fontSize: "36px",
            duration: 1,
            opacity: 1,
          },
          "-=2"
        )
        .fromTo(
          ".abt-p",
          {
            x: -100,
            opacity: 0.5,
            // y: -80,
            // fontSize: "48px",
            // duration: 2,
          },
          {
            x: 0,
            opacity: 1,
            duration: 2, // Adjust duration as needed
          },
          "-=2"
        )
        .fromTo(
          ".abt-p-sm",
          {
            x: -100,
            opacity: 0.5,
            // y: -80,
            // fontSize: "48px",
            // duration: 2,
          },
          {
            x: 0,
            opacity: 1,
            duration: 2, // Adjust duration as needed
          },
          "-=2"
        );
      // .reverse();
    },
    { scope: about }
  );

  return (
    <>
      <div
        className="container about flex flex-col md:grid grid-cols-2 pt-10 px-3 sm:px-10 gap-10  items-center "
        ref={about}
      >
        <div
          className={`${
            match ? "no-animation" : "about-img"
          } w-full rounded-lg h[500px] bg-primary-800 sm:bg-red-300 pt-5 relative`}
          // className={`about-img w-full rounded-lg h[600px] bg-red-300`}
        >
          <img src="/about.jpg" alt="about us" className="" />
          <div className="absolute py-5 px-3 w-[100px] h-fit bg-primary-800 text-center  top-0 rounded-ful ">
            {" "}
            <h2 className="text-sm font-bold text-white">
              Tested{" "}
              {/* <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="#4CAF50" />
                <path
                  d="M10 14.5L7.5 12L6.5 13L10 16.5L18 8.5L17 7.5L10 14.5Z"
                  fill="white"
                />
              </svg> */}
            </h2>
            <h2 className="text-sm font-bold text-white">Approved </h2>
            <h2 className="text-sm font-bold text-white text-center">&</h2>
            <h2 className="text-sm font-bold text-white">Trusted</h2>
          </div>
        </div>
        <div className="about-txt text-center sm:text-left flex flex-col gap-10">
          <h1
            className={`text-4xl sm:text-[48px] font-bold ${
              match ? "abt-header-sm " : "abt-header"
            } text-primary-800`}
          >
            About Us
          </h1>
          <p
            className={`text-xl text-grey-600 ${
              match ? "no-animation" : "abt-p"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            commodi consequuntur nam recusandae expedita cupiditate tenetur,
            voluptas incidunt quidem eligendi debitis sed excepturi vel
            molestias dolores? Magni autem labore et.
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            beatae, ad officiis consequuntur porro aliquam aut consequatur
            architecto commodi vitae illum molestiae quaerat. At officiis ipsa
            autem! Deleniti, harum quisquam.
          </p>
          <div>
            <button className="border py-3 px-5 rounded-lg font-semibold shadow text-white bg-red-300 abt-btn">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
