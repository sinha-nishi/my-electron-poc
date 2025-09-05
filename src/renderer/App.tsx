import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // <-- HashRouter
import Nav from "./ui/Nav";
import Hero from "./ui/Hero";
import CategoryRow from "./ui/Category";
import Filters from "./ui/Filter";
import SectionGrid from "./ui/SectionGrid";

// Pages
import About from "./pages/About";
import Careers from "./pages/Careers";
import Community from "./pages/Community";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <CategoryRow />
              <Filters active={activeFilter} setActive={setActiveFilter} />
              <SectionGrid active={activeFilter} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
