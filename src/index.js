import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MainPage from "./Components/Swift/MainPage";
import Variables from "./Components/Swift/Variables";
import DataTypes from "./Components/Swift/DataTypes";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Layout from "./Components/Swift/Layout";
import LandingPage from "./Components/LandingPage";
import UILayout from "./Components/UICOmp/UILayout";
import LoginUI from "./Components/UICOmp/LoginUI";
import Operators from "./Components/Swift/Operators";
import Conditionals from "./Components/Swift/Conditionals";
import Functions from "./Components/Swift/Functions";
import Closure from "./Components/Swift/Closure";
import Structures from "./Components/Swift/Structures";
import Enumeration from "./Components/Swift/Enumeration";
import Class from "./Components/Swift/Class";
import Protocols from "./Components/Swift/Protocols";
import Extensions from "./Components/Swift/Extensions";
import Asyncro  from "./Components/Swift/Asyncro";
import Generics from  "./Components/Swift/Generics";
import Hashing from "./Components/Swift/Hashing";
import Optionals from "./Components/Swift/Optionals";
import Collections from "./Components/Swift/Collections"
import Equality from "./Components/Swift/Equality"
import ScaleButton from "./Components/UICOmp/ScaleButton"
import GradientButton from "./Components/UICOmp/GradientButton"
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/swift",
    element: <Layout />,
    children: [
      { index: true, element: <Variables /> },
      { path: "datatypes", element: <DataTypes /> },
      { path: "operators", element: <Operators /> },
      { path: "conditionals", element: <Conditionals /> },
      { path: "functions", element: <Functions /> },
      { path: "closure", element: <Closure /> },
      { path: "structures", element: <Structures /> },
      { path: "enumeration", element: <Enumeration /> },
      { path: "class", element: <Class/> },
      { path: "protocols", element: <Protocols/> },
      { path: "extensions", element: <Extensions/> },
      { path: "generics", element: <Generics/> },
      { path: "optionals", element: <Optionals/> },
      { path: "collections", element: <Collections/> },
      { path: "equality", element: <Equality/> },
      { path: "hashing", element: <Hashing/> },
      { path: "async", element: <Asyncro/> },

    ],
  },
  {
    path: "/ui",
    element: <UILayout />,
    children: [{ index: true, element: <LoginUI /> },
    {path:"scalebutton",element:<ScaleButton/>},
    {path:"gradientbutton",element:<GradientButton/>}
  ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
