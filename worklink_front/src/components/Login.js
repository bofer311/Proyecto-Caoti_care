import React, { useState } from "react";
import { login } from "../utils/Api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      // Manejar la respuesta del login
    } catch (err) {
      setError("Error de autenticación");
    }
  };

  return (
    <div className="container">
      <h1>Iniciar Sesión</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="button">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default Login;
