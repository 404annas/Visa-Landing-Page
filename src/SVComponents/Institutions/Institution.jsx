import React from "react";

const Institution = () => {
  return (
    <section>
      <div className="px-5 py-10 bg-gray-100">
        {/* Header */}
        <div className="my-4 flex justify-center mx-auto">
          <img
            className="w-6 h-6"
            src="https://html.xpressbuddy.com/e.visa/assets/img/icon/h_star.png"
            alt="Star"
          />
          <p className="text-center tracking-[0.5rem] font-bold mx-4">
            TOP INSTITUTIONS
          </p>
          <img
            className="w-6 h-6"
            src="https://html.xpressbuddy.com/e.visa/assets/img/icon/h_star.png"
            alt="Star"
          />
        </div>

        {/* Institutions Grid */}
        <div className="mt-12 space-y-8">
          <div className="grid grid-cols-2 lg:flex lg:justify-between mx-4 md:mx-10 bg-white p-8 md:p-14 gap-6 justify-center">
            <img
              src="https://html.xpressbuddy.com/e.visa/assets/img/brand/br_01.png"
              alt="Institution"
              className="w-full max-w-[150px] mx-auto"
            />
            <img
              src="https://html.xpressbuddy.com/e.visa/assets/img/brand/br_02.png"
              alt="Institution"
              className="w-full max-w-[150px] mx-auto"
            />
            <img
              src="https://html.xpressbuddy.com/e.visa/assets/img/brand/br_03.png"
              alt="Institution"
              className="w-full max-w-[150px] mx-auto"
            />
            <img
              src="https://html.xpressbuddy.com/e.visa/assets/img/brand/br_04.png"
              alt="Institution"
              className="w-full max-w-[150px] mx-auto"
            />
          </div>

          <div className="grid grid-cols-2 lg:flex lg:justify-between mx-4 md:mx-10 bg-white p-8 md:p-14 gap-6 justify-center">
            <img
              src="https://html.xpressbuddy.com/e.visa/assets/img/brand/br_05.png"
              alt="Institution"
              className="w-full max-w-[150px] mx-auto"
            />
            <img
              src="https://html.xpressbuddy.com/e.visa/assets/img/brand/br_06.png"
              alt="Institution"
              className="w-full max-w-[150px] mx-auto"
            />
            <img
              src="https://html.xpressbuddy.com/e.visa/assets/img/brand/br_07.png"
              alt="Institution"
              className="w-full max-w-[150px] mx-auto"
            />
            <img
              src="https://html.xpressbuddy.com/e.visa/assets/img/brand/br_08.png"
              alt="Institution"
              className="w-full max-w-[150px] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Institution;
