// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Obtener el elemento root de forma segura
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("No se encontró el elemento con id 'root'");
}