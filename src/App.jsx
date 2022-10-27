import React from "react";
import Login from "./Components/Login";
import Registro from "./Components/Registro";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound";
import Navbar from "./Components/Navbar";
import Personal from "./Components/InfoEgresados/Personal";
import Academica from "./Components/InfoEgresados/Academica";
import FormEgresado from "./Components/LayoutTry/FormEgresado";

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
        <Route path="/profile" element={<FormEgresado/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
