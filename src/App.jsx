import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to Health Care</h1>
        <p>Your trusted companion for patient management</p>
      </header>

      <div className="button-group">
        <button onClick={() => navigate("/register")}>Register Patient</button>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>

      <footer className="landing-footer">
        <p>Made with ❤️ | Health Care System</p>
      </footer>
    </div>
  );
}

export default App;
