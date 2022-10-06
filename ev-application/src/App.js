import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const App = (props) => {
  const prefix = props.prefix || "";
  return (
    <Routes>
      <Route path={`${prefix}/`} element={<Home />} />
    </Routes>
  );
};

export default App;
