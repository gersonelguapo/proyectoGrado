import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Assets/index.css";
import { UserContextProvider } from "./Context/UserContext";
import { CreateUserContextProvider } from "./Context/CreateUserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <CreateUserContextProvider>
          <App />
      </CreateUserContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
