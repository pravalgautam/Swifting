import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

  return (
    <div className="navigation flex flex-col space-y-5 py-20  p-10 justify-start items-center h-screen ">
      <Link
        to="/"
        className="text-white   font-bold hover:text-green-400 hover:ml-8 "
      >
        Home
      </Link>

      <Link
        to="/swift"
        className="text-white   font-light hover:text-green-400 hover:ml-8 "
      >
        Variables
      </Link>
      <Link
        to="/swift/datatypes"
        className="text-white  hover:text-green-400 font-light hover:ml-8 "
      >
        Datatypes
      </Link>
      <Link
        to="/swift/operators"
        className="text-white  hover:text-green-400 font-light hover:ml-8 "
      >
        Operators
      </Link>
      <Link
        to="/swift/conditionals"
        className="text-white  hover:text-green-400 font-light hover:ml-8 "
      >
        Conditionals
      </Link>
      <Link
        to="/swift/functions"
        className="text-white  hover:text-green-400 font-light hover:ml-8 "
      >
        Functions
      </Link>
      <Link
        to="/swift/closure"
        className="text-white  hover:text-green-400 font-light hover:ml-8 "
      >
        Closure
      </Link>
      <Link
        to="/swift/structures"
        className="text-white  hover:text-green-400 font-light hover:ml-8 "
      >
        Structures
      </Link>
      <Link
        to="/swift/enumeration"
        className="text-white  hover:text-green-400 font-light hover:ml-8 "
      >
        Enumeration
      </Link>
      <Link
        to="/swift/class"
        className="text-white  hover:text-green-400 font-light hover:ml-8 "
      >
        Class
      </Link>
      <Link
        to="/swift/protocols"
        className="text-white  hover:text-green-400 font-light hover:ml-8 "
      >
        Protocols
      </Link>
      <Link
        to="/swift/extensions"
        className="text-white  hover:text-green-400 font-light hover:ml-8 "
      >
        Extensions
      </Link>
      <Link
        to="/swift/protocols"
        className="text-white  hover:text-green-400 font-light hover:ml-8 "
      >
        Protocols
      </Link>
      <Link
        to="/swift/generics"
        className="text-white  hover:text-green-400 font-light hover:ml-8 "
      >
        Generics
      </Link>
      <Link
        to="/swift/optionals"
        className="text-white  hover:text-green-400 font-light hover:ml-8 "
      >
        Optionals
      </Link>
      <Link
        to="/swift/collections"
        className="text-white  hover:text-green-400 font-light hover:ml-8 "
      >
        Collections
      </Link>
      <Link
        to="/swift/equality"
        className="text-white  hover:text-green-400 font-light hover:ml-8 "
      >
        Equality
      </Link>
      <Link
        to="/swift/hashing"
        className="text-white  hover:text-green-400 font-light hover:ml-8 "
      >
        Hashing
      </Link>
      <Link
        to="/swift/async"
        className="text-white  hover:text-green-400 font-light hover:ml-8 "
      >
        Async
      </Link>
    </div>
  );
};

export default Sidebar;
