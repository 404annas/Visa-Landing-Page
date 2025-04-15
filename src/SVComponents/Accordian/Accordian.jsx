import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "What is a student visa and why do I need one?",
      content:
        "A student visa is a document issued by a foreign country that allows you to study there. You need it to legally enroll and attend an educational institution in that country. Here are some key points about student visas and why you might need one.",
    },
    {
      title: "What is the consultation process like?",
      content:
        "We offer comprehensive immigration and visa consulting services, including visa application assistance, document preparation.",
    },
    {
      title: "How much do your services cost?",
      content:
        "We offer comprehensive immigration and visa consulting services, including visa application assistance, document preparation.",
    },
    {
      title: "How do I get started with your services?",
      content:
        "We offer comprehensive immigration and visa consulting services, including visa application assistance, document preparation.",
    },
    {
      title: "What is your success rate with visa applications?",
      content:
        "We offer comprehensive immigration and visa consulting services, including visa application assistance, document preparation.",
    },
  ];

  return (
    <div className="w-full px-10 my-10 space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border rounded-xl overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-8 text-left font-semibold bg-white hover:bg-gray-200 flex justify-between items-center"
          >
            <span className="sm:text-xl text-md">{item.title}</span>
            <span className="text-xl">
              {openIndex === index ? <ImCross /> : <FaPlus />}
            </span>
          </button>
          <div
            className={`transition-all duration-300 px-6 overflow-hidden ${
              openIndex === index ? "max-h-44 py-8" : "max-h-0"
            }`}
          >
            <p className="text-gray-700 text-md mb-4">{item.content}</p>
            <p className="text-gray-700 text-md">
              • Comprehensive Visa Assistance.
            </p>
            <p className="text-gray-700 text-md">• Visa Category Expertise</p>
            <p className="text-gray-700 text-md">
              • Transparency and Communication
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
