import React from "react";

const SmallSec = () => {
  return (
    <section className="bg-white border-b-2 border-gray-200 px-10 py-14">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">
          Contact our experts via either phone or email
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex gap-2 items-center">
            <p className="p-2 bg-orange-300 rounded-full">
              <img
                src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/call-icon.svg"
                alt="Call Icon"
              />
            </p>
            <p>Call: +91 590 088 55</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="p-2 bg-orange-300 rounded-full">
              <img
                src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/message-icon.svg"
                alt="Message Icon"
              />
            </p>
            <p>Mail: e.visa@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallSec;
