import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import RegisterPatient from "./screens/RegisterPatient";
import { CreateAppointments, DisplayAppointments } from "./screens/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<RegisterPatient />} />
        <Route path="/login" element={<patientLogin />} />
        <Route path="/appointments" element={<DisplayAppointments />} />
        <Route path="/create" element={<CreateAppointments />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
