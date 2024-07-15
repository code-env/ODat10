import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Component from "./components/Component";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <h1 className="text-black">React Application ready</h1>
        <p className="bg-blue-950 text-blue-400">Welcome to our page</p>
        <Routes>
          <Route path="/component" element={<Component />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
