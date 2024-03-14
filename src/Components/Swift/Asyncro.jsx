import React from "react";
import Card from "./Card";

const AsynchronousProgramming = () => {
  return (
    <div className="py-[5rem] px-[15rem]">
      <h1 className="text-4xl font-medium p-4 text-white text-left ">
        Asynchronous Programming
      </h1>
      <p className="text-white text-left px-8 py-4 space-y-8">
        Asynchronous programming in Swift allows you to execute tasks
        concurrently, making your applications more responsive. Swift provides
        several mechanisms for handling asynchronous operations. Let's explore
        the key concepts of asynchronous programming in Swift:
      </p>

      <h2 className="text-2xl font-medium p-4 text-white text-left">
        1. Grand Central Dispatch (GCD)
      </h2>
      <p className="text-white text-left px-8 py-4">
        GCD is a low-level API in Swift for managing concurrent operations. You
        can use it to dispatch tasks to different queues, controlling the
        execution of code in a concurrent or serial manner. For example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`let concurrentQueue = DispatchQueue(label: "com.example.concurrent", attributes: .concurrent)

concurrentQueue.async {
  // Code to execute concurrently
}`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        The `async` method is used to dispatch a task to a concurrent queue,
        allowing it to execute concurrently with other tasks.
      </p>

      <h2 className="text-2xl font-medium p-4 text-white text-left">
        2. Asynchronous Functions
      </h2>
      <p className="text-white text-left px-8 py-4">
        Swift supports asynchronous functions, introduced in Swift 5.5. These
        functions allow you to perform asynchronous tasks more concisely using
        the `async` and `await` keywords. For example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`func fetchData() async throws -> Data {
  // Asynchronous code to fetch data
}

do {
  let result = try await fetchData()
  // Process the fetched data
} catch {
  // Handle errors
}`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        The `async` keyword is used to define asynchronous functions, and
        `await` is used to wait for the result of asynchronous operations.
      </p>

      <h2 className="text-2xl font-medium p-4 text-white text-left">
        3. Combine Framework
      </h2>
      <p className="text-white text-left px-8 py-4">
        Combine is a framework introduced in Swift for handling asynchronous and
        event-driven code. It provides a declarative Swift API for processing
        values over time. For example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`import Combine

let publisher = URLSession.shared.dataTaskPublisher(for: URL(string: "https://example.com")!)
  .map(\.data)
  .sink { completion in
    // Handle completion
  } receiveValue: { data in
    // Process the received data
  }`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        Combine simplifies the handling of asynchronous operations through a
        functional and declarative API, making it easier to work with
        asynchronous code.
      </p>

      <h2 className="text-2xl font-medium p-4 text-white text-left">
        4. Asynchronous Sequences
      </h2>
      <p className="text-white text-left px-8 py-4">
        Swift 5.5 introduced asynchronous sequences, allowing you to work with
        sequences of values produced asynchronously. This enables you to use
        `for...await` loops to iterate over asynchronous sequences. For example:
      </p>
      <div className="">
        <Card
          content={
            <pre
              style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
            >{`let asynchronousSequence = AsyncStream<Int> { continuation in
  DispatchQueue.global().async {
    continuation.yield(1)
    continuation.yield(2)
    continuation.finish()
  }
}

for try await number in asynchronousSequence {
  // Process each asynchronously yielded number
}`}</pre>
          }
        />
      </div>

      <p className="text-white text-left px-8 py-8">
        Asynchronous sequences provide a convenient way to work with values that
        are produced asynchronously over time.
      </p>
    </div>
  );
};

export default AsynchronousProgramming;
