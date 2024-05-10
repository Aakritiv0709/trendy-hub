import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import "../index.css";
const Layout = () => {
  return (
    <div className="custom_container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
