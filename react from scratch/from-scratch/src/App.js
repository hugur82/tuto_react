import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import About from "./pages/About";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
