import React from "react";

const SmallSec = () => {
  return (
    <section className="bg-white border-b-2 border-gray-200 flex lg:flex-row flex-wrap justify-between p-7">
      <div className="flex items-center gap-3">
        <img
          className="bg-red-200 rounded-full p-2"
          src="https://html.xpressbuddy.com/e.visa/assets/img/icon/f_01.svg"
          alt="Card Icon"
        />
        <p className="text-base font-medium text-gray-800">
          Visa Process, no Interviews
        </p>
      </div>
      <div className="flex items-center gap-3 md:mt-0 mt-4">
        <img
          className="bg-red-200 rounded-full p-2"
          src="https://html.xpressbuddy.com/e.visa/assets/img/icon/f_02.svg"
          alt="Process Icon"
        />
        <p className="text-base font-medium text-gray-800">Faster Processing</p>
      </div>
      <div className="flex items-center gap-3 md:mt-0 mt-4">
        <img
          className="bg-red-200 rounded-full p-2"
          src="https://html.xpressbuddy.com/e.visa/assets/img/icon/f_03.svg"
          alt="Calender Icon"
        />
        <p className="text-base font-medium text-gray-800">
          Up-to-Date Information
        </p>
      </div>
      <div className="flex items-center gap-3 md:mt-0 mt-4">
        <img
          className="bg-red-200 rounded-full p-2"
          src="https://html.xpressbuddy.com/e.visa/assets/img/icon/f_04.svg"
          alt="Card Icon"
        />
        <p className="text-base font-medium text-gray-800">Reasonable Cost</p>
      </div>
    </section>
  );
};

export default SmallSec;
