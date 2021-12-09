import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NasaPhoto from "./pages/NasaPhoto";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/nasaphoto" element={<NasaPhoto/>}/>
      </Routes>
  );
}

export default App;
