import React from "react";
import Card from "./Card";

const Functions = () => {
  return (
    <div className="py-[5rem] px-[15rem]">
      <h1 className="text-4xl font-medium p-4 text-white text-left ">
        Function
      </h1>
      <p className="text-white text-left px-8 py-4 space-y-8">
        In Swift, functions serve as essential building blocks, allowing you to
        encapsulate and reuse code. Let's explore the key aspects of defining
        and using functions in Swift:
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">1. Function Definition:</span> A function is
        defined using the `func` keyword, followed by the function name and
        parameters enclosed in parentheses. For instance:
      </p>
      <div className="">
        <Card
          content={
            <code>{`func greet(name: String) {
  print("Hello, \(name)!")
}`}</code>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        Here, the `greet` function takes a parameter `name` of type `String` and
        prints a personalized greeting using the provided argument.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">2. Function Call:</span> To execute a
        function, you use its name followed by parentheses and provide the
        necessary arguments. For example:
      </p>
      <div className="">
        <Card content={<code>{`greet(name: "Swift")`}</code>} />
      </div>

      <p className="text-white text-left px-8 py-8">
        This function call invokes `greet` with the argument "Swift," resulting
        in the printed message "Hello, Swift!"
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">3. Function Return:</span> Functions can
        also return values. You specify the return type after the arrow {"->"}
        symbol in the function declaration. Consider the following example:
      </p>
      <div className="">
        <Card
          content={
            <code>{`func add(a: Int, b: Int) -> Int {
  return a + b
}`}</code>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        In this case, the `add` function accepts two integer parameters (`a` and
        `b`) and returns their sum as an integer value. This allows you to
        perform calculations and utilize the result elsewhere in your program.
      </p>
    </div>
  );
};

export default Functions;
