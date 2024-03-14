import React from "react";
import { Outlet } from "react-router-dom";
import UISidebar from "./UISidebar";
import Navbar from "../Swift/Navbar";
const UILayout = ( )=> {
  return (
    <div className="flex">
  <Navbar></Navbar>
        <div className="left bg-black h-screen w-1/4 overflow-scroll ">
      <UISidebar></UISidebar>
        </div>
  
      <div className="right bg-[#010100] h-screen w-full overflow-scroll  overflow-y-visible ">
        <Outlet />
      </div>
    </div>
  );
};

export default UILayout;
