import React from "react";
import { Routes, Route } from "react-router-dom";
import Registro from "./Components/ValidacionUsers/Registro";
import Login from "./Components/ValidacionUsers/Login";
import Personal from "./Components/InfoEgresados/Personal";
import Academica from "./Components/InfoEgresados/Academica";
import NotFound from "./Components/NotFound";
import FormEgresado from "./Components/InfoEgresados/FormEgresado";
import Dashboard from "./Components/Navigation/Dashboard";
import CreatePost from "./Components/SetAnuncios/CreatePost";
import GetAnuncios from "./Components/SetAnuncios/GetAnuncios";

function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Registro />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/academica" element={<Academica />} />
      <Route path="/profile" element={<FormEgresado />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/crearpost" element={<CreatePost/>}/>
      <Route path="/anuncios" element={<GetAnuncios/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Rutas;
