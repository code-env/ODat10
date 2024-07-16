import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Component />} />
          <Route path="/component" element={<Component />} />
          <Route path="/component" element={<Component />} />
          <Route path="/component" element={<Component />} />
          <Route path="/component" element={<Component />} />
          <Route path="/component" element={<Component />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
