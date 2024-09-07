import React, { useState } from "react";
import { createJobRequest } from "../utils/Api";

function JobRequestForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createJobRequest({
        title,
        description,
        location,
        dateTime,
      });
      // Manejar la respuesta de la solicitud de trabajo
    } catch (err) {
      setError("Error al crear la solicitud");
    }
  };

  return (
    <div className="container">
      <h1>Crear Solicitud de Trabajo</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ubicación"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
        />
        <button type="submit" className="button">
          Enviar Solicitud
        </button>
      </form>
    </div>
  );
}

export default JobRequestForm;
