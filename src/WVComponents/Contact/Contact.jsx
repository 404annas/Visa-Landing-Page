import React from "react";

const Contact = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('https://html.xpressbuddy.com/e.visa/assets/img/work-visa/cta-bg02.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="rounded-xl text-white max-w-2xl relative z-10 px-4">
        <h2 className="text-4xl font-bold mb-4">Let’s Discuss The Details</h2>
        <p className="mb-6 text-lg">
          We offer tailored work visa solutions, guiding you through every step
          to ensure a smooth and efficient process for your international job
          move.
        </p>
        <div className="flex justify-center mt-10">
          <button className="relative overflow-hidden px-6 py-3 bg-green-500 text-white font-semibold rounded-md w-fit group">
            <span className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
            <span className="relative z-10 text-black">
              Get a Free Consultation
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
