import React, { useState } from "react";
import { Link } from "react-router-dom";

const UISidebar = () => {
  return (
    <div>
      <div className="navigation flex flex-col space-y-5 py-20  justify-start items-center h-screen ">
        <Link
          to="/"
          className="text-white   font-bold hover:text-green-400 hover:ml-8 "
        >
          Home
        </Link>

        <Link
          to="/ui"
          className="text-white   font-light hover:text-green-400 hover:ml-8 "
        >
          Login UI
        </Link>
        <Link
          to="/ui/scalebutton"
          className="text-white   font-light hover:text-green-400 hover:ml-8 "
        >
          Scale Button
        </Link>
        <Link
          to="/ui/gradientButton"
          className="text-white   font-light hover:text-green-400 hover:ml-8 "
        >
          Gradient Button
        </Link>
      </div>
    </div>
  );
};

export default UISidebar;
