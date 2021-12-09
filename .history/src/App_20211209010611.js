import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
          <Route component={ Home } path="/" exact />
          <Route component={ NasaPhoto } path="/nasaphoto" />
      </Routes>
    </div>
  );
}

export default App;
