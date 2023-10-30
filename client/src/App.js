import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import ConvertContainer from "./components/ConvertContainer";
import Login from "./pages/Login";

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
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/pdf_to_word" element={<ConvertContainer />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
