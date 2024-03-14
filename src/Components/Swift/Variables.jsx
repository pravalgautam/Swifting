import React from "react";
import Card from "./Card";

const Variables = () => {
  return (
    <div className="py-[5rem] px-[15rem]">
      <h1 className="text-4xl font-medium p-4 text-white text-left ">
        Variables
      </h1>
      <p className="text-white text-left px-8 py-4  space-y-8">
        In Swift, variables are fundamental building blocks for storing and
        manipulating data. They serve as containers to hold different types of
        information. Let's explore two main types of variables: var and let.
      </p>
      <p className=" text-white text-left px-8 py-4">
        <span className="font-bold  py-4">1.Mutable Variables (var): </span> The
        var keyword is used to declare mutable variables, meaning their values
        can be changed after initialization. For example:
      </p>
      <div className="">
        <Card title="var" content="playerScore = 100" />
      </div>
      <p className="text-white text-left px-8 py-8">
        Here, "playerScore" is a variable that can be updated as the game
        progresses.
      </p>
      <p className="text-white text-left px-8 py-4">
        {" "}
        <span className="font-bold">2. Immutable Variables (let):</span>
        On the other hand, the let keyword is used for immutable variables,
        representing constants with fixed values:
      </p>
      <p className="text-white text-left px-8 py-4">
        In this case, "maximumSpeed" remains constant throughout the program.
        Variables in Swift are type-safe, meaning they hold specific data types
        such as Integers, Strings, or custom types. Swift also supports type
        inference, allowing the compiler to deduce variable types based on their
        initial values, reducing redundancy in code.
      </p>
      <Card title={"let"} content={"maximumSpeed = 200"} />
    </div>
  );
};

export default Variables;
