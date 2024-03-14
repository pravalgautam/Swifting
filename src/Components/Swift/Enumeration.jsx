import React from "react";
import Card from "./Card";

const Enumeration = () => {
  return (
    <div className="py-[5rem] px-[15rem]">
      <h1 className="text-4xl font-medium p-4 text-white text-left ">
        Enumeration
      </h1>
      <p className="text-white text-left px-8 py-4 space-y-8">
        Enumerations, often referred to as enums, in Swift provide a way to
        define a common type for a group of related values. Enums are powerful
        constructs that enhance code readability and maintainability. Let's
        explore the key concepts of enumerations in Swift:
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">1. Enumeration Definition:</span> You define
        an enumeration using the `enum` keyword, followed by the name of the
        enumeration and a pair of curly braces `{}`. Here's an example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`enum CompassDirection {
  case north
  case south
  case east
  case west
}`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        In this example, the `CompassDirection` enum represents the four
        cardinal directions.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">2. Using Enumerations:</span> You can create
        instances of an enumeration by specifying one of its cases. For example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`let currentDirection = CompassDirection.north`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        This creates an instance of the `CompassDirection` enum with the value
        `north`.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">3. Switch Statements with Enums:</span>{" "}
        Enums work well with switch statements, making code more expressive. For
        example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`switch currentDirection {
case .north:
  print("Heading North")
case .south:
  print("Heading South")
case .east:
  print("Heading East")
case .west:
  print("Heading West")
}`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        The switch statement allows you to handle each case of the
        `CompassDirection` enum individually.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">4. Associated Values:</span> Enums can have
        associated values, allowing them to store additional information. For
        example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`enum Measurement {
  case distance(Double)
  case temperature(Double)
}`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        In this example, the `Measurement` enum has cases with associated
        values, representing distance and temperature.
      </p>
    </div>
  );
};

export default Enumeration;
