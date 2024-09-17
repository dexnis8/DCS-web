/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import img from "../assets/userID.png";

const Testimonial = () => {
  const data = [
    {
      id: 0,
      image: "/isaac.png",
      name: "Isaac",
      stack: "Full-Stack Developer",
      text: `
I did my Full-stack Developer training at Delux Coding School. The journey was awesome, great tutors and mentors, nice location easily accessible and a conducive coding environment.`,
    },
    {
      id: 1,
      image: "/smart.jpeg",
      name: "Smart",
      stack: "Backend Developer",
      text: `
I'm thoroughly enjoying my full stack web development journey at Delux coding school . My tutor's expertise, guidance, and support have been invaluable. The way they break down complex concepts into understandable bits has made my learning experience seamless. Their patience, encouragement, and feedback have helped me grow confidently as a developer. The curriculum is well-structured, and the hands-on exercises have given me practical experience. I highly recommend Delux Tech School to anyone looking to gain top-notch web development skills.`,
    },
    {
      id: 2,
      image: "/vic.jpeg",
      name: "Victor",
      stack: "Backend Developer",
      text: `
The journey to being a back-end developer has been adventurous and an interesting one that comes with a lot of determination, passion and dedication and also headaches, but God has kept me going. I'm very close to the end of my program and I really appreciate Delux coding school for it's great teaching techniques and motivation to push forward and most importantly God, who gave me the grace to even start the program. If I can do it, then what are you still waiting for?`,
    },
    {
      id: 3,
      image: "/ballyroyals.jpeg",
      name: "Balikis",
      stack: "Frontend Developer",
      text: `
Recently joined to learn Frontend Development, and I'm consistently impressed by how much I've learned in such a short period. I highly recommend Delux Coding School
      `,
    },
    {
      id: 3,
      image: "/slender.jpg",
      name: "Idris",
      stack: "Data Analysis",
      text: `
I did my data analysis training at Delux Coding School. It's excellent institution that any tech enthusiast can embark on their journey with.
      `,
    },
  ];
  return (
    <div className=" flex h-[70%] w-full flex-col lg:grid lg:grid-cols-5 lg:w-[1200px] bg-white shadow-md overflow-hidden rounded-lg mx-auto">
      <div className="col-span-2 font-bold p-5 lg:p-0 bg-primary-800 flex justify-center items-center  h-[80%] rounded-br-[50px] ">
        <h1 className="relative lg:w-[250px] text-2xl text-center sm:text-left sm:text-3xl  md:text-5xl text-white ">
          <span className="-top-3 -left-10 h-[40px] w-[40px] hidden sm:flex justify-center items-center text-primary-800  rounded-full pt-5 rotate-180 absolute bg-slate-200">
            "
          </span>
          What our students are saying
        </h1>
      </div>
      <div
        title="Slide Paused"
        className="flex cursor-pointer w-full py-12 col-span-3 overflow-hidden flex-col gap-2 justify-center items-center"
      >
        {/* I added so many props so I'll remember they exist whenever I want to use this carousel. Below is the link to the docs */}
        {/* http://react-responsive-carousel.js.org/storybook/index.html?path=/story/01-basic--base */}
        <Carousel
          autoPlay
          showArrows
          swipeable={true}
          showIndicators={true}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          showThumbs={false}
          emulateTouch
          //   autoFocus
          width={"100%"}
          interval={7000}
          stopOnHover
          // transitionTime={5000}
        >
          {data.map((testimonial) => (
            <div key={testimonial.id} className="">
              <div className=" shadow-lg mb-2 h-[150px] mx-auto w-[150px] bg-slate-600 rounded-full overflow-hidden rounded-tr-[50px] ">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <h4 className="text-2xl font-bold ">{testimonial.name}</h4>
              <span className="text-lg font font-bold text-grey-400 ">
                {testimonial.stack}
              </span>
              {/* <div className="ratings"></div> */}
              <p className="mt-4 w-[35%]  sm:w-[75%] text-grey-200 mx-auto text-center font-Poppins">
                {testimonial.text}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
