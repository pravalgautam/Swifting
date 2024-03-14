import React from "react";
import Card from "./Card";

const Extensions = () => {
  return (
    <div className="py-[5rem] px-[15rem]">
      <h1 className="text-4xl font-medium p-4 text-white text-left ">
        Extension
      </h1>
      <p className="text-white text-left px-8 py-4 space-y-8">
        Extensions in Swift allow you to add new functionality to existing types
        without modifying their source code. They enhance code readability and
        enable separation of concerns. Let's explore the key concepts of
        extensions in Swift:
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">1. Extension Syntax:</span> You define an
        extension using the `extension` keyword, followed by the name of the
        type you want to extend. Here's an example extending the `String` type:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`extension String {
  func reversed() -> String {
    return String(self.reversed())
  }
}`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        This extension adds a `reversed` method to all instances of the `String`
        type.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">2. Adding Computed Properties:</span>
        Extensions can also add computed properties to existing types. For
        instance:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`extension Int {
  var squared: Int {
    return self * self
  }
}`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        The `squared` property is added to all instances of the `Int` type,
        providing a convenient way to calculate the square of an integer.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">3. Adding Initializers:</span> Extensions
        can include additional initializers to facilitate type instantiation.
        For example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`extension Double {
  init(fromString str: String) {
    self = Double(str) ?? 0.0
  }
}`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        This extension provides a new initializer for the `Double` type,
        allowing creation from a string representation.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">4. Protocol Conformance:</span> Extensions
        can make types conform to protocols. This is useful for retroactively
        applying protocol conformance to existing types. Example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`protocol Reportable {
  func generateReport() -> String
}

extension Int: Reportable {
  func generateReport() -> String {
    return "The number is \(self)"
  }
}`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        Here, the `Int` type is extended to conform to the `Reportable`
        protocol, providing a custom implementation for the `generateReport`
        method.
      </p>
    </div>
  );
};

export default Extensions;
