import React from "react";
import Card from "./Card";

const Operators = () => {
  return (
    <div className="py-[5rem] px-[15rem]">
      {" "}
      <h1 className="text-4xl font-medium p-4 text-white text-left ">
        Operators
      </h1>
      <p className="text-white text-left px-8 py-4 space-y-8">
        Operators in Swift are symbols or keywords that perform operations on
        variables and values. They are essential for mathematical calculations,
        logical comparisons, and other tasks. Let's explore some common
        operators in Swift:
      </p>
      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">1. Arithmetic Operators:</span> These
        operators perform basic mathematical operations like addition,
        subtraction, multiplication, and division. For example:
      </p>
      <div className="space-y-3">
        <Card content={<code>{`sum = num1 + num2`}</code>} />
        <Card content={<code>{`difference = num1 - num2`}</code>} />
        <Card content={<code>{`product = num1 * num2`}</code>} />
        <Card content={<code>{`quotient = num1 / num2`}</code>} />
      </div>
      <p className="text-white text-left px-8 py-8">
        Here, "num1" and "num2" are variables, and the corresponding operators
        perform arithmetic operations on them.
      </p>
      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">2. Comparison Operators:</span> These
        operators compare two values and return a Boolean result. For example:
      </p>
      <div className="space-y-3">
        <Card content={<code>{`isEqual = value1 === value2`}</code>} />
        <Card content={<code>{`isNotEqual = value1 !== value2`}</code>} />
        <Card content={<code>{`isGreater = value1 > value2`}</code>} />
        <Card content={<code>{`isLess = value1 < value2`}</code>} />
      </div>
      <p className="text-white text-left px-8 py-8">
        These operators help in making logical comparisons between different
        values.
      </p>
      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">3. Logical Operators:</span> These operators
        perform logical operations, combining or negating Boolean values. For
        example:
      </p>
      <div className="space-y-3">
        <Card
          content={<code>{`logicalAnd = condition1 && condition2`}</code>}
        />
        <Card content={<code>{`logicalOr = condition1 || condition2`}</code>} />
        <Card content={<code>{`logicalNot = !condition`}</code>} />
      </div>
      <p className="text-white text-left px-8 py-8">
        Logical operators are used for combining or negating conditions in
        control flow statements.
      </p>
    </div>
  );
};

export default Operators;
