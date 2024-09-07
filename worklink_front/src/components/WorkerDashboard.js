import React, { useState } from "react";
import axios from "axios";

const WorkerDashboard = () => {
  const [specialty, setSpecialty] = useState("");

  const handleAddSpecialty = async () => {
    try {
      await axios.patch(
        "http://localhost:3001/api/auth/add-specialty",
        { specialty },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      // Handle success
    } catch (error) {
      console.error("Error adding specialty:", error);
    }
  };

  return (
    <div>
      <h2>Worker Dashboard</h2>
      <input
        type="text"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
        placeholder="Add a new specialty"
      />
      <button onClick={handleAddSpecialty}>Add Specialty</button>
    </div>
  );
};

export default WorkerDashboard;
