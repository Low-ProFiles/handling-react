import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/usestate/*" element={<UseState />}/>
        <Route exact path="/useeffect/*" element={<UseEffect />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
