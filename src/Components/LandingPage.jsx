import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/swift");
  }
  function goToUIComponent() {
    navigate("/ui");
  }
  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-r from-gray-900 to-pink-900 flex flex-col justify-center items-center text-white">
        <div className="animate-fadeIn">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 text-center">
            Learn <span className="text-pink-500">Swift</span> Faster
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 text-center">
            with Our Interactive Platform
          </h1>
          <div className="w-full flex justify-center">
            <p className="text-lg md:text-xl lg:text-2xl  text-center w-[60rem] ">
              Supercharge your programming journey with engaging lessons and
              hands-on projects. Dive into the world of Swift coding and
              accelerate your learning.
            </p>
          </div>
          <div className="w-full flex justify-center space-x-5">
            <button
              className="text-xl mt-16 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-5 px-16 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-2xl"
              onClick={handleClick}
            >
              Learn Swift
            </button>
            <button
              className="text-xl mt-16 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-5 px-6 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-2xl"
              onClick={goToUIComponent}
            >
              SwiftUI Components
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
