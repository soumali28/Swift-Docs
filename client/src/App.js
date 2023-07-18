import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import JpgToPdf from "./components/JpgToPdf";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jpg_to_pdf" element={<JpgToPdf />} />
      </Routes>
    </>
  );
};


export default App;
