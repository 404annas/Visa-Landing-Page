import React from "react";

const Company = () => {
  const company = [
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/brand-logo01.png",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/brand-logo02.png",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/brand-logo03.png",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/brand-logo04.png",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/brand-logo05.png",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/brand-logo06.png",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/brand-logo07.png",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/brand-logo08.png",
    },
  ];

  return (
    <section className="py-12 bg-transparent">
      <div className="grid grid-cols-5 gap-10 border border-slate-500 rounded-xl p-10 bg-white/5 backdrop-blur-sm">
        {/* Paragraph spanning 2 columns on first row */}
        <div className="col-span-5 md:col-span-2 flex items-center">
          <p className="text-amber-400 text-sm md:text-3xl font-medium">
            World’s best 120 companies work with us
          </p>
        </div>

        {/* First row of 3 logos */}
        {company.slice(0, 3).map((c, idx) => (
          <div
            key={idx}
            className="col-span-1 flex justify-center items-center"
          >
            <img
              src={c.image}
              alt={`Brand ${idx}`}
              className="max-h-12 object-contain opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer"
            />
          </div>
        ))}

        {/* Second row: remaining 5 logos */}
        {company.slice(3).map((c, idx) => (
          <div
            key={idx + 3}
            className="col-span-1 flex justify-center items-center opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer"
          >
            <img
              src={c.image}
              alt={`Brand ${idx + 3}`}
              className="max-h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Company;
