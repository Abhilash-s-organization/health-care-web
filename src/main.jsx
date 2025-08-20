import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import RegisterPatient from "./screens/RegisterPatient";
import patientLogin from "./screens/patientLogin.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<RegisterPatient />} />
        <Route path="/login" element={<patientLogin />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
