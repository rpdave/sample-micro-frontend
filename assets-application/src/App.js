import React from "react";
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

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
