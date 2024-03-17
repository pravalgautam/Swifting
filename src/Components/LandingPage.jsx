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
    <div className="h-screen w-screen bg-gradient-to-r from-gray-900 to-pink-900 flex flex-col justify-center items-normal text-white">
      <div className="animate-fadeIn">
        <h1 className="text-[2.5rem] md:text-7xl lg:text-8xl font-extrabold mb-4 text-center">
          Learn <span className="text-pink-500">Swift</span> Faster
        </h1>
        <h1 className="text-xl md:text-7xl lg:text-8xl font-extrabold mb-8 text-center">
          with Our Interactive Platform
        </h1>
        <div className="w-full flex justify-center">
          <p className="text-lg text-center md:text-xl lg:text-2xl   w-[60rem] p-2 ">
            Supercharge your programming journey with engaging lessons and
            hands-on projects. Dive into the world of Swift coding and
            accelerate your learning.
          </p>
        </div>
        <div className=" flex flex-col sm:flex sm:flex-row justify-center gap-2 px-10">
          <button
            className="text-xl mt-4 px-10 sm:px-20 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-5  rounded-full transition duration-300 transform hover:scale-105 hover:shadow-2xl"
            onClick={handleClick}
          >
            Learn Swift
          </button>
          <button
            className="text-xl mt-4 px-10 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-5  rounded-full transition duration-300 transform hover:scale-105 hover:shadow-2xl"
            onClick={goToUIComponent}
          >
            SwiftUI Components
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
