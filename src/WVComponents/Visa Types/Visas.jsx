import React from "react";

const Visas = () => {
  const visaTypes = [
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check2.svg",
      heading: "H-1B Visa",
      content:
        "The H-1B visa lets employers hire skilled foreign workers in fields like IT, engineering, and medicine.",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check2.svg",
      heading: "L-1 Visa",
      content:
        "The L-1 visa allows companies to transfer specialized employees to the U.S.",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check2.svg",
      heading: "J-1 Visa",
      content:
        "The J-1 visa supports exchange for employment, research, and culture, fostering skill development.",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check2.svg",
      heading: "O-1 Visa",
      content:
        "The O-1 visa is for individuals with exceptional achievements in fields like arts, sciences,business.",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check2.svg",
      heading: "TN-Visa",
      content:
        "The TN visa, under NAFTA, allows Canadian and Mexican specialists to work in the U.S.",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check2.svg",
      heading: "H-28 Visa",
      content:
        "The H-2B visa allows temporary non-agricultural workers in industries like hospitality and construction.",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check2.svg",
      heading: "H-2A Visa",
      content:
        "The H-2A visa lets firms hire temporary foreign agricultural workers when needed.",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check2.svg",
      heading: "P-Visa",
      content:
        "The P visa covers athletes, entertainers, and artists, including P-1 for athletes and P-2 for artists.",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check2.svg",
      heading: "E-3 Visa",
      content:
        "The E-3 visa offers Australian professionals opportunities in specialist occupations, like H-1B.",
    },
  ];

  return (
    <section className="bg-white px-10 py-20 -mt-56">
      {/* Section Heading */}
      <div className="flex flex-col gap-4 items-center justify-center mb-12">
        <div className="flex gap-2 items-center">
          <img
            src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-icon02.svg"
            alt="Magic Icon"
          />
          <h1 className="font-medium text-black">VISA TYPES</h1>
          <img
            src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-icon.svg"
            alt="Magic Icon"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold text-center text-black flex gap-2">
          Available Types Of Visa
        </h1>
      </div>

      {/* Visas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {visaTypes.map((visa, idx) => (
          <div key={idx} className="border-b border-slate-400 pb-6">
            {/* Top Row: Image + Heading */}
            <div className="flex items-start gap-4">
              <img
                src={visa.image}
                alt={visa.heading}
                className="w-10 h-10 mt-1"
              />
              <div>
                <h2 className="text-2xl font-semibold text-black">
                  {visa.heading}
                </h2>
                <p className="text-gray-600 mt-2">{visa.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="relative overflow-hidden px-6 py-3 bg-green-500 text-white font-semibold rounded-md w-fit group">
          <span className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
          <span className="relative z-10 text-black">
            Get a Free Consultation
          </span>
        </button>
      </div>
    </section>
  );
};

export default Visas;
