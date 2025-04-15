import React from "react";
import { Accordian } from "../svComponents";
import { motion } from "framer-motion";

const Popular = () => {
  return (
    <section className="bg-gray-100">
      <div className="flex flex-col">
        <div className="mt-10 mb-2 px-10 flex">
          <img
            className="w-6 h-6"
            src="https://html.xpressbuddy.com/e.visa/assets/img/icon/h_star.png"
            alt="Star"
          />
          <p className="text-center text-sm sm:text-base tracking-[0.5rem] font-bold mx-4">
            POPULAR
          </p>
          <img
            className="w-6 h-6"
            src="https://html.xpressbuddy.com/e.visa/assets/img/icon/h_star.png"
            alt="Star"
          />
        </div>
        <div className="px-10 flex sm:flex-row flex-col gap-8 sm:gap-0 sm:items-center justify-between">
          <h1 className="font-bold md:text-5xl text-3xl">Ask Question</h1>
          <div className="-translate-y-3">
            <p className="font-semibold text-xs my-2">
              WE HAVE WORLDWIDE 20K HAPPY STUDENT
            </p>
            <div className="flex justify-end">
              <img
                className=""
                src="https://html.xpressbuddy.com/e.visa/assets/img/faq/user_avatar.png"
                alt="Man"
              />
            </div>
          </div>
        </div>
        <Accordian />
        <div className="flex items-center justify-center -translate-y-16">
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
      </div>
    </section>
  );
};

export default Popular;
