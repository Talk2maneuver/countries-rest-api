import React from "react";
import { useState } from "react";
import "./countries-rest-api/style.css";
import Firstnav from "./countries-rest-api/Firstnav";
import Home from "./countries-rest-api/Home";
import Detail from "./countries-rest-api/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <Firstnav darkMode={darkMode} toggleMode={toggleMode} />
      <Router>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/detail" element={<Detail darkMode={darkMode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
