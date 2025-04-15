import React from "react";
import { Button } from "../../SVComponents/svComponents";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  return (
    <section className="bg-white my-10 container md:mx-auto px-4">
      <div className="flex flex-col">
        <div className="my-2 flex">
          <img
            className="w-6 h-6"
            src="https://html.xpressbuddy.com/e.visa/assets/img/icon/h_star.png"
            alt="Star"
          />
          <p className="text-center tracking-[0.5rem] text-sm sm:text-base font-bold mx-4">
            ABOUT US
          </p>
          <img
            className="w-6 h-6"
            src="https://html.xpressbuddy.com/e.visa/assets/img/icon/h_star.png"
            alt="Star"
          />
        </div>

        <div className="my-4">
          <h1 className="font-bold md:text-5xl text-3xl">
            Since 1998 - Unparalleled Comprehensive
          </h1>
          <h1 className="font-bold tmd:text-5xl text-3xl mt-2">
            Student Visa Guide
          </h1>
        </div>

        <div className="flex items-center lg:flex-row flex-col mt-6">
          <div className="flex flex-col">
            <div>
              <p className="text-gray-500 text-base font-medium">
                Expert advice, step-by-step instructions, and insider tips to
                help you navigate the student visa application process with
                confidence and success Simplified Steps, Proven Strategies,
                Unwavering Support!"
              </p>
            </div>

            <div className="flex md:flex-row flex-col md:gap-40">
              <div className="text-white">
                <Button content={"E.Visa History"} />
              </div>

              <div className="md:w-1/2">
                <p className="text-gray-600 text-base font-medium mt-12">
                  Unlock Your Educational Journey Abroad: The Essential Student
                  Gateway to Global Learning
                </p>
                <p className="flex gap-3 items-center text-gray-800 text-base font-medium sm:mt-4 mt-6 sm:mb-0 mb-6 cursor-pointer">
                  Explore More Insight About us
                  <p>
                    <FaArrowRightLong />
                  </p>
                </p>
              </div>
            </div>
          </div>

          <div>
            <img
              className="md:w-[500px] lg:w-[700px]"
              src="https://html.xpressbuddy.com/e.visa/assets/img/about/about_img2.png"
              alt="Graduate Cap"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
