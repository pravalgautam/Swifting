import React from "react";
import Card from "./Card";

const Structures = () => {
  return (
    <div className="py-[5rem] px-[15rem]">
      <h1 className="text-4xl font-medium p-4 text-white text-left ">
        Structures
      </h1>
      <p className="text-white text-left px-8 py-4 space-y-8">
        In Swift, structures (structs) are used to define custom data types that
        group together related properties and behaviors. They are value types,
        meaning they are copied when assigned or passed around. Let's explore
        the key concepts of structures in Swift:
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">1. Structure Definition:</span> You define a
        structure using the `struct` keyword, followed by the name of the
        structure and a pair of curly braces `{}`. Here's an example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`struct Point {
  var x: Double
  var y: Double
}`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        In this example, the `Point` struct has two properties, `x` and `y`,
        representing coordinates in a 2D space.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">2. Creating Instances:</span> You create
        instances of a structure by calling its initializer and providing values
        for its properties. For example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`let origin = Point(x: 0.0, y: 0.0)`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        This creates an instance of the `Point` struct named `origin` with
        initial values for `x` and `y`.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">3. Accessing Properties:</span> You can
        access the properties of a structure using dot notation. For instance:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`print("X: \(origin.x), Y: \(origin.y)")`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        This prints the values of `x` and `y` properties of the `origin`
        instance.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">4. Mutating Methods:</span> You can define
        methods within a structure that modify its properties. Use the
        `mutating` keyword to indicate that a method can modify the structure.
        Example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`struct Point {
  var x: Double
  var y: Double

  mutating func move(byX deltaX: Double, byY deltaY: Double) {
    x += deltaX
    y += deltaY
  }
}`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        The `move` method allows you to change the coordinates of a `Point`
        instance.
      </p>
    </div>
  );
};

export default Structures;
