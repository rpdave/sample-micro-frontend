import React from "react";
import { Route, Routes } from "react-router-dom";
import Create from "./Create";
import Home from "./Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
};

export default App;
