import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateAsset from "./CreateAsset";
import Home from "./Home";

const prefix = "assets";

const router = createBrowserRouter([
  {
    path: `/`,
    element: <Home />,
  },
  {
    path: `/create`,
    element: <CreateAsset />,
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);
