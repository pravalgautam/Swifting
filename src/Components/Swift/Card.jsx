import React from "react";

const Card = ({ title, content }) => {
  return (
    <div>
      <div className=" bg-gray-200 rounded-tl-3xl rounded-tr-3xl  ">
        <div className="flex space-x-2 p-4">
          <div className="circle1 h-3 w-3 bg-red-400 rounded-full"></div>
          <div className="circle1 h-3 w-3 bg-gray-400 rounded-full"></div>
          <div className="circle1 h-3 w-3 bg-green-400 rounded-full"></div>
        </div>
      </div>
      <div className="content flex justify-center items-center space-x-2 p-4  bg-white rounded-bl-3xl rounded-br-3xl   ">
        <h1 className="text-red-600 text-2xl">{title}</h1>
        <p className="text-xl"> {content}</p>
      </div>
    </div>
  );
};

export default Card;
