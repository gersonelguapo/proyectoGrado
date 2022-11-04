import { React, createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [users, setUsers] = useState([]);
  const [listUpdated, setListUpdated] = useState(false);
  let logEgre = [];
  let point = "";

  const [log, setLog] = useState({
    username: "",
    password: "",
  });

  let { username, password } = log;

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

  const logUser = (e) => {
    setLog({
      ...log,
      [e.target.name]: e.target.value,
      
    });
    console.log(log);
  };

  const logSubmit = (e) => {
    e.preventDefault();
    logEgre = users.filter(
      (user) => user.nombre_usuario === username && user.contraseña === password
    );
  };

  return (
    <UserContext.Provider
      value={{
        users,
        handleDelete,
        log,
        logUser,
        logSubmit,
        logEgre,
        point,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
