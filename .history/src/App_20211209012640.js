import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import NasaPhoto from "./routes/NasaPhoto";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
          <Route component={ Home } path="/" />
          <Route component={ NasaPhoto } path="/nasaphoto" />
    </BrowserRouter>
  );
}

export default App;
