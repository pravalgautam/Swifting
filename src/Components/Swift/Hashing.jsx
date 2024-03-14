import React from "react";
import Card from "./Card";

const Hashing = () => {
  return (
    <div className="py-[5rem] px-[15rem]">
      <h1 className="text-4xl font-medium p-4 text-white text-left ">
        Hashing
      </h1>
      <p className="text-white text-left px-8 py-4 space-y-8">
        Hashing in Swift is a process of converting data, such as values or
        objects, into a fixed-size string of characters, known as a hash value.
        Hashing is commonly used in data structures like dictionaries and sets
        for efficient data retrieval. Let's explore the principles of hashing in
        Swift:
      </p>

      <h2 className="text-2xl font-medium p-4 text-white text-left">
        1. Hash Functions
      </h2>
      <p className="text-white text-left px-8 py-4">
        A hash function is a mathematical algorithm that takes input data and
        produces a fixed-size string of characters, which is the hash value.
        It's designed to be fast and deterministic, meaning the same input will
        always produce the same hash value.
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`func hash(input: String) -> Int {
  // Implementation of a simple hash function
  var hashValue = 0
  for char in input {
    hashValue = hashValue &* 31 &+ Int(char.asciiValue ?? 0)
  }
  return hashValue
}`}</pre>
          }
        />
      </div>

      <h2 className="text-2xl font-medium p-4 text-white text-left">
        2. Hashable Protocol
      </h2>
      <p className="text-white text-left px-8 py-4">
        To use custom types as keys in dictionaries or elements in sets, they
        need to conform to the `Hashable` protocol. This protocol requires the
        implementation of a `hash(into:)` method.
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`struct Point: Hashable {
  var x: Int
  var y: Int

  func hash(into hasher: inout Hasher) {
    hasher.combine(x)
    hasher.combine(y)
  }
}

let point = Point(x: 1, y: 2)
let hashValue = point.hashValue`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        The `hash(into:)` method allows you to combine the hash values of the
        individual properties using the `Hasher` struct.
      </p>

      <h2 className="text-2xl font-medium p-4 text-white text-left">
        3. Default Hashing for Standard Types
      </h2>
      <p className="text-white text-left px-8 py-4">
        Standard types in Swift, like integers, strings, and enums, conform to
        the `Hashable` protocol by default. This ensures that these types can be
        used as keys in dictionaries or elements in sets without any additional
        implementation.
      </p>

      <h2 className="text-2xl font-medium p-4 text-white text-left">
        4. Custom Hashing for Enums
      </h2>
      <p className="text-white text-left px-8 py-4">
        Enums, especially those with associated values, may require custom
        hashing to ensure that each case and associated values are appropriately
        represented in the hash value.
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`enum Result<T, E>: Hashable where T: Hashable, E: Hashable {
  case success(T)
  case failure(E)

  func hash(into hasher: inout Hasher) {
    switch self {
    case .success(let value):
      hasher.combine("success")
      hasher.combine(value)
    case .failure(let error):
      hasher.combine("failure")
      hasher.combine(error)
    }
  }
}

let successResult = Result.success(42)
let hashValue = successResult.hashValue`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        Here, the `Result` enum's `hash(into:)` method combines the case name
        and associated values to generate a unique hash value.
      </p>
    </div>
  );
};

export default Hashing;
