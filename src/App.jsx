import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Component from "./components/Component";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/component" element={<Component />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
