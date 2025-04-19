import React from "react";

const Team = () => {
  return (
    <section className="px-10 py-4 -translate-y-60">
      <div className="relative">
        {/* Banner Image */}
        <img
          src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/cta-banner.jpg"
          alt="Banner Image"
          className="w-full h-auto rounded-2xl object-cover"
        />

        <div className="flex flex-col gap-3 absolute top-3 right-12">
          <h1 className="font-semibold">WE WORK SINCE</h1>
          <h1 className="ml-6 font-semibold text-5xl text-slate-900">2010</h1>
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center px-10 md:px-20 rounded-2xl">
          <div className="flex flex-col text-black gap-4 max-w-xl">
            <div className="flex gap-4 items-center">
              <p className="font-medium text-black uppercase">
                we're skilled team
              </p>
              <img
                src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-black-icon.svg"
                alt="Magic Icon"
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold">
              Ensure your good workplace with us!!
            </h2>
            <p className="text-black text-sm md:text-base">
              Achieve your career goals with our expert support, ensuring a
              smooth path to your ideal workplace.
            </p>
            <button className="relative overflow-hidden px-6 py-3 bg-white text-white font-semibold rounded-md w-fit group">
              <span className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
              <span className="relative z-10 text-black">
                Get a Free Consultation
              </span>
            </button>
          </div>
        </div>

        {/* ✈️ Plane Image Positioned at Bottom */}
        <img
          src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/flan.png"
          alt="Airplane"
          className="absolute bottom-4 right-6 md:bottom-2 md:right-[530px] w-28 md:w-36"
        />
      </div>
    </section>
  );
};

export default Team;
