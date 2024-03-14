import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    function handleClick() {
      navigate("/swift");
    }
    function goToUIComponent() {
      navigate("/ui");
    }
  return (
    <nav className="bg-opacity-60 backdrop-filter backdrop-blur-md p-4 fixed w-full z-10">
    <div className="container mx-auto flex justify-between items-center">
 
        <div className="text-white text-lg font-semibold">Swifting</div>


        <ul className="flex space-x-4">
        <button
              className="text-xl    text-yellow-300 font-semibold p-2 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-2xl"
              onClick={handleClick}
            >
              Learn Swift
            </button>
            <button
              className="text-xl  text-green-300 font-semibold p-2 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-2xl"
              onClick={goToUIComponent}
            >
              SwiftUI Components
            </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
