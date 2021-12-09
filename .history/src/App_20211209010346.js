import React from "react";
import { render } from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route component={ Home } path="/" exact />
          <Route component={ NasaPhoto } path="/nasaphoto" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
