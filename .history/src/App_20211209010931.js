import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route component={ Home } path="/" />
          <Route component={ NasaPhoto } path="/nasaphoto" />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
