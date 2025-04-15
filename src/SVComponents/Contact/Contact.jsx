import React from "react";
import { Button } from "../svComponents";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <section className="flex flex-col w-full">
        <div className="flex flex-row">
          <div className="lg:w-1/2 w-full bg-zinc-900 flex flex-col p-10">
            <div className="flex items-center my-2">
              <img
                className="w-6 h-6"
                src="https://html.xpressbuddy.com/e.visa/assets/img/icon/h_star.png"
                alt="Star"
              />
              <p className="text-center tracking-[0.5rem] text-sm sm:text-base font-bold text-white mx-4">
                CONTACT
              </p>
              <img
                className="w-6 h-6"
                src="https://html.xpressbuddy.com/e.visa/assets/img/icon/h_star.png"
                alt="Star"
              />
              <p className="md:translate-x-[450px] translate-x-8">
                <motion.img
                  src="https://html.xpressbuddy.com/e.visa/assets/img/shape/cs_02.png"
                  alt=""
                  className="w-20 h-20"
                  animate={{ y: [0, -20, 0, 20, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </p>
            </div>
            <h1 className="text-white font-medium text-2xl my-6">
              If You Have Any Question, Feel Free to Contact With Us.
            </h1>

            <div className="flex flex-col gap-4 my-4 md:pr-32">
              <input
                className="bg-zinc-800/70 p-4 lg:w-[130%] text-white outline-none border-none"
                type="text"
                placeholder="Goladria Gomez"
              />
              <input
                className="bg-zinc-800/70 p-4 lg:w-[130%] text-white outline-none border-none"
                type="email"
                placeholder="e.vis@gmail.com"
              />
              <input
                className="bg-zinc-800/70 p-4 lg:w-[130%] text-white outline-none border-none"
                type="text"
                placeholder="+999-888-000"
              />
              <textarea
                className="bg-zinc-800/70 p-4 lg:w-[130%] text-white outline-none border-none"
                placeholder="Write your message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="text-white">
              <Button content={"Send Message"} />
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/2">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1579047917338-a6a69144fe63?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwZG9pbmclMjB0aHVtYnMlMjB1cHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Contact"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
