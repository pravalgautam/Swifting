import React from "react";
import Card from "./Card";

const DataTypes = () => {
  return (
    <div className="py-[5rem] px-[15rem]">
      <h1 className="text-4xl font-medium p-4 text-white text-left">
        Data Types
      </h1>
      <p className="text-white text-left px-8 py-4 space-y-8">
        Swift provides a versatile set of data types for managing information
        effectively. Let's explore key types within Swift's arsenal through
        concise examples:
      </p>

      <Card content={<code>{`let age: Int = 25`}</code>} />
      <h2 className="text-2xl font-medium p-4 text-white text-left">
        Integers
      </h2>
      <p className="text-white text-left px-8 py-4">
        Integers represent whole numbers. In Swift, you can declare an integer
        variable like this:
      </p>

      <Card content={<code>{`let pi: Double = 3.14159`}</code>} />
      <h2 className="text-2xl font-medium p-4 text-white text-left">
        Doubles and Floats
      </h2>
      <p className="text-white text-left px-8 py-4">
        For decimal numbers, Swift provides Double and Float types. Use Double
        for higher precision and Float when efficiency is crucial.
      </p>

      <Card
        content={
          <code>{`let greeting = "Hello, "\nlet name = "Swift"\nlet welcomeMessage = greeting + name`}</code>
        }
      />
      <h2 className="text-2xl font-medium p-4 text-white text-left">Strings</h2>
      <p className="text-white text-left px-8 py-4">
        Strings are sequences of characters enclosed in double quotes. Swift
        makes it easy to manipulate and concatenate strings.
      </p>

      <Card content={<code>{`let isSwiftAwesome: Bool = true`}</code>} />
      <h2 className="text-2xl font-medium p-4 text-white text-left">
        Booleans
      </h2>
      <p className="text-white text-left px-8 py-4">
        Booleans represent true or false values, essential for decision-making
        in conditional statements.
      </p>

      <Card
        content={
          <code>{`var shoppingList: [String] = ["Apples", "Bananas", "Oranges"]`}</code>
        }
      />
      <h2 className="text-2xl font-medium p-4 text-white text-left">Arrays</h2>
      <p className="text-white text-left px-8 py-4">
        Arrays store ordered lists of elements of the same type, making them
        useful for grouping related data.
      </p>

      <Card
        content={
          <code>{`var contactInfo: [String: String] = ["Name": "John Doe", "Email": "john@example.com"]`}</code>
        }
      />
      <h2 className="text-2xl font-medium p-4 text-white text-left">
        Dictionaries
      </h2>
      <p className="text-white text-left px-8 py-4">
        Dictionaries store key-value pairs, allowing you to associate values
        with unique identifiers.
      </p>
    </div>
  );
};

export default DataTypes;
