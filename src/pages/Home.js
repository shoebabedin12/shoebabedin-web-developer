import React from "react";
import About from "../components/Home/About";
import Resume from "../components/Home/Resume";
import Skills from "../components/Home/Skills";
import Work from "../components/Home/Work";
import Portfolio from "../components/Home/Portfolio";
import HireMe from "../components/Home/HireMe";
import Contact from "../components/Home/Contact";
import Banner from "../components/Home/Banner";
import { Helmet } from "react-helmet";

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
