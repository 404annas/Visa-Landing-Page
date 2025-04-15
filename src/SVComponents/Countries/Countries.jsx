import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

const flags = [
  {
    name: "Australia",
    src: "https://html.xpressbuddy.com/e.visa/assets/img/country/flg_03.png",
  },
  {
    name: "Canada",
    src: "https://html.xpressbuddy.com/e.visa/assets/img/country/flg_01.png",
  },
  {
    name: "America",
    src: "https://html.xpressbuddy.com/e.visa/assets/img/country/flg_02.png",
  },
  {
    name: "UK",
    src: "https://html.xpressbuddy.com/e.visa/assets/img/country/flg_04.png",
  },
  {
    name: "Spain",
    src: "https://html.xpressbuddy.com/e.visa/assets/img/country/flg_05.png",
  },
  {
    name: "Germany",
    src: "https://html.xpressbuddy.com/e.visa/assets/img/country/flg_06.png",
  },
];

const Countries = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 pt-0 pb-60">
      {/* Header */}
      <div className="my-4 flex justify-center items-center">
        <img
          className="w-6 h-6"
          src="https://html.xpressbuddy.com/e.visa/assets/img/icon/h_star.png"
          alt="Star"
        />
        <p className="text-center tracking-[0.5rem] font-bold mx-4">
          COUNTRIES
        </p>
        <img
          className="w-6 h-6"
          src="https://html.xpressbuddy.com/e.visa/assets/img/icon/h_star.png"
          alt="Star"
        />
      </div>

      {/* Title */}
      <h1 className="sm:text-5xl text-2xl text-center font-bold max-w-[650px] mx-auto text-black">
        Best Countries to Study Abroad
      </h1>

      {/* Swiper Slider */}
      <div className="w-full max-w-[900px] mt-14 px-4">
        <Swiper
          modules={[Navigation, Autoplay]} // removed Pagination
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {flags.map((flag, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center gap-2">
                <img
                  className="w-24 h-24 object-contain cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                  src={flag.src}
                  alt={`${flag.name} Flag`}
                />
                <p className="font-semibold text-base text-center">
                  {flag.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Countries;
