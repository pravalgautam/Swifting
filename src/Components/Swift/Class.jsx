import React from "react";
import Card from "./Card";

const Class = () => {
  return (
    <div className="py-[5rem] px-[15rem]">
      <h1 className="text-4xl font-medium p-4 text-white text-left ">Class</h1>
      <p className="text-white text-left px-8 py-4 space-y-8">
        Classes in Swift are powerful constructs that enable the creation of
        flexible and reusable code. They support the principles of
        object-oriented programming, including inheritance, encapsulation, and
        polymorphism. Let's delve into the key concepts of classes in Swift:
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">1. Class Definition:</span> You define a
        class using the `class` keyword, followed by the name of the class and a
        pair of curly braces `{}`. Here's an example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`class Animal {
  var name: String
  var age: Int

  init(name: String, age: Int) {
    self.name = name
    self.age = age
  }

  func makeSound() {
    print("Animal makes a sound")
  }
}`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        In this example, the `Animal` class has properties `name` and `age`, an
        initializer (`init` method), and a method (`makeSound`).
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">2. Creating Instances:</span> You create
        instances of a class by calling its initializer and providing values for
        its properties. For example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`let myPet = Animal(name: "Buddy", age: 3)`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        This creates an instance of the `Animal` class named `myPet` with
        specific values for `name` and `age`.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">3. Accessing Properties and Methods:</span>{" "}
        You can access the properties and call methods of a class instance using
        dot notation. For instance:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`print("Name: \(myPet.name), Age: \(myPet.age)")
myPet.makeSound()`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        This prints the values of `name` and `age` properties and invokes the
        `makeSound` method for the `myPet` instance.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">4. Inheritance:</span> Classes support
        inheritance, allowing you to create a new class based on an existing
        one. For example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`class Dog: Animal {
  var breed: String

  init(name: String, age: Int, breed: String) {
    self.breed = breed
    super.init(name: name, age: age)
  }

  override func makeSound() {
    print("Dog barks: Woof!")
  }
}`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        In this example, the `Dog` class inherits from the `Animal` class,
        introducing a new property (`breed`) and overriding the `makeSound`
        method.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">5. Polymorphism:</span> With inheritance,
        you can achieve polymorphism. This allows you to treat instances of
        derived classes as instances of their base class. For example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`let myDog: Animal = Dog(name: "Rex", age: 2, breed: "Labrador")
myDog.makeSound()`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        Even though `myDog` is declared as an `Animal`, it can still invoke the
        overridden `makeSound` method from the `Dog` class.
      </p>
    </div>
  );
};

export default Class;
