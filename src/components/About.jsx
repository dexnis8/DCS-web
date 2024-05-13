/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
export const About = () => {
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
            start: "top 70%",
            end: "bottom bottom",
            scrub: 2,
            toggleActions: "restart none none none",
            // markers: true,
          },
        })

        .fromTo(
          ".about-img",
          {
            clipPath: "polygon(0 0, 0 0, 61% 45%, 0% 100%)",
            // rotationX: 0,
            // rotateZ: 360,
            backgroundColor: "#015182",
            duration: 3,
          },
          {
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            // x: 0,
            // rotationX: 180,
            // rotation: 360,
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
        );
      // .reverse();
    },
    { scope: about }
  );

  return (
    <>
      <div
        className="container about grid grid-cols-2 pt-10 px-10 gap-10  items-center "
        ref={about}
      >
        <div className="about-img rounded-lg h-[500px] bg-red-300">Image</div>
        <div className="about-txt  text-left flex flex-col gap-10">
          <h1 className="text-4xl sm:text-[48px] font-bold abt-header text-primary-800">
            About Us
          </h1>
          <p className="text-xl text-grey-600 abt-p">
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
