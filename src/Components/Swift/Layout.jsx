import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Freelance from "../Freelance";
import Navbar from "./Navbar";
import Footer from "../Footer";
const Layout = () => {
  return (
    <>
    <div className="flex">
      <Navbar></Navbar>
      
      <div className="left bg-black h-screen  w-full sm:w-1/4 overflow-scroll ">
        <Sidebar></Sidebar>
      </div>

      <div className="right bg-[#010100] h-screen  w-0 sm:w-full overflow-scroll  overflow-y-visible">
        
        <Outlet />

      </div>
 
    </div>
    <Footer></Footer>
    </>
  );
};

export default Layout;
