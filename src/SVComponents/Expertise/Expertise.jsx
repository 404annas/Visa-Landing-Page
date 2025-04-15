import React from "react";
import { motion } from "framer-motion";

const Expertise = () => {
  return (
    <section className="bg-gray-100 px-4">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-between">
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
            <div className="my-2 flex justify-center">
              <img
                className="w-6 h-6"
                src="https://html.xpressbuddy.com/e.visa/assets/img/icon/h_star.png"
                alt="Star"
              />
              <p className="text-center tracking-[0.5rem] font-bold text-sm sm:text-base mx-4 mb-4">
                HOW WE HELP CLIENT
              </p>
              <img
                className="w-6 h-6"
                src="https://html.xpressbuddy.com/e.visa/assets/img/icon/h_star.png"
                alt="Star"
              />
            </div>
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
          <h1 className="md:text-5xl text-2xl font-bold title-font md:w-[650px] w-full mx-auto text-black mb-4">
            Expertise from Seasoned Professionals
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col flex-wrap sm:-m-4 -mx-4 -mt-4 md:space-y-0 space-y-6 bg-white p-16 border border-gray-300">
          {/* Card 1 */}
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center group transition duration-300">
            <div className="w-30 h-30 inline-flex items-center justify-center border-2 border-gray-100 rounded-full bg-white group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-600 mb-5 flex-shrink-0 p-10 transition duration-300">
              <img
                className="block group-hover:hidden transition duration-300"
                src="https://html.xpressbuddy.com/e.visa/assets/img/icon/fr_01.svg"
                alt=""
              />
              <img
                className="hidden group-hover:block transition duration-300"
                src="https://html.xpressbuddy.com/e.visa/assets/img/icon/fr_01_h.svg"
                alt=""
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-black text-2xl title-font font-medium mb-5">
                University Information
              </h2>
              <p className="leading-relaxed text-base text-gray-600">
                University information is a crucial component of your..
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center group transition duration-300 md:border-l md:border-gray-300">
            <div className="w-30 h-30 inline-flex items-center justify-center border-2 border-gray-100 rounded-full bg-white group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-600 mb-5 flex-shrink-0 p-10 transition duration-300">
              <img
                className="block group-hover:hidden transition duration-300"
                src="https://html.xpressbuddy.com/e.visa/assets/img/icon/fr_02.svg"
                alt=""
              />
              <img
                className="hidden group-hover:block transition-all duration-300"
                src="https://html.xpressbuddy.com/e.visa/assets/img/icon/fr_02_h.svg"
                alt=""
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-black text-2xl title-font font-medium mb-5">
                Student Visa
              </h2>
              <p className="leading-relaxed text-base text-gray-600">
                A student visa is a legal authorization that allows
                international..
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center group transition duration-300 md:border-l md:border-gray-300">
            <div className="w-30 h-30 inline-flex items-center justify-center border-2 border-gray-100 rounded-full bg-white group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-600 mb-5 flex-shrink-0 p-10 transition duration-300">
              <img
                className="block group-hover:hidden transition duration-300"
                src="https://html.xpressbuddy.com/e.visa/assets/img/icon/fr_03.svg"
                alt=""
              />
              <img
                className="hidden group-hover:block transition duration-300"
                src="https://html.xpressbuddy.com/e.visa/assets/img/icon/fr_03_h.svg"
                alt=""
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-black text-2xl title-font font-medium mb-5">
                Our Coaching
              </h2>
              <p className="leading-relaxed text-base text-gray-600">
                Our Coaching offers life coaching that helps clients navigate..
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
