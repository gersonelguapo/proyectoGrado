import { React, createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [users, setUsers] = useState([]);
  const [listUpdated, setListUpdated] = useState(false);

  const [log, setLog] = useState({
    nombre_usuario: "",
    contraseña: "",
  });

  const logUser = (e) => {
    setLog({
      ...log,
      [e.target.name]: e.target.value,
    });
  };

  let { nombre_usuario, contraseña } = log;

  const logSubmit = () => {
    if (nombre_usuario === "" || contraseña === "") {
      alert("Todos los campos son obligatorios para el inicio de sesion");
      return;
    }

    const requestLog = {
      method: "GET",
      params: { nombre_usuario: nombre_usuario, contraseña: contraseña },
    };

    fetch("http://localhost:3000/api/loginusuario", requestLog)
      .then((res) => res.json())
      .then((res) => setLog(res));

    

    setLog({
      nombre_usuario: "",
      contraseña: "",
    });
  };

  useEffect(() => {
    const getUsers = () => {
      fetch("http://localhost:3000/api/usuarios")
        .then((res) => res.json())
        .then((res) => setUsers(res));
    };
    getUsers();
    setListUpdated(false);
  }, [listUpdated]);

  const handleDelete = (id) => {
    const requestInit = {
      method: "DELETE",
    };

    fetch("http://localhost:3000/api/eliminarUsuario/" + id, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    setListUpdated(true);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        handleDelete,
        log,
        logUser,
        logSubmit,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
