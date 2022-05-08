import React from "react";
import AppHeader from "../components/header/AppHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
import About from "../views/about/About";
import Resume from "../views/resume/Resume";
import Contact from "../views/contact/Contact";

const Layout = () => {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Layout;
