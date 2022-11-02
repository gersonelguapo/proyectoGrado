import { React, createContext, useState, useEffect } from "react";

export const CreateUserContext = createContext();

export function CreateUserContextProvider(props) {

  const [addUser, setAddUser] = useState({
    nombre: "",
    apellido: "",
    nombre_usuario: "",
    contraseña: "",
    fecha_registro: "",
  });

  const createUser = (e) => {
    setAddUser({
      ...addUser,
      [e.target.name]: e.target.value,
    });
  };

  let { nombre, apellido, nombre_usuario, contraseña, fecha_registro } =
    addUser;

  const handleSubmit = () => {
    if (
      nombre === "" ||
      apellido === "" ||
      nombre_usuario === "" ||
      contraseña === "" ||
      fecha_registro === ""
    ) {
      alert("Todos los campos son obligatorios para el inicio de sesion");
      return;
    }

    const requestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addUser),
    };

    fetch("http://localhost:3000/api/crearUsuario", requestInit)
      .then((res) => res.json())
      .then((res) => setAddUser(res));

    setAddUser({
      nombre: "",
      apellido: "",
      nombre_usuario: "",
      contraseña: "",
      fecha_registro: "",
    });
  };

  return (
    <CreateUserContext.Provider value={{
      addUser,
      createUser,
      handleSubmit,
    }}>
      {props.children}
    </CreateUserContext.Provider>
  )
}