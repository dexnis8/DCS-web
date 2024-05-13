/* eslint-disable no-unused-vars */
import { useContext, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TransitionContext from "../context/TransitionContext";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Explore } from "../components/Explore";
import { Courses } from "../components/Courses";
import Testimonial from "../components/Testimonial";
import FAQs from "../components/FAQ";

export default function HomePage() {
  const main = useRef();
  const { completed } = useContext(TransitionContext);
  const scrollTween = useRef();
  const snapTriggers = useRef([]);
  const { contextSafe } = useGSAP(
    () => {
      if (!completed) return;
      let panels = gsap.utils.toArray(".panel"),
        scrollStarts = [0],
        snapScroll = (value) => value; // for converting a pixel-based scroll value to the closest panel scroll position

      // create a ScrollTrigger for each panel that's only concerned about figuring out when its top hits the top of the viewport. We'll use the "start" of that ScrollTrigger to figure out snapping positions.
      panels.forEach((panel, i) => {
        snapTriggers.current[i] = ScrollTrigger.create({
          trigger: panel,
          start: "top top",
        });
      });

      // once all the triggers have calculated their start/end, create the snap function that'll accept an overall progress value for the overall page, and then return the closest panel snapping spot based on the direction of scroll
      ScrollTrigger.addEventListener("refresh", () => {
        scrollStarts = snapTriggers.current.map((trigger) => trigger.start); // build an Array with just the starting positions where each panel hits the top of the viewport
        snapScroll = ScrollTrigger.snapDirectional(scrollStarts); // get a function that we can feed a pixel-based scroll value to and a direction, and then it'll spit back the closest snap position (in pixels)
      });

      ScrollTrigger.observe({
        type: "wheel,touch",
        onChangeY(self) {
          if (!scrollTween.current) {
            // find the closest snapping spot based on the direction of scroll
            let scroll = snapScroll(
              self.scrollY() + self.deltaY,
              self.deltaY > 0 ? 1 : -1
            );
            goToSection(scrollStarts.indexOf(scroll)); // scroll to the index of the associated panel
          }
        },
      });

      ScrollTrigger.refresh();
    },
    {
      dependencies: [completed],
      scope: main,
      revertOnUpdate: true,
    }
  );

  const goToSection = contextSafe((i) => {
    console.log("scroll to", i);
    scrollTween.current = gsap.to(window, {
      scrollTo: { y: snapTriggers.current[i].start, autoKill: false },
      duration: 1,
      onComplete: () => (scrollTween.current = null),
      overwrite: true,
    });
  });

  return (
    <main ref={main}>
      <section className=" panel bg-[#FFFFFF]">
        <Hero />
      </section>
      <section className="panel bg-primary-200">
        <About />
      </section>
      <section className="panel bg-white ">
        <WhyChooseUs />
      </section>
      <section className="panel bg-primary-200 inner-el scrollbar-hidden">
        <Explore />
      </section>
      <section className="panel bg-primary-200">
        <Courses />
      </section>
      <section className="panel bg-white">
        <Testimonial />
      </section>
      <section className="panel bg-white">
        <FAQs />
      </section>
      <section className="panel-sm bg-primary-200">
        <div className="flex flex-col pt-20 border h-full w-full justify-between">
          <div>
            <h1 className="text-[64px] font-bold text-primary-700">
              Join Us Today
            </h1>
            <button className="hover:bg-primary-700 transition-all duration-700 px-20 py-5 bg-red-300 rounded-lg text-white mt-5">
              Enroll Now
            </button>
          </div>
          <div className="bg-primary-700 py-7 text-center w-full">
            <h1 className="text-white font-bold text-2xl">
              Delux Coding School
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
