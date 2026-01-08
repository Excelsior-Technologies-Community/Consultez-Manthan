import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Testi from "./Pages/Testi";
import About from "./Pages/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Layout />}>
            <Route path="/testi" element={<Testi />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
