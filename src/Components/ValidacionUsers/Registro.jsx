import { React, useContext} from "react";
import { NavLink, useNavigate} from "react-router-dom";
import { CreateUserContext } from "../../Context/CreateUserContext";

function Registro() {

  const navigate = useNavigate();

  const { addUser, createUser, handleSubmit} = useContext(CreateUserContext);

  const {nombre, apellido, nombre_usuario, contraseña, fecha_registro} =  addUser;
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="h-auto w-4/6 grid grid-cols-2">
        <div className="w-full h-full bg-slate-800">
          <img
            className="w-full h-full"
            src="src\Images\LoginImage.jpeg"
            alt=""
          />
        </div>
        <div className="w-full h-full bg-slate-800 flex items-start">
          <form className="h-5/6 p-10" onSubmit={handleSubmit}>
            <h1 className="capitalize text-white font-bold text-2xl mb-8 text-center">
              Registro de Usuario
            </h1>
            <input
              name="nombre"
              placeholder="Nombres"
              className="bg-slate-300 p-3 w-full mb-7 rounded-md placeholder:font-bold placeholder:text-slate-700"
              autoFocus
              onChange={createUser}
              value={nombre}
            />
            <input
              type="text"
              name="apellido"
              placeholder="Apellidos"
              className="bg-slate-300 p-3 w-full mb-7 rounded-md placeholder:font-bold placeholder:text-slate-700"
              onChange={createUser}
              value={apellido}
            />

            <input
              type="text"
              name="nombre_usuario"
              placeholder="nombre_usuario"
              className="bg-slate-300 p-3 w-full mb-7 rounded-md placeholder:font-bold placeholder:text-slate-700"
              onChange={createUser}
              value={nombre_usuario}
            />

            <input
              type="password"
              name="contraseña"
              placeholder="Contraseña"
              className="bg-slate-300 p-3 w-full mb-7 rounded-md placeholder:font-bold placeholder:text-slate-700"
              onChange={createUser}
              value={contraseña}
            />

            <input
              type="text"
              name="fecha_registro"
              placeholder="Fecha Registro '00-00-00'"
              className="bg-slate-300 p-3 w-full mb-7 rounded-md placeholder:font-bold placeholder:text-slate-700"
              onChange={createUser}
              value={fecha_registro}
            />

            {/* <div className="flex items-baseline ">
              <input
                type="checkbox"
                className="mr-1"
                id="checkbox"
                value="checkbox"
              />{" "}
              <label className="text-slate-400 capitalize">
                Acepto terminos y condiciones
              </label>
            </div> */}

            <button
              onClick={() => navigate("/")}
              className="bg-indigo-500 mt-10 w-full px-4 py-2 text-white rounded-md hover:bg-indigo-400"
              type="submit"
            >
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