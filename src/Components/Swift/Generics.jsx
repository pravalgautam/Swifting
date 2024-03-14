import React from "react";
import Card from "./Card";

const Generics = () => {
  return (
    <div className="py-[5rem] px-[15rem]">
      <h1 className="text-4xl font-medium p-4 text-white text-left ">
        Generics
      </h1>
      <p className="text-white text-left px-8 py-4 space-y-8">
        Generics in Swift allow you to write flexible and reusable functions,
        structures, and classes that can work with any type. They provide a way
        to define functions and data structures without specifying the actual
        type they will work with until they are used. Let's explore the key
        concepts of generics in Swift:
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">1. Generic Functions:</span> You can create
        functions that work with any type by using generics. Here's an example
        of a generic function that swaps two values:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`func swap<T>(_ a: inout T, _ b: inout T) {
  let temp = a
  a = b
  b = temp
}

var x = 5
var y = 10
swap(&x, &y)
print("Swapped values: x = \(x), y = \(y)")`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        The `swap` function uses a placeholder type `T` to swap values of any
        type.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">2. Generic Types:</span> You can define
        generic types for classes, structures, and enumerations. For example,
        here's a generic stack structure:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`struct Stack<T> {
  private var elements = [T]()

  mutating func push(_ element: T) {
    elements.append(element)
  }

  mutating func pop() -> T? {
    return elements.popLast()
  }
}

var stringStack = Stack<String>()
stringStack.push("Swift")
stringStack.push("Generics")
print("Popped item: \(stringStack.pop() ?? "")")`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        The `Stack` structure is generic and can work with elements of any type.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">3. Type Constraints:</span> You can apply
        constraints to generic types to specify that they must conform to
        certain protocols or inherit from a specific class. For example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`func printDescription<T: CustomStringConvertible>(_ value: T) {
  print(value.description)
}

let number = 42
let description = "The meaning of life: \(number)"
printDescription(description)`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        The `printDescription` function accepts any type that conforms to the
        `CustomStringConvertible` protocol.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">4. Associated Types:</span> Protocols with
        associated types can be used to define generic constraints on conforming
        types. For example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`protocol Container {
  associatedtype Item
  var items: [Item] { get set }
  mutating func addItem(_ item: Item)
}

struct MyContainer<T>: Container {
  var items: [T] = []

  mutating func addItem(_ item: T) {
    items.append(item)
  }
}

var intContainer = MyContainer<Int>()
intContainer.addItem(42)
print("Container items: \(intContainer.items)")`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        The `Container` protocol has an associated type `Item`, and the
        `MyContainer` structure conforms to this protocol with `Int` as the
        associated type.
      </p>
    </div>
  );
};

export default Generics;
