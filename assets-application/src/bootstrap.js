import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Create from "./Create";
import Home from "./Home";

const prefix = "assets";

const router = createBrowserRouter([
  {
    path: `${prefix}/`,
    element: <Home />,
  },
  {
    path: `${prefix}/create`,
    element: <Create />,
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);
