import React, { useState } from "react";
import { Company } from "../wvComponents";

const Testimonials = () => {
  const testimonial = [
    {
      name: "Benjamin Charles",
      destination: "Biomedical Engineer at CoreSpace",
      image: "⭐",
      rating: "5.0",
      text: "The professionalism and efficiency of the Work Visa Services team were beyond impressive. They handled all the paperwork and legalities for me, ensuring everything was in order for my move to the USA. I am Highly recommended!",
      country:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/flag-usa.jpg",
      person:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/avatar-img01.jpg",
    },
    {
      name: "Jessica Marie",
      destination: "Senior Financial Analyst at Innovative",
      image: "⭐",
      rating: "4.8",
      text: "Moving abroad for work was a big step, and the team made the transition much smoother. They were clear, professional, and handled everything. I couldn’t have asked for a better experience!",
      country:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/flag-germany.jpg",
      person:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/avatar-img02.jpg",
    },
    {
      name: "Christopher Allen",
      destination: "Construction Laborer at Focus Point",
      image: "⭐",
      rating: "4.9",
      text: "I was in a rush to get a work visa for a job abroad, and this team delivered. They handled everything quickly, provided clear guidance, and made the process seamless. My visa was approved within weeks. Highly recommend their fast and reliable service!",
      country:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/flag-canada.jpg",
      person:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/avatar-img03.jpg",
    },
    {
      name: "Samantha Lee",
      destination: "Teaching Assistant at Precision",
      image: "⭐",
      rating: "5.0",
      text: "From start to finish, the personalized support was exceptional. I felt confident throughout, knowing experts were helping me navigate the complexities of work visas. A truly outstanding service!",
      country:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/flag-austrila.jpg",
      person:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/avatar-img04.jpg",
    },
    {
      name: "Joshua Thomas",
      destination: "Conservation Scientist at Greenfield",
      image: "⭐",
      rating: "4.8",
      text: "The team made my work visa application so easy! They took care of all the paperwork and kept me updated every step of the way. Thanks to their expertise, I got my visa approved without any hassle and was able to start my new job on time!",
      country:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/flag-uk.jpg",
      person:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/avatar-img05.jpg",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <section className="px-10 py-20 bg-[#121c27]">
      <div className="flex flex-col gap-4 items-center justify-center mb-12">
        <div className="flex gap-2 items-center">
          <img
            src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-icon02.svg"
            alt="Magic Icon"
          />
          <h1 className="font-medium text-white">TESTIMONIALS</h1>
          <img
            src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-icon.svg"
            alt="Magic Icon"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold text-center text-white flex gap-2">
          Hear From Our <span className="text-amber-400">Customers!</span>
        </h1>
      </div>

      {/* Main white container */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {testimonial.map((t, idx) => {
          const isOpen = expandedIndex === idx;
          return (
            <div
              key={idx}
              onClick={() => toggleExpand(idx)}
              className="px-6 py-4 cursor-pointer transition-all duration-300"
            >
              <div className="flex justify-between items-center">
                {/* Name on Left */}
                <div>
                  <h2 className="text-lg font-semibold text-slate-800">
                    {t.name}
                  </h2>
                </div>

                {/* Destination, star and rating on Right */}
                <div className="flex flex-col items-end text-right">
                  <p className="text-sm text-slate-600">{t.destination}</p>
                  <div className="flex items-center gap-2 text-yellow-500 mt-1">
                    <span>{t.image}</span>
                    <span className="font-bold text-slate-700">{t.rating}</span>
                  </div>
                </div>
              </div>

              {/* Expandable content */}
              <div
                className={`transition-all duration-500 ease-in-out grid ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="bg-gray-200 mt-4 rounded-lg p-16 flex flex-col md:flex-row gap-10">
                    {/* Left part - image & flag */}
                    <div className="flex flex-col justify-between items-start">
                      <img
                        src={t.person}
                        alt="User"
                        className="rounded-xl w-28 h-28 object-cover"
                      />
                      <img
                        src={t.country}
                        alt="Country Flag"
                        className="mt-10"
                      />
                    </div>

                    {/* Right part - quote & text */}
                    <div className="flex-1 flex items-start gap-4">
                      <span className="text-5xl text-slate-500">“</span>
                      <p className="text-slate-700 text-base leading-relaxed">
                        {t.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom border for each testimonial */}
              {idx < testimonial.length - 1 && (
                <div className="border-b border-slate-300 mt-4" />
              )}
            </div>
          );
        })}
      </div>

      <Company />

      <div className="flex justify-center mt-10">
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

export default Testimonials;
