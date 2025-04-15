import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Button = ({ content }) => {
  return (
    <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-orange-600 hover:to-red-600 transition-all duration-700 flex gap-2 items-center sm:px-8 sm:py-4 px-4 py-4 rounded-full text-center sm:text-lg text-md mt-16 font-bold">
      {content}
      <p>
        <BsArrowRightCircleFill />
      </p>
    </button>
  );
};

export default Button;
