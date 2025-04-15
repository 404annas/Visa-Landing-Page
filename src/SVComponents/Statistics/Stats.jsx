import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <div>
      <section className="-translate-y-44 body-font px-4">
        <div
          className="container mx-auto sm:p-4 lg:p-0 flex md:flex-row flex-col items-center bg-zinc-900"
          style={{
            backgroundImage: `url(https://html.xpressbuddy.com/e.visa/assets/img/bg/cta_shape.png)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="Flag"
              src="https://plus.unsplash.com/premium_photo-1681912584285-7787e19567cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybCUyMGhvbGRpbmclMjBjYW5hZGElMjBmbGFnJTIwaW4lMjBoYW5kfGVufDB8fDB8fHww"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-18 md:pl-16 pb-4 flex flex-col justify-between md:items-start md:text-left items-center text-center">
            <div className="flex items-center mb-8">
              <img
                className="w-6 h-6"
                src="https://html.xpressbuddy.com/e.visa/assets/img/icon/h_star.png"
                alt="Star"
              />
              <p className="text-center tracking-[0.5rem] font-semibold text-white mx-4">
                FREE VISA
              </p>
              <img
                className="w-6 h-6"
                src="https://html.xpressbuddy.com/e.visa/assets/img/icon/h_star.png"
                alt="Star"
              />
            </div>
            <h1 className="title-font sm:text-4xl text-2xl mb-8 font-semibold text-white">
              Student and Experts Love Us. &nbsp;
              <br className="hidden lg:inline-block" />
              100% Success Rate
            </h1>
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
        </div>

        <section className="body-font">
          <div className="container px-5 py-10 mx-auto border border-gray-200">
            <div className="flex justify-between flex-wrap -m-4 text-center">
              {/* <!-- CARD 1 --> */}
              <div className="group p-4 sm:w-1/4 w-1/2 relative">
                <h2 className="title-font text-center font-light sm:text-8xl text-3xl text-gray-800 my-4">
                  30K
                </h2>
                <p className="text-red-900 text-3xl mx-10">
                  <TfiLayoutMenuSeparated />
                </p>
                <p className="leading-tight font-medium text-2xl w-52 text-start mx-auto text-gray-800 mt-4">
                  Clients
                </p>
                {/* <!-- Red bottom border --> */}
                <span className="absolute -bottom-6 -left-1 h-[3px] w-0 bg-red-500 group-hover:w-[151.5%] transition-all duration-500 ease-in-out"></span>
              </div>

              {/* <!-- CARD 2 --> */}
              <div className="group p-4 sm:w-1/4 w-1/2 border-l border-gray-300 relative">
                <h2 className="title-font font-light sm:text-8xl text-3xl text-gray-800 my-4">
                  100%
                </h2>
                <p className="text-red-900 text-3xl mx-10">
                  <TfiLayoutMenuSeparated />
                </p>
                <p className="leading-tight font-medium text-2xl w-52 text-start mx-auto text-gray-800 mt-4">
                  Process
                </p>
                <span className="absolute -bottom-6 -left-1 h-[3px] w-0 bg-red-500 group-hover:w-[151.5%] transition-all duration-500 ease-in-out"></span>
              </div>

              {/* <!-- CARD 3 --> */}
              <div className="group p-4 sm:w-1/4 w-1/2 md:border-l md:border-gray-300 relative">
                <h2 className="title-font font-light sm:text-8xl text-3xl text-gray-800 my-4">
                  1 D
                </h2>
                <p className="text-red-900 text-3xl mx-10">
                  <TfiLayoutMenuSeparated />
                </p>
                <p className="leading-tight font-medium text-2xl w-52 text-start mx-auto text-gray-800 mt-4">
                  Approval
                </p>
                <span className="absolute -bottom-6 -left-1 h-[3px] w-0 bg-red-500 group-hover:w-[103%] transition-all duration-500 ease-in-out"></span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between px-6 -translate-y-8">
            <motion.img
              src="https://html.xpressbuddy.com/e.visa/assets/img/shape/f_shape1.png"
              alt=""
              className="w-20 h-20 "
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
              className="w-20 h-20 "
              animate={{ y: [0, 20, 0, -20, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Stats;
