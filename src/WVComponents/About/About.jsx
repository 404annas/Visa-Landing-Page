import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const cardContent = [
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/about-img01.jpg",
      heading: "900 +",
      content: "Sucess Story",
      start: "0",
      end: "900",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/about-img02.jpg",
      heading: "11,000 +",
      content: "Clients Trust Us",
      start: "0",
      end: "11000",
    },
  ];

  return (
    <section className="bg-white px-10 py-20">
      <div className="flex flex-col items-center">
        {/* Top */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex flex-col w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <p className="font-semibold tracking-wide">ABOUT US</p>
              <img
                src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-icon.svg"
                alt="Magic Icon"
              />
            </div>
            <h1 className="text-slate-900 text-5xl font-semibold mx-2">
              Over 15+ Years of Work
            </h1>
            <h1 className="text-slate-900 text-5xl font-semibold mx-3">
              Visa Expertise
            </h1>
          </div>

          <div className="flex flex-col w-1/2">
            <p className="text-gray-500 my-6">
              With over 15 years of experience in work visa services, we bring
              unmatched expertise to guide you through every step of the
              process. Our reliable and efficient solutions tailored to your
              needs.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <p className="text-green-500">&#10004;</p>
                <p className="font-medium">Global Network of Partners.</p>
              </div>
              <div className="flex gap-2">
                <p className="text-green-500">&#10004;</p>
                <p className="font-medium"> Up-to-Date Information.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div ref={ref} className="flex items-center justify-between gap-4">
          {cardContent.map((item, idx) => (
            <div key={idx} className="relative">
              {/* Image with dark overlay */}
              <img
                className="rounded-3xl w-full h-auto object-cover"
                src={item.image}
                alt="About Image"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>

              {/* Card positioned bottom center, overlapping image */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white p-10 rounded-xl shadow-lg w-[90%] md:w-[60%]">
                <div className="flex gap-4 items-center">
                  <p className="bg-orange-300 rounded-full p-4">
                    <img
                      className=""
                      src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/medal-star.svg"
                      alt="Medal Star"
                    />
                  </p>
                  <div className="flex flex-col">
                    {inView && (
                      <h1 className="text-5xl font-semibold mb-2">
                        <CountUp
                          start={item.start}
                          end={item.end}
                          duration={3}
                        />
                        {"+"}
                      </h1>
                    )}

                    <p className="text-gray-600 text-md">{item.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
