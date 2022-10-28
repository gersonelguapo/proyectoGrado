import React from "react";
import { Routes, Route } from "react-router-dom";
import Registro from "./Components/ValidacionUsers/Registro";
import Login from "./Components/ValidacionUsers/Login";
import Personal from "./Components/InfoEgresados/Personal";
import Academica from "./Components/InfoEgresados/Academica";
import NotFound from "./Components/NotFound";
import FormEgresado from "./Components/InfoEgresados/FormEgresado";
import Dashboard from "./Components/Navigation/Dashboard";

function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Registro />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/academica" element={<Academica />} />
      <Route path="/profile" element={<FormEgresado />} />
      <Route path="*" element={<NotFound />} />

      <Route path="/dashboard" element={<Dashboard/>}/>
      
    </Routes>
  );
}

export default Rutas;
