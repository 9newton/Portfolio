import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Certificate from "../components/Certificate/Certificate";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScollToTop from "../components/ScollToTop/ScollToTop";
function Homepage() {
  return (
    <>
      <ScollToTop />
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
