import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Business from "./pages/Business";
import Politics from "./pages/Politics";
import FilmsEntertainment from "./pages/Films";
import Crypto from "./pages/Crypto";
import Sports from "./pages/Sports";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="p-5 font-serif text-2xl mb-3 space-x-6 underline text-red-400 overflow-x-auto items-center grid grid-flow-col place-items-center">
        <Link to="/Sports" className="">
          Sports
        </Link>
        <Link to="/Business" className="">
          Business
        </Link>
        <Link to="/Politics" className="">
          Politics
        </Link>
        <Link to="/Films" className="">
          Films
        </Link>
        <Link to="/Crypto" className="">
          Crypto
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Business" element={<Business />} />
        <Route path="/Politics" element={<Politics />} />
        <Route path="/Films" element={<FilmsEntertainment />} />
        <Route path="/Crypto" element={<Crypto />} />
        <Route path="/Sports" element={<Sports />} />
      </Routes>
    </Router>
  );
}

export default App;