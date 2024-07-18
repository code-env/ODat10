import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Schedule from "./components/Schedule";
import Partners from "./components/Partners";
import Speakers from "./components/Speakers";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 sm:py-5 lg:px-8">
        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/speakers" element={<Speakers />} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
