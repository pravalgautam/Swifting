import React from "react";

const Freelance = () => {
  return (
    <div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="ios-developer-image.jpg"
              alt="iOS Developer"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              iOS Developer
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              John Doe
            </a>
            <p className="mt-2 text-gray-500">
              Expert in iOS app development using Swift and UIKit. Experienced
              in designing and implementing user-friendly interfaces.
            </p>
            <div className="mt-4">
              <span className="text-gray-500">Skills: </span>
              <span className="text-indigo-600">
                Swift, UIKit, Core Data, Auto Layout
              </span>
            </div>
            <div className="mt-4">
              <span className="text-gray-500">Hourly Rate: </span>
              <span className="text-green-600 font-semibold">$50/hour</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freelance;
