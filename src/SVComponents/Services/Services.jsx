import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="bg-black text-white px-4">
      <div className="flex items-center justify-between px-6 -translate-y-16">
        <motion.img
          src="https://html.xpressbuddy.com/e.visa/assets/img/shape/f_shape1.png"
          alt=""
          className="w-20 h-20"
          animate={{ y: [0, -20, 0, 20, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.img
          src="https://html.xpressbuddy.com/e.visa/assets/img/shape/f_shape2.png"
          alt=""
          className="w-20 h-20"
          animate={{ y: [0, 20, 0, -20, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <div className="flex flex-col container mx-auto p-4">
        <div className="flex items-center my-2">
          <img
            className="w-6 h-6"
            src="https://html.xpressbuddy.com/e.visa/assets/img/icon/h_star.png"
            alt="Star"
          />
          <p className="text-center text-sm sm:text-base tracking-[0.5rem] font-bold text-white mx-4">
            SERVICES
          </p>
          <img
            className="w-6 h-6"
            src="https://html.xpressbuddy.com/e.visa/assets/img/icon/h_star.png"
            alt="Star"
          />
        </div>

        <div className="flex sm:flex-row sm:gap-0 flex-col gap-4 sm:items-center justify-between mb-10 my-4">
          <h1 className="md:text-5xl text-3xl font-bold">Easy Study Abroad</h1>
          <div>
            <a className="flex items-center gap-4 relative mr-5 group font-semibold cursor-pointer text-white transition-all">
              <p className="after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 group-hover:after:w-full text-lg">
                More Services
              </p>
              <p className="text-lg">
                <BsArrowRightCircleFill />
              </p>
            </a>
          </div>
        </div>

        <section className="body-font">
          <div className="container pt-16 pb-64 mx-auto">
            <div className="flex lg:flex-row flex-col items-center flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 lg:w-1/4 flex lg:border-b lg:border-gray-800">
                <div className="flex-grow pl-6 hover:bg-gray-800/30 cursor-pointer p-6 rounded-lg transition-all">
                  <div className="w-12 h-12 inline-flex items-center justify-center mb-6 flex-shrink-0">
                    <img
                      src="https://html.xpressbuddy.com/e.visa/assets/img/icon/s_icon01.svg"
                      alt="Icon"
                    />
                  </div>
                  <h2 className="text-white text-2xl title-font font-medium mb-6">
                    Career Counseling
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Assessment of eligibility for different student visa..
                  </p>
                  <a className="mt-16 tracking-tight text-xs font-semibold cursor-pointer inline-flex items-center">
                    READ MORE
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="p-4 lg:w-1/4 flex lg:border-l lg:border-b lg:border-gray-800">
                <div className="flex-grow pl-6 hover:bg-gray-800/30 cursor-pointer p-6 rounded-lg transition-all">
                  <div className="w-12 h-12 inline-flex items-center justify-center mb-6 flex-shrink-0">
                    <img
                      src="https://html.xpressbuddy.com/e.visa/assets/img/icon/s_icon02.svg"
                      alt="Icon"
                    />
                  </div>
                  <h2 className="text-white text-2xl title-font font-medium mb-6">
                    Visa Guidance
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Offering information about visa requirements..
                  </p>
                  <a className="mt-16 tracking-tight text-xs font-semibold cursor-pointer inline-flex items-center">
                    READ MORE
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="p-4 lg:w-1/4 flex lg:border-l lg:border-b lg:border-gray-800">
                <div className="flex-grow pl-6 hover:bg-gray-800/30 cursor-pointer p-6 rounded-lg transition-all">
                  <div className="w-12 h-12 inline-flex items-center justify-center mb-6 flex-shrink-0">
                    <img
                      src="https://html.xpressbuddy.com/e.visa/assets/img/icon/s_icon03.svg"
                      alt="Icon"
                    />
                  </div>
                  <h2 className="text-white text-2xl title-font font-medium mb-6">
                    Financial Planning
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Advising on demostrating sufficent financial..
                  </p>
                  <a className="mt-16 tracking-tight text-xs font-semibold cursor-pointer inline-flex items-center">
                    READ MORE
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="p-4 lg:w-1/4 flex lg:border-l lg:border-b lg:border-gray-800">
                <div className="flex-grow pl-6 hover:bg-gray-800/30 cursor-pointer p-6 rounded-lg transition-all">
                  <div className="w-12 h-12 inline-flex items-center justify-center mb-6 flex-shrink-0">
                    <img
                      src="https://html.xpressbuddy.com/e.visa/assets/img/icon/s_icon04.svg"
                      alt="Icon"
                    />
                  </div>
                  <h2 className="text-white text-2xl title-font font-medium mb-6">
                    Application Assist
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Assisting with compiling required documents..
                  </p>
                  <a className="mt-16 tracking-tight text-xs font-semibold cursor-pointer inline-flex items-center">
                    READ MORE
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="p-4 lg:w-1/4 flex lg:border-gray-800">
                <div className="flex-grow pl-6 hover:bg-gray-800/30 cursor-pointer p-6 rounded-lg transition-all">
                  <div className="w-12 h-12 inline-flex items-center justify-center mb-6 flex-shrink-0">
                    <img
                      src="https://html.xpressbuddy.com/e.visa/assets/img/icon/s_icon05.svg"
                      alt="Icon"
                    />
                  </div>
                  <h2 className="text-white text-2xl title-font font-medium mb-6">
                    Document Prepare
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Assisting in gathering required documents..
                  </p>
                  <a className="mt-16 tracking-tight text-xs font-semibold cursor-pointer inline-flex items-center">
                    READ MORE
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="p-4 lg:w-1/4 flex lg:border-l lg:border-gray-800">
                <div className="flex-grow pl-6 hover:bg-gray-800/30 cursor-pointer p-6 rounded-lg transition-all">
                  <div className="w-12 h-12 inline-flex items-center justify-center mb-6 flex-shrink-0">
                    <img
                      src="https://html.xpressbuddy.com/e.visa/assets/img/icon/s_icon06.svg"
                      alt="Icon"
                    />
                  </div>
                  <h2 className="text-white text-2xl title-font font-medium mb-6">
                    Health Guide
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Offering information about housing, orientation..
                  </p>
                  <a className="mt-16 tracking-tight text-xs font-semibold cursor-pointer inline-flex items-center">
                    READ MORE
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="p-4 lg:w-1/4 flex lg:border-l lg:border-gray-800">
                <div className="flex-grow pl-6 hover:bg-gray-800/30 cursor-pointer p-6 rounded-lg transition-all">
                  <div className="w-12 h-12 inline-flex items-center justify-center mb-6 flex-shrink-0">
                    <img
                      src="https://html.xpressbuddy.com/e.visa/assets/img/icon/s_icon07.svg"
                      alt="Icon"
                    />
                  </div>
                  <h2 className="text-white text-2xl title-font font-medium mb-6">
                    Language Tasks
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Provide guidance on language proficiency..
                  </p>
                  <a className="mt-16 tracking-tight text-xs font-semibold cursor-pointer inline-flex items-center">
                    READ MORE
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="p-4 lg:w-1/4 flex lg:border-l lg:border-gray-800">
                <div className="flex-grow pl-6 hover:bg-gray-800/30 cursor-pointer p-6 rounded-lg transition-all">
                  <div className="w-12 h-12 inline-flex items-center justify-center mb-6 flex-shrink-0">
                    <img
                      src="https://html.xpressbuddy.com/e.visa/assets/img/icon/s_icon08.svg"
                      alt="Icon"
                    />
                  </div>
                  <h2 className="text-white text-2xl title-font font-medium mb-6">
                    Visa Submit
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Assisting in submitting the visa application..
                  </p>
                  <a className="mt-16 tracking-tight text-xs font-semibold cursor-pointer inline-flex items-center">
                    READ MORE
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <motion.img
                src="https://html.xpressbuddy.com/e.visa/assets/img/shape/f_shape2.png"
                alt=""
                className="w-20 h-20"
                animate={{ y: [0, -20, 0, 20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src="https://html.xpressbuddy.com/e.visa/assets/img/shape/f_shape2.png"
                alt=""
                className="w-20 h-20"
                animate={{ y: [0, 20, 0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Services;
