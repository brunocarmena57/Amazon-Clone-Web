import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import Home from "./Home";
import Header from './Header';
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>

        <Route path="/" element ={[<Header />, <Home />]} />


        <Route path="/checkout" element={[<Header />, <Checkout />]} />
  
  </Routes>
    
  </div>
  </Router>
  );
}

export default App;
