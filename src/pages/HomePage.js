import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Certificate from "../components/Certificate/Certificate";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
function Homepage() {
  return (
    <>
      <Hero />
      <Projects />
      <Certificate />
      <Skills />
      <Contact />
      <Footer />
      <FixSocialIcon />
    </>
  );
}

export default Homepage;
