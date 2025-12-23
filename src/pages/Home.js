import React from "react";
import About from "../components/Home/About";
import Banner from "../components/Home/Banner";
import Contact from "../components/Home/Contact";
import HireMe from "../components/Home/HireMe";
import Resume from "../components/Home/Resume";
import Skills from "../components/Home/Skills";
import Work from "../components/Home/Work";
import Portfolio from "../components/Home/Portfolio";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Resume />
      <Work />
      <Skills />
      {/* <Portfolio /> */}
      <HireMe />
      <Contact />
    </>
  );
};

export default Home;
