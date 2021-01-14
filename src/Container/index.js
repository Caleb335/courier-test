import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import MobileApp from "./MobileApp";
import Agents from "./Agents";
import Cooperation from "./Cooperate";
import Testimonies, { Personnel } from "./People";
import Contact from "./Contact";

const Content = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <MobileApp />
      <Agents />
      <Cooperation />
      <Testimonies />
      <Personnel />
      <Contact />
    </>
  );
};

export default Content;
