import React from "react";
import Card from "./Card";

const Equality = () => {
  return (
    <div className="py-[5rem] px-[15rem]">
      <h1 className="text-4xl font-medium p-4 text-white text-left ">
        Equality
      </h1>
      <p className="text-white text-left px-8 py-4 space-y-8">
        In Swift, equality is a fundamental concept when working with values and
        objects. Understanding how to compare different types for equality is
        crucial. Let's explore the principles of equality in Swift:
      </p>

      <h2 className="text-2xl font-medium p-4 text-white text-left">
        1. Value Type Equality
      </h2>
      <p className="text-white text-left px-8 py-4">
        For value types like integers, strings, and structs, equality is
        determined by comparing their actual values. For example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`let number1 = 42
let number2 = 42

let isEqual = number1 == number2 // true`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        In this case, `isEqual` will be `true` because the values of `number1`
        and `number2` are equal.
      </p>

      <h2 className="text-2xl font-medium p-4 text-white text-left">
        2. Reference Type Equality
      </h2>
      <p className="text-white text-left px-8 py-4">
        For reference types like classes, equality is based on whether they
        refer to the same instance in memory. For example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`class Person {
  var name: String

  init(name: String) {
    self.name = name
  }
}

let person1 = Person(name: "John")
let person2 = Person(name: "John")

let areEqual = person1 === person2 // false`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        In this case, `areEqual` will be `false` because `person1` and `person2`
        refer to different instances in memory, even though their property
        values are the same.
      </p>

      <h2 className="text-2xl font-medium p-4 text-white text-left">
        3. Equatable Protocol
      </h2>
      <p className="text-white text-left px-8 py-4">
        To enable equality comparisons for custom types, you can conform to the
        `Equatable` protocol and implement the `==` operator. For example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`struct Point: Equatable {
  var x: Int
  var y: Int
}

let point1 = Point(x: 1, y: 2)
let point2 = Point(x: 1, y: 2)

let arePointsEqual = point1 == point2 // true`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        By conforming to `Equatable` and providing an implementation for the
        `==` operator, custom types like `Point` can be compared for equality
        using the `==` operator.
      </p>

      <h2 className="text-2xl font-medium p-4 text-white text-left">
        4. Custom Equality
      </h2>
      <p className="text-white text-left px-8 py-4">
        In some cases, you might need to define custom rules for equality. You
        can achieve this by providing your own implementation of the `==`
        operator for specific types.
      </p>
    </div>
  );
};

export default Equality;
