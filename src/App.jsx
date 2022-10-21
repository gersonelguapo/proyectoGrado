import React from "react";
import Login from "./Components/Login";
import Registro from "./Components/Registro";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound";
import Navbar from "./Components/Navbar";
import Personal from "./Components/InfoEgresados/Personal";
import Academica from "./Components/InfoEgresados/Academica";

function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Registro />} />
        <Route path="/personal" element={<Personal/>}/>
        <Route path="/academica" element={<Academica/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
