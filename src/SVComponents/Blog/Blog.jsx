import React from "react";
import { FaTags } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <section>
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
              <p className="text-center tracking-[0.5rem] font-bold mx-4 mb-4">
                LATEST NEWS
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
          <h1 className="sm:text-5xl text-2xl font-bold title-font md:w-[650px] w-full mx-auto text-black mb-4">
            Latest Blog & Article
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col items-center gap-10">
          <div className="flex flex-col gap-6 lg:w-1/2">
            <img
              src="https://html.xpressbuddy.com/e.visa/assets/img/blog/img_04.jpg"
              alt="Blog Pic"
            />
            <div className="flex items-center justify-between text-gray-600">
              <p className="text-red-900">
                <CiMenuKebab />
              </p>
              <div className="flex items-center gap-2">
                <p>
                  <FaTags />
                </p>
                <p>Study Visa</p>
              </div>
              <div className="flex items-center gap-2">
                <p>
                  <FaCalendarAlt />
                </p>
                <p>15 / 04 / 2025</p>
              </div>
              <div className="flex items-center gap-2">
                <p>
                  <FaComments />
                </p>
                <p>05</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl font-semibold">
                The Impact of Student Visa Consulting on Study Abroad..
              </h1>
              <p className="text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis possimus beatae rem sit accusamus cumque quaerat
                quasi optio quibusdam incidunt!
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:w-1/2">
            <div className="flex items-center gap-2 text-gray-500">
              <p className="text-red-900">
                <CiMenuKebab />
              </p>
              <p>
                <FaTags />
              </p>
              <p>Study Visa</p>
            </div>
            <div className="mx-10 flex flex-col gap-4">
              <h1 className="text-xl font-medium">
                Student Visa Consulting and the Road to Higher Education..
              </h1>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, maiores!
              </p>
            </div>
            <div className="flex items-center gap-2 mt-6 text-gray-500">
              <p className="text-red-900">
                <CiMenuKebab />
              </p>
              <p>
                <FaTags />
              </p>
              <p>Study Visa</p>
            </div>
            <div className="mx-10 flex flex-col gap-4">
              <h1 className="text-xl font-medium">
                Student Visa Consulting and the Road to Higher Education..
              </h1>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, maiores!
              </p>
            </div>
            <div className="flex items-center gap-2 mt-6 text-gray-500">
              <p className="text-red-900">
                <CiMenuKebab />
              </p>
              <p>
                <FaTags />
              </p>
              <p>Study Visa</p>
            </div>
            <div className="mx-10 flex flex-col gap-4">
              <h1 className="text-xl font-medium">
                Student Visa Consulting and the Road to Higher Education..
              </h1>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, maiores!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
