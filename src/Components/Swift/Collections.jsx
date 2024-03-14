import React from "react";
import Card from "./Card";

const Collections = () => {
  return (
    <div className="py-[5rem] px-[15rem]">
      <h1 className="text-4xl font-medium p-4 text-white text-left ">
        Collections
      </h1>
      <p className="text-white text-left px-8 py-4 space-y-8">
        Collections in Swift are used to store and manipulate groups of values.
        There are three primary types of collections: arrays, dictionaries, and
        sets. Let's explore each type and their common operations:
      </p>

      <h2 className="text-2xl font-medium p-4 text-white text-left">
        1. Arrays
      </h2>
      <p className="text-white text-left px-8 py-4">
        Arrays store ordered collections of values of the same type. You can
        create an array using the following syntax:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`var fruits = ["Apple", "Banana", "Orange"]`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        Arrays are zero-indexed, meaning the first element is at index 0.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">Common Operations:</span>
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`fruits.append("Grapes")
let firstFruit = fruits[0]
let numberOfFruits = fruits.count
let slicedFruits = fruits[1..<3]`}</pre>
          }
        />
      </div>

      <h2 className="text-2xl font-medium p-4 text-white text-left">
        2. Dictionaries
      </h2>
      <p className="text-white text-left px-8 py-4">
        Dictionaries store key-value pairs. Each key must be unique, and the
        values can be of any type. Here's how you create a dictionary:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`var contactInfo = ["Name": "John Doe", "Email": "john@example.com"]`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        You access values in a dictionary using their keys.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">Common Operations:</span>
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`contactInfo["Phone"] = "555-1234"
let email = contactInfo["Email"]
contactInfo.removeValue(forKey: "Name")`}</pre>
          }
        />
      </div>

      <h2 className="text-2xl font-medium p-4 text-white text-left">3. Sets</h2>
      <p className="text-white text-left px-8 py-4">
        Sets store unique values in no particular order. Duplicate values are
        automatically eliminated. Creating a set looks like this:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`var uniqueNumbers: Set<Int> = [1, 2, 3, 4, 5]`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        Sets are useful when you need to ensure uniqueness among your values.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">Common Operations:</span>
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`uniqueNumbers.insert(6)
let containsThree = uniqueNumbers.contains(3)
let sortedSet = uniqueNumbers.sorted()`}</pre>
          }
        />
      </div>
    </div>
  );
};

export default Collections;
