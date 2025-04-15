import React from "react";
import { Navbar } from "../SVComponents/svComponents";
import { Hero } from "../SVComponents/svComponents";
import { SmallSec } from "../SVComponents/svComponents";
import { About } from "../SVComponents/svComponents";
import { Expertise } from "../SVComponents/svComponents";
import { Services } from "../SVComponents/svComponents";
import { Stats } from "../SVComponents/svComponents";
import { Countries } from "../SVComponents/svComponents";
import { Popular } from "../SVComponents/svComponents";
import { Feedback } from "../SVComponents/svComponents";
import { Blog } from "../SVComponents/svComponents";
import { Institution } from "../SVComponents/svComponents";
import { Contact } from "../SVComponents/svComponents";
import { Footer } from "../SVComponents/svComponents";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SmallSec />
      <About />
      <Expertise />
      <Services />
      <Stats />
      <Countries />
      <Popular />
      <Feedback />
      <Blog />
      <Institution />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
