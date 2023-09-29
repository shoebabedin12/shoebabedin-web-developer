import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import ToTop from "../ToTop/ToTop";
import Loader from "../Loader/Loader";

const Layout = () => {
  return (
    <>
      <Loader />
      <Outlet />
      <ToTop />
      <Footer />
    </>
  );
};

export default Layout;
