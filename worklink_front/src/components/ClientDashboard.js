import React, { useState } from "react";
import axios from "axios";

const ClientDashboard = () => {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [photos, setPhotos] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("description", description);
    formData.append("location", location);
    formData.append("dateTime", dateTime);
    photos.forEach((photo, index) =>
      formData.append(`photos[${index}]`, photo)
    );

    try {
      await axios.post("http://localhost:3001/api/jobs", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      // Handle success
    } catch (error) {
      console.error("Error creating job request:", error);
    }
  };

  const handleFileChange = (e) => {
    setPhotos([...e.target.files]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Request a Job</h2>
      <label>Description:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>Location:</label>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <label>Date & Time:</label>
      <input
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
      />
      <label>Photos:</label>
      <input type="file" multiple onChange={handleFileChange} />
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default ClientDashboard;
