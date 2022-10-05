import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";

const prefix = "inventory";

const router = createBrowserRouter([
  {
    path: `${prefix}/`,
    element: <Home />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
