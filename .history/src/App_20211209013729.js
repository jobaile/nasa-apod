import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { render } from 'react-dom';
import Home from "./pages/Home";
import NasaPhoto from "./pages/NasaPhoto";

import logo from './logo.svg';
import './App.css';

const Test = () => <p>Test</p>;

function App() {
  return (
      <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/nasaphoto" element={<NasaPhoto/>}/>
      </Routes>
      
  );
}

export default App;
