import React, { useState } from "react";
import InputField from "../components/InputField";

export default function patientLogin() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Here you'd call your API (you can build login API later)
      console.log("Logging in:", form);
      alert("Login successful (dummy)!");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <InputField label="Email" type="email" value={form.email} onChange={handleChange("email")} />
        <InputField label="Password" type="password" value={form.password} onChange={handleChange("password")} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
