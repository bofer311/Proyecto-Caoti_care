import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container">
      <h1>Bienvenido a Worklink</h1>
      <Link to="/login" className="button">
        Iniciar Sesión
      </Link>
      <Link to="/register" className="button">
        Registrar
      </Link>
      <Link to="/job-request" className="button">
        Solicitar Trabajo
      </Link>
      <Link to="/job-list" className="button">
        Ver Solicitudes
      </Link>
    </div>
  );
}

export default HomePage;
