import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import NasaPhoto from "./routes/NasaPhoto";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <Routes>
          <Route component={ Home } path="/" exact />
          <Route component={ NasaPhoto } path="/nasaphoto" />
      </Routes>
  );
}

export default App;
