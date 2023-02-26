import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { setupDatabase } from "./database.js";

const database = setupDatabase();

const AppRoot = ReactDOM.createRoot(document.getElementById("app-root"));

AppRoot.render(<App database={database} />);
