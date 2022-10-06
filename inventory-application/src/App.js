import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const App = (props) => {
  const prefix = props.prefix || "";
  return (
    <Routes>
      <Route path={`${prefix}/`} element={<Home />} />
      <Route path="*" element={<p>Not Found</p>} />
    </Routes>
  );
};
export default App;
