import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateAsset from "./CreateAsset";
import Home from "./Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateAsset />} />
    </Routes>
  );
};

export default App;
