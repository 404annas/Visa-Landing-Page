import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-contain bg-center flex items-center justify-center"
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
            <h2 className="text-2xl text-center font-semibold mb-2 text-gray-800">
              Want to Apply Work Visa?
            </h2>
            <p className="text-gray-500 text-center mb-6">
              Get a free Consultation for a Work visa today!!
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border outline-none px-4 py-2 rounded"
                required
              />
              <input
                type="email"
                placeholder="Email ID"
                className="border outline-none px-4 py-2 rounded"
                required
              />
              <div className="flex gap-2">
                <input
                  className=" border outline-none px-4  py-2 rounded"
                  type="text"
                  placeholder="Phone no"
                  required
                />
                <input
                  className=" border outline-none px-4  py-2 rounded w-[220px]"
                  type="text"
                  placeholder="Current City"
                  required
                />
              </div>
              <div className="flex gap-2">
                <select
                  className="border outline-none px-4 py-2 w-[236px] rounded bg-white text-gray-500"
                  required
                >
                  <option value="">Select Business Type</option>
                  <option value="startup">Startup</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="agency">Agency</option>
                  <option value="freelancer">Freelancer</option>
                  <option value="corporate">Corporate</option>
                </select>

                <select
                  className="border outline-none px-4 py-2 rounded w-[220px] bg-white text-gray-500"
                  required
                >
                  <option value="">Select Visa Type</option>
                  <option value="student">Student Visa</option>
                  <option value="work">Work Visa</option>
                  <option value="tourist">Tourist Visa</option>
                  <option value="business">Business Visa</option>
                  <option value="residence">Residence Visa</option>
                </select>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" />
                <p>I agree with terms and conditions</p>
              </div>
              <button class="relative overflow-hidden px-6 py-3 bg-green-500 text-white font-semibold rounded-md group">
                <span class="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
                <span class="relative z-10">Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
