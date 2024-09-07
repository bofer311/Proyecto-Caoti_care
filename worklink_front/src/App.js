import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "D:/TSDS/TSDS 3ER AÑO/PP3/Proyecto_worklink/worklink_front/src/components/Login.js";
import Register from "D:/TSDS/TSDS 3ER AÑO/PP3/Proyecto_worklink/worklink_front/src/components/Register.js";
import JobRequestForm from "./components/JobRequestForm";
import JobList from "./components/JobList";
import Dashboard from "D:/TSDS/TSDS 3ER AÑO/PP3/Proyecto_worklink/worklink_front/src/Pages/Dashboard";
import HomePage from "D:/TSDS/TSDS 3ER AÑO/PP3/Proyecto_worklink/worklink_front/src/Pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/job-request" component={JobRequestForm} />
        <Route path="/job-list" component={JobList} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </Router>
  );
}

export default App;
