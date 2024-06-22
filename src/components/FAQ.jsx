/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from "react-accessible-accordion";
// import "react-accessible-accordion/dist/fancy-example.css";
import "./FaqStyles.css";

const faqs = [
  {
    id: 1,
    header: "What is Delux Coding School?",
    text: `
Delux Coding School is an institution dedicated to providing high-quality coding and technology education. We offer a variety of programming tracks designed to prepare students for successful careers in the tech industry.
`,
  },
  {
    id: 2,
    header: "Who can enroll in Delux Coding School?",
    text: `We welcome individuals of all backgrounds and skill levels. Whether you're a complete beginner or an experienced coder looking to upskill, students or working professionals, our programs cater to a wide range of students.
`,
  },
  {
    id: 3,
    header: "What programming languages do you teach?",
    text: `Our curriculum covers a broad spectrum of programming languages and technologies relevant to the industry. Specific languages and tools vary by track, and our instructors ensure you gain proficiency in the latest industry-standard technologies.
`,
  },
  {
    id: 4,
    header: "How long are the programs, and what is the schedule like ",
    text: `Program durations vary depending on the track you choose, ranging from a few weeks to several months. We offer flexible scheduling options, including full-time, part-time, physical and online classes to accommodate your needs.
`,
  },
  {
    id: 5,
    header: `What are the prerequisites for enrolling in a program?`,
    text: `Prerequisites vary by track. Some programs require no prior coding experience, while others may have specific technical prerequisites. Please refer to our brochure or for detailed information on each track's requirements.
`,
  },
  {
    id: 6,
    header: `Can I take classes online, or are they only on-site?`,
    text: `You have the option to take classes either on-site at our facility or online. We offer remote learning opportunities with the same high-quality instruction as our on-site programs, providing you with flexibility and convenience.
 `,
  },
];

const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <section className="rc-accordion-card" id="faq">
      <div className="rc-accordion-header">
        <div
          className={`rc-accordion-toggle p-3 ${active === id ? "active" : ""}`}
          onClick={() => handleToggle(id)}
        >
          <h5 className="rc-accordion-title  text-center ">{header}</h5>
          <i className="fa fa-chevron-down sm:block hidden rc-accordion-icon font-bold text-lg">
            &#8595;
          </i>
        </div>
      </div>
      <div
        ref={contentEl}
        className={` text-[#474747] rc-collapse ${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="rc-accordion-body">
          <p className="mb-0">{text}</p>
        </div>
      </div>
    </section>
  );
};
const NewFAQs = ({ faqRef }) => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <>
      <div className="container rounded-lg shadow w-full lg:w-[1000px] font-Poppins mx-auto bg-white">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h4
                  className="capitalize font-DarkerGrotesque font-bold text-2xl text-primary-800  sm:text-4xl my-4 mx-2"
                  ref={faqRef}
                >
                  Frequently Asked Questions (FAQs)
                </h4>
                {faqs.map((faq, index) => {
                  return (
                    <AccordionItem
                      key={index}
                      active={active}
                      id={faq.id}
                      handleToggle={handleToggle}
                      faq={faq}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const FAQs = () => {
  return <NewFAQs />;
  //   return <OldFAQs />;
};

export default FAQs;

// function OldFAQs() {
//   return (
//     <div className="bg-white rounded-md pt-2">
//       <p className="capitalize font-medium text-sm  sm:text-lg my-4 mx-2">
//         Frequently Asked Questions (FAQs)
//       </p>
//       <Accordion allowZeroExpanded>
//         {faqs.map((item) => (
//           <AccordionItem key={item.uuid}>
//             <AccordionItemHeading>
//               <AccordionItemButton>{item.heading}</AccordionItemButton>
//             </AccordionItemHeading>
//             <AccordionItemPanel>
//               <p className="text-grey-1300">{item.content}</p>
//             </AccordionItemPanel>
//           </AccordionItem>
//         ))}
//       </Accordion>
//       <p className="text-center text-xs sm:text-sm text-grey-1300 py-3">
//         If you have additional questions or encounter any issues, you can reach
//         out to FlexiPay's customer support for assistance.
//       </p>
//     </div>
//   );
// }
