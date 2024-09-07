import React, { useEffect, useState } from "react";
import { fetchJobRequests } from "../utils/Api";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const response = await fetchJobRequests();
        setJobs(response.data);
      } catch (err) {
        setError("Error al cargar las solicitudes");
      }
    };

    loadJobs();
  }, []);

  return (
    <div className="container">
      <h1>Lista de Solicitudes de Trabajo</h1>
      {error && <p className="error-message">{error}</p>}
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p>
              <strong>Ubicación:</strong> {job.location}
            </p>
            <p>
              <strong>Fecha y Hora:</strong>{" "}
              {new Date(job.dateTime).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
