import React from "react";
import Card from "./Card";

const Conditionals = () => {
  return (
    <div className="py-[5rem] px-[15rem]">
      <h1 className="text-4xl font-medium p-4 text-white text-left">
        Conditionals
      </h1>
      <p className="text-white text-left px-8 py-4 space-y-8">
        Conditional statements in Swift allow you to control the flow of your
        program based on certain conditions. Let's explore some common
        conditional constructs:
      </p>

      <Card
        content={
          <pre>{`if temperature > 30 {
  print("It's a hot day!")
}`}</pre>
        }
      />

      <p className="text-white text-left px-8 py-8">
        This example prints a message if the temperature is greater than 30.
      </p>

      <Card
        content={
          <pre>{`if isRaining {
  print("Bring an umbrella!")
} else if isSunny {
  print("It's a sunny day!")
} else {
  print("Enjoy the weather!")
}`}</pre>
        }
      />

      <p className="text-white text-left px-8 py-8">
        In this example, it prints different messages based on weather
        conditions, including an `else if` condition.
      </p>

      <Card
        content={
          <pre>{`switch dayOfWeek {
case "Monday":
  print("Start of the week")
case "Friday":
  print("TGIF!")
default:
  print("Enjoy the day!")
}`}</pre>
        }
      />

      <p className="text-white text-left px-8 py-8">
        Here, the switch statement checks the day of the week and prints
        different messages based on the matching case.
      </p>
    </div>
  );
};

export default Conditionals;
