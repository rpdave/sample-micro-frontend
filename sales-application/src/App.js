import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Overview from "./Overview";

const prefix = "sales";

const router = createBrowserRouter([
  {
    path: `${prefix}/`,
    element: <Home />,
  },
  {
    path: `${prefix}/overview`,
    element: <Overview />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
