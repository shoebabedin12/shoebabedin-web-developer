import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import ToTop from "../ToTop/ToTop";

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
