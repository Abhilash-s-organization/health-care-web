import React, { useState } from "react";
import InputField from "../components/InputField";

export default function RegisterPatient() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    bloodType: "",
    emergencyContact: "",
  });

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/patient", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      alert("Patient registered successfully!");
      console.log(data);
    } catch (err) {
      console.error(err);
      alert("Error registering patient");
    }
  };

  return (
    <div className="container">
      <h2>Register Patient</h2>
      <form onSubmit={handleSubmit}>
        <InputField label="First Name" value={form.firstName} onChange={handleChange("firstName")} />
        <InputField label="Last Name" value={form.lastName} onChange={handleChange("lastName")} />
        <InputField label="Date of Birth" type="date" value={form.dob} onChange={handleChange("dob")} />
        <InputField label="Gender" value={form.gender} onChange={handleChange("gender")} />
        <InputField label="Phone" value={form.phone} onChange={handleChange("phone")} />
        <InputField label="Email" type="email" value={form.email} onChange={handleChange("email")} />
        <InputField label="Address" value={form.address} onChange={handleChange("address")} />
        <InputField label="Blood Type" value={form.bloodType} onChange={handleChange("bloodType")} />
        <InputField label="Emergency Contact" value={form.emergencyContact} onChange={handleChange("emergencyContact")} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
