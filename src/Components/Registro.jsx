import React from "react";
import { NavLink } from "react-router-dom";

function Registro() {
  return (
      <main className="h-screen flex items-center justify-center">
        <div className="h-4/6 w-4/6 grid grid-cols-2">
          <div className="w-full h-full">
            <img className="w-full" src="src\Images\LoginImage.jpeg" alt="" />
          </div>
          <div className="w-full h-full bg-slate-800 flex items-start">
            <form className="h-5/6 p-10">
              <h1 className="capitalize text-white font-bold text-2xl mb-8 text-center">
                Registro de Usuario
              </h1>
              <input
                placeholder="Nombre de Usuario"
                className="bg-slate-300 p-3 w-full mb-7 rounded-md placeholder:font-bold placeholder:text-slate-700"
                autoFocus
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="bg-slate-300 p-3 w-full mb-7 rounded-md placeholder:font-bold placeholder:text-slate-700"
              />

              <input
                type="text"
                placeholder="Numero de cedula"
                className="bg-slate-300 p-3 w-full mb-7 rounded-md placeholder:font-bold placeholder:text-slate-700"
              />

              <input
                type="text"
                placeholder="Correo"
                className="bg-slate-300 p-3 w-full mb-7 rounded-md placeholder:font-bold placeholder:text-slate-700"
              />

              <input
                type="text"
                placeholder="Programa Academico"
                className="bg-slate-300 p-3 w-full mb-7 rounded-md placeholder:font-bold placeholder:text-slate-700"
              />

              <input
                type="text"
                placeholder="Fecha de nacimiento"
                className="bg-slate-300 p-3 w-full mb-7 rounded-md placeholder:font-bold placeholder:text-slate-700"
              />

              <div className="flex items-baseline ">
                <input
                  type="checkbox"
                  className="mr-1"
                  id="checkbox"
                  value="checkbox"
                />{" "}
                <label className="text-slate-400 capitalize">
                  Acepto terminos y condiciones
                </label>
              </div>

              <button className="bg-indigo-500 mt-10 w-full px-4 py-2 text-white rounded-md hover:bg-indigo-400">
                Registrar
              </button>
              <NavLink
                to="/"
                className="mt-2 flex justify-center hover:underline text-slate-400 hover:text-slate-600"
              >
                {" "}
                Iniciar Sesion
              </NavLink>
            </form>
          </div>
        </div>
      </main>
  );
}

export default Registro;
