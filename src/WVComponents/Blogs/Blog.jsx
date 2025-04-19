import React from "react";

const Blog = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <div className="flex items-center gap-4">
            <h1 className="font-medium text-gray-900">BLOG & INSIGHTS</h1>
            <p>
              <img
                src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-icon.svg"
                alt="Magic Icon"
              />
            </p>
          </div>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed font-semibold text-5xl text-slate-900">
            Latest Blog & Insights
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-3xl"
                src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/blog-img01.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-3xl"
                src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/blog-img02.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block rounded-3xl"
                src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/blog-img05.jpg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block rounded-3xl"
                src="https://images.unsplash.com/photo-1522199873717-bc67b1a5e32b?w=2000&auto=format&fit=crop&q=200&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpc2F8ZW58MHx8MHx8fDA%3D"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-3xl"
                src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/blog-img03.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-3xl"
                src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/blog-img04.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center -mt-10 mb-10">
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

export default Blog;
