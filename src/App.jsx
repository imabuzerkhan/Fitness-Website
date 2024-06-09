import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import Gallery from "./Pages/gallery/Gallery";
import About from "./Pages/about/About";
import Contact from "./Pages/contact/Contact";
import Plans from "./Pages/Plans/Plans";
import Trainers from "./Pages/trainers/Trainers";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/trainers" element={<Trainers />} />
      </Routes>
    </Router>
  );
}

export default App;
