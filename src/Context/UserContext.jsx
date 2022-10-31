import { React, createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [users, setUsers] = useState([]);
  const [listUpdated, setListUpdated] = useState(false);
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
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
