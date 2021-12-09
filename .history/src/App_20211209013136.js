import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { render } from 'react-dom';
import Home from "./routes/Home";
import NasaPhoto from "./routes/NasaPhoto";

import logo from './logo.svg';
import './App.css';

const Test = () => <p>Test</p>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route component={ Test } path="/" exact />
          <Route component={ NasaPhoto } path="/nasaphoto" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
