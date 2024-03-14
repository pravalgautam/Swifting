import React from "react";
import Card from "./Card";

const Closure = () => {
  return (
    <div className="py-[5rem] px-[15rem]">
      <h1 className="text-4xl font-medium p-4 text-white text-left ">
        Closures
      </h1>
      <p className="text-white text-left px-8 py-4 space-y-8">
        Closures in Swift are self-contained blocks of functionality that can be
        assigned to variables, passed as parameters, and returned from
        functions. They capture and store references to variables and constants
        from the surrounding context. Let's explore the key concepts of closures
        in Swift:
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">1. Closure Definition:</span> A closure is
        defined using curly braces `{}`. It can capture and store references to
        variables and constants from the surrounding context. Here's an example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`let greetClosure: (String) -> Void = { name in
  print("Hello, \(name)!")
}`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        In this example, `greetClosure` is a closure that takes a `String`
        parameter `name` and prints a greeting using the provided argument.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">2. Using Closures:</span> Closures can be
        assigned to variables, passed as parameters, and used in various
        contexts. For instance:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`greetClosure("Swift")`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        Invoking `greetClosure` with the argument "Swift" executes the closure,
        resulting in the printed message "Hello, Swift!"
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">3. Capturing Values:</span> Closures can
        capture and store references to variables and constants from the
        surrounding context, even if they are no longer in scope. This is known
        as capturing values by reference. Consider the following example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`func makeIncrementer(incrementAmount: Int) -> () -> Int {
  var total = 0
  let incrementer: () -> Int = {
    total += incrementAmount
    return total
  }
  return incrementer
}

let incrementByTwo = makeIncrementer(incrementAmount: 2)
print(incrementByTwo()) // Output: 2
print(incrementByTwo()) // Output: 4`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        In this example, the `makeIncrementer` function returns a closure
        (`incrementer`) that increments `total` by a specified amount. The
        closure captures and retains references to `total` and
        `incrementAmount`, allowing it to remember their values between calls.
      </p>
    </div>
  );
};

export default Closure;
