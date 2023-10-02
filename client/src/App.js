import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import JpgToPdf from "./components/JpgToPdf";
import Register from "./components/Register";
import PdfToJpg from "./components/PdfToJpg";
import PdfToWord from "./components/PdfToWord";
import WordToPdf from "./components/WordToPdf";
import PdfToPpt from "./components/PdfToPpt";
import PptToPdf from "./components/PptToPdf";
import CompressPdf from "./components/CompressPdf";
import CompressPpt from "./components/CompressPpt";
import CompressExcel from "./components/CompressExcel";

const App = () => {
  const [theme, setTheme] = React.useState("retro");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "retro" ? "business" : "retro"));
  };
  React.useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home theme={theme}/>} />
        <Route path="/jpg_to_pdf" element={<JpgToPdf />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pdf_to_jpg" element={<PdfToJpg />} />
        <Route path="/pdf_to_word" element={<PdfToWord />} />
        <Route path="/word_to_pdf" element={<WordToPdf />} />
        <Route path="/pdf_to_ppt" element={<PdfToPpt />} />
        <Route path="/ppt_to_pdf" element={<PptToPdf />} />
        <Route path="/cmp_pdf" element={<CompressPdf />} />
        <Route path="/cmp_ppt" element={<CompressPpt />} />
        <Route path="/cmp_excel" element={<CompressExcel />} />
      </Routes>
    </>
  );
};

export default App;
