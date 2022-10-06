import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateAsset from "./CreateAsset";
import Home from "./Home";

const prefix = "assets";

const App = () => {
  return (
    <Routes>
      <Route path={`${prefix}/`} element={<Home />} />
      <Route path={`${prefix}/create`} element={<CreateAsset />} />
    </Routes>
  );
};

export default App;
