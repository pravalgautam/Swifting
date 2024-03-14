import React from "react";
import Card from "./Card";

const Protocols = () => {
  return (
    <div className="py-[5rem] px-[15rem]">
      <h1 className="text-4xl font-medium p-4 text-white text-left ">
        Protocols
      </h1>
      <p className="text-white text-left px-8 py-4 space-y-8">
        In Swift, protocols define a blueprint of methods, properties, and other
        requirements that a conforming type must implement. They enable a form
        of polymorphism, allowing different types to share a common interface.
        Let's explore the key concepts of protocols in Swift:
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">1. Protocol Definition:</span> You define a
        protocol using the `protocol` keyword, followed by the name of the
        protocol and a list of requirements. Here's an example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`protocol Vehicle {
  var isRunning: Bool { get }
  func start()
  func stop()
}`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        In this example, the `Vehicle` protocol declares properties and methods
        that types conforming to the protocol must implement.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">2. Conforming to Protocols:</span> Types
        conform to a protocol by adopting it and providing implementations for
        its requirements. For example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`class Car: Vehicle {
  var isRunning: Bool = false

  func start() {
    isRunning = true
    print("Car started.")
  }

  func stop() {
    isRunning = false
    print("Car stopped.")
  }
}`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        The `Car` class conforms to the `Vehicle` protocol by providing
        implementations for the required properties and methods.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">3. Protocol Inheritance:</span> Protocols
        can inherit from other protocols, creating a hierarchy of
        specifications. For instance:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`protocol ElectricVehicle: Vehicle {
  var batteryLevel: Double { get }
}`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        The `ElectricVehicle` protocol inherits from the `Vehicle` protocol and
        adds a new requirement for tracking battery level.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">4. Protocol Extension:</span> You can
        provide default implementations for protocol requirements using
        extensions. This allows you to share common functionality among
        conforming types. Example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`extension Vehicle {
  func honk() {
    print("Beep beep!")
  }
}`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        The `honk` method is added to all types conforming to the `Vehicle`
        protocol through the extension.
      </p>
    </div>
  );
};

export default Protocols;
