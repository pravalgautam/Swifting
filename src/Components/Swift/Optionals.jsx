import React from "react";
import Card from "./Card";

const Optionals = () => {
  return (
    <div className="py-[5rem] px-[15rem]">
      <h1 className="text-4xl font-medium p-4 text-white text-left ">
        Optionals
      </h1>
      <p className="text-white text-left px-8 py-4 space-y-8">
        Optionals in Swift are a powerful feature that allows variables to
        represent either a value or the absence of a value (nil). They provide a
        safe way to work with the potential absence of data. Let's explore the
        key concepts of optionals in Swift:
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">1. Optional Declaration:</span> You declare
        an optional by appending a `?` to the type declaration. For example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`var optionalInt: Int?
var optionalString: String?
var optionalArray: [Double]?`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        Here, `optionalInt`, `optionalString`, and `optionalArray` are optional
        variables that can hold either an actual value or `nil`.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">2. Unwrapping Optionals:</span> To access
        the value inside an optional, you need to unwrap it. There are multiple
        ways to unwrap an optional. One common method is using optional binding
        with `if let` or `guard let`:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`var optionalName: String? = "John"

if let unwrappedName = optionalName {
  print("Name is \(unwrappedName)")
} else {
  print("Name is nil")
}`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        The `if let` statement unwraps the optional if it contains a value, and
        you can use the unwrapped value within the scope of the block.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">3. Forced Unwrapping:</span> You can force
        unwrap an optional using the `!` operator. However, this should be done
        cautiously, as force unwrapping a `nil` optional will result in a
        runtime crash:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`var optionalAge: Int? = 25
let unwrappedAge = optionalAge!

print("Age is \(unwrappedAge)")`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        Use forced unwrapping only when you are certain the optional contains a
        value.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">4. Nil Coalescing:</span> Nil coalescing
        (`??`) provides a default value for an optional if it is `nil`:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`var optionalCity: String? = "New York"
let cityName = optionalCity ?? "Unknown City"

print("City is \(cityName)")`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        If `optionalCity` is `nil`, the default value "Unknown City" will be
        used.
      </p>

      <p className="text-white text-left px-8 py-4">
        <span className="font-bold">5. Optional Chaining:</span> Optional
        chaining allows you to call properties, methods, and subscripts on an
        optional that might currently be `nil`:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`struct Person {
  var address: Address?
}

struct Address {
  var street: String
}

let person: Person? = Person(address: Address(street: "123 Main St"))
let streetName = person?.address?.street ?? "Unknown Street"

print("Street is \(streetName)")`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        The optional chaining (`?.`) gracefully handles the case where any
        intermediary optional is `nil`.
      </p>
    </div>
  );
};

export default Optionals;
