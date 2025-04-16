import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://html.xpressbuddy.com/e.visa/assets/img/work-visa/hero-bg.jpg')",
      }}
    >
      {/* Overlay (optional for darker look) */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Side Content */}
          <div className="text-white max-w-xl">
            <div className="flex gap-4">
              <p>WE’R WORKING VISA GUIDANCE</p>
              <img
                src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-icon.svg"
                alt=""
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold my-4">
              Hassle-Free Work
              <br />
              <p className="text-amber-400">Visa Guidance</p>
            </h1>
            <p className="text-lg">
              Get your work visa, ensuring a smooth and stress-free experience.
            </p>
            <div className="flex my-10">
              <div className="flex gap-4">
                <img
                  src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check.svg"
                  alt=""
                />
                <p>Affordable & Competitive Fees.</p>
              </div>
              <div className="flex gap-4 ml-6">
                <img
                  src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check.svg"
                  alt=""
                />
                <p>High Success Rate.</p>
              </div>
            </div>
            <div className="flex my-10">
              <div className="flex gap-4">
                <img
                  src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check.svg"
                  alt=""
                />
                <p>Customer-Centric Approach.</p>
                <div className="flex gap-4 ml-5">
                  <img
                    src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check.svg"
                    alt=""
                  />
                  <p>End-to-End Support.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Get Started
            </h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border p-2 rounded"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white py-2 rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
