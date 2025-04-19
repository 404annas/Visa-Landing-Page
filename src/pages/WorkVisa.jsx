import React from "react";
import Hero from "../WVComponents/Hero/Hero";
import SmallSec from "../WVComponents/Small Section/SmallSec";
import About from "../WVComponents/About/About";
import JobsSec from "../WVComponents/Jobs Section/JobsSec";
import Process from "../WVComponents/Work Process/Process";
import Team from "../WVComponents/Team/Team";
import Visas from "../WVComponents/Visa Types/Visas";
import Testimonials from "../WVComponents/Testimonials/Testimonials";
import Blog from "../WVComponents/Blogs/Blog";
import Faq from "../WVComponents/Faqs/Faq";
import Contact from "../WVComponents/Contact/Contact";

const WorkVisa = () => {
  return (
    <div className="min-h-screen pt-8">
      <Hero />
      <SmallSec />
      <About />
      <JobsSec />
      <Process />
      <Team />
      <Visas />
      <Testimonials />
      <Blog />
      <Faq />
      <Contact />
    </div>
  );
};

export default WorkVisa;
