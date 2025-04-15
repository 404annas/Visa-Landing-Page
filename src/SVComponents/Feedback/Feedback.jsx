import React from "react";
import { motion } from "framer-motion";

const Feedback = () => {
  return (
    <section className="bg-black text-white">
      <div className="flex items-center justify-between px-6 -translate-y-14">
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
      </div>
      <div className="flex flex-col container mx-auto p-4">
        <div className="flex items-center my-2">
          <img
            className="w-6 h-6"
            src="https://html.xpressbuddy.com/e.visa/assets/img/icon/h_star.png"
            alt="Star"
          />
          <p className="text-center  tracking-[0.5rem] font-bold text-white mx-4">
            FEEDBACK
          </p>
          <img
            className="w-6 h-6"
            src="https://html.xpressbuddy.com/e.visa/assets/img/icon/h_star.png"
            alt="Star"
          />
        </div>

        <div className="flex sm:flex-row flex-col sm:items-center gap-4 sm:gap-0 justify-between mb-10">
          <h1 className="md:text-5xl text-3xl font-bold">Happy Student Feedback</h1>
          <div className="flex items-center gap-2">
            <p className="text-5xl font-semibold bg-gradient-to-r from-red-600 to-orange-600 text-transparent bg-clip-text">
              4.8
            </p>
            <p className="w-24 font-semibold text-xs">
              RATING FROM OUR CLIENTS
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full my-10">
          <div
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="px-4 py-10 border-r border-zinc-800 relative"
          >
            <div className="absolute z-0 inset-0 bg-black opacity-80 hover:opacity-70 transition-all duration-200"></div>
            <div className="z-10 relative">
              <img
                className="bg-gradient-to-r from-red-600 to-orange-600 p-4 rounded-2xl mb-4"
                src="https://html.xpressbuddy.com/e.visa/assets/img/icon/t_quote.png"
                alt="Quote"
              />
              <p className="font-semibold text-sm mb-10">
                AMERICA-BOUND STUDENT
              </p>
              <p className="mb-10 text-lg">
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae sit, ad tempore consequuntur est, quam perspiciatis
                animi ipsam, nostrum facere non fuga aliquid iste qui magni
                deleniti. Animi, nihil ullam."
              </p>
              <p className="text-md">Gladriao Gomeza</p>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8fDA%3D)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="px-4 py-10 border-r border-zinc-800 relative"
          >
            <div className="absolute z-0 inset-0 bg-black opacity-80 hover:opacity-70 transition-all duration-200"></div>
            <div className="z-10 relative">
              <img
                className="bg-gradient-to-r from-red-600 to-orange-600 p-4 rounded-2xl mb-4"
                src="https://html.xpressbuddy.com/e.visa/assets/img/icon/t_quote.png"
                alt="Quote"
              />
              <p className="font-semibold text-sm mb-10">
                CANADA-BOUND STUDENT
              </p>
              <p className="mb-10 text-lg">
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae sit, ad tempore consequuntur est, quam perspiciatis
                animi ipsam, nostrum facere non fuga aliquid iste qui magni
                deleniti. Animi, nihil ullam."
              </p>
              <p className="text-md">Olabira Lahardia</p>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="px-4 py-10 border-r border-zinc-800 relative"
          >
            <div className="absolute z-0 inset-0 bg-black opacity-80 hover:opacity-70 transition-all duration-200"></div>
            <div className="z-10 relative">
              <img
                className="bg-gradient-to-r from-red-600 to-orange-600 p-4 rounded-2xl mb-4"
                src="https://html.xpressbuddy.com/e.visa/assets/img/icon/t_quote.png"
                alt="Quote"
              />
              <p className="font-semibold text-sm mb-10">UK-BOUND STUDENT</p>
              <p className="mb-10 text-lg">
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae sit, ad tempore consequuntur est, quam perspiciatis
                animi ipsam, nostrum facere non fuga aliquid iste qui magni
                deleniti. Animi, nihil ullam."
              </p>
              <p className="text-md">Marana Galadare</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
