import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Start from "./components/Start";
import Home from './components/Home';
import Detail from './components/Detail';
import Create from './components/Create';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Start />} />
        <Route exact path="/Home" element={<Home />} />
        <Route path="/recipie/:id" element={<Detail />} />
        <Route path="/recipie/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
