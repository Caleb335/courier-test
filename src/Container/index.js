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
      <About id="about" />
      <Services id="services" />
      <MobileApp id="app" />
      <Agents id="agent" />
      <Cooperation id="cooperate" />
      <Testimonies id="testimonials" />
      <Personnel />
      <Contact id="contact" />
    </>
  );
};

export default Content;
