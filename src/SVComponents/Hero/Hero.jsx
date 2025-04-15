import React from "react";
import { Button } from "../../SVComponents/svComponents";

const Hero = () => {
  return (
    <section className="h-screen relative overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1733306455377-2ef61e873f69?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
        alt="Background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Foreground Hero Image filling entire section */}
      <img
        className="absolute inset-0 w-full h-full object-contain z-20"
        src="https://html.xpressbuddy.com/e.visa/assets/img/hero/img_01.png"
        alt="Foreground Hero"
      />

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/2 z-20" />

      <div className="relative z-30 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <div className="sm:flex hidden my-60 sm:my-16 ">
          <img
            className="w-6 h-6"
            src="https://html.xpressbuddy.com/e.visa/assets/img/icon/h_star.png"
            alt="Star"
          />
          <p className="text-center text-sm sm:text-base tracking-[0.5rem] font-bold mx-4">
            WELCOME TO VISA ADVISOR
          </p>
          <img
            className="w-6 h-6"
            src="https://html.xpressbuddy.com/e.visa/assets/img/icon/h_star.png"
            alt="Star"
          />
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="flex-1 text-left pl-40">
            <h1 className="md:block hidden text-2xl md:text-6xl lg:text-8xl font-bold mb-20 text-shadow-double-t">
              EXPERT
            </h1>
          </div>

          <div className="md:block hidden flex-1 text-right pr-28">
            <h1 className="text-2xl md:text-6xl lg:text-8xl font-bold mb-20 text-shadow-double-t">
              STUDENT
            </h1>
          </div>
        </div>
        <h1 className="md:block hidden text-4xl md:text-6xl lg:text-8xl font-bold text-shadow-double-t">
          VISA HELP
        </h1>
        <div className="mt-[500px] sm:mt-0">
          <Button content={"Book Appointment Today"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
