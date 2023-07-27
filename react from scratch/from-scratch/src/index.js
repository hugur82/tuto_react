import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import App from "./App";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
