import React, { useState } from "react";
import "./symptomsForm.css"; // copy your styles.css into this file

const SymptomsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    symptoms: [],
    otherSymptoms: "",
    duration: "",
    onset: "",
    recentTravel: "",
  });

  // handle input/select/textarea
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle checkboxes (symptoms)
  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      if (checked) {
        return { ...prev, symptoms: [...prev.symptoms, value] };
      } else {
        return { ...prev, symptoms: prev.symptoms.filter((s) => s !== value) };
      }
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Patient Data:", formData);

    alert("Form submitted successfully ✅");

    // 🚀 later we connect this to backend:
    // fetch("http://localhost:3000/symptoms", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // })
    // .then((res) => res.json())
    // .then((data) => console.log("Saved:", data))
    // .catch((err) => console.error(err));
  };

  return (
    <div className="form-container">
      <h2>Patient Medical Form</h2>
      <form onSubmit={handleSubmit}>
        
        {/* Personal Info */}
        <div className="section-title">Personal Information</div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone"
            />
          </div>
        </div>

        {/* Age + Gender */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="1"
              max="120"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
        </div>

        {/* Symptoms */}
        <div className="section-title">Current Symptoms</div>
        <div className="checkbox-container">
          <label>Select all symptoms you are currently experiencing:</label>
          <div className="checkbox-grid">
            {[
              "Fever",
              "Cough",
              "Headache",
              "Fatigue",
              "Body Pain",
              "Nausea",
              "Dizziness",
              "Breathing Difficulty",
              "Chest Pain",
              "Stomach Pain",
            ].map((symptom) => (
              <label key={symptom} className="checkbox-item">
                <input
                  type="checkbox"
                  value={symptom}
                  checked={formData.symptoms.includes(symptom)}
                  onChange={handleCheckbox}
                />
                {symptom}
              </label>
            ))}
          </div>
        </div>

        {/* Other Symptoms */}
        <div className="form-group">
          <label htmlFor="otherSymptoms">Additional symptoms not listed:</label>
          <textarea
            name="otherSymptoms"
            value={formData.otherSymptoms}
            onChange={handleChange}
            placeholder="Please describe..."
          />
        </div>

        {/* Timeline & Duration */}
        <div className="section-title">Timeline & Duration</div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="duration">How long have you had these symptoms?</label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            >
              <option value="">Select duration</option>
              <option value="less-than-24h">Less than 24 hours</option>
              <option value="1-3-days">1-3 days</option>
              <option value="4-7-days">4-7 days</option>
              <option value="1-2-weeks">1-2 weeks</option>
              <option value="2-4-weeks">2-4 weeks</option>
              <option value="more-than-month">More than a month</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="onset">How did symptoms start?</label>
            <select
              name="onset"
              value={formData.onset}
              onChange={handleChange}
            >
              <option value="">Select onset type</option>
              <option value="gradual">Gradually over time</option>
              <option value="sudden">Suddenly/All at once</option>
              <option value="intermittent">Come and go</option>
              <option value="worsening">Getting progressively worse</option>
            </select>
          </div>
        </div>

        {/* Additional Info */}
        <div className="section-title">Additional Information</div>
        <div className="form-group">
          <label htmlFor="recentTravel">
            Have you traveled recently or been exposed to anyone sick?
          </label>
          <textarea
            name="recentTravel"
            value={formData.recentTravel}
            onChange={handleChange}
            placeholder="Please describe..."
          />
        </div>

        {/* Submit */}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SymptomsForm;
