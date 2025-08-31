import React, { useState } from "react";
import "./DiseasesTracker.css";

const DiseasesTracker = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
    },
    diseases: {
      diabetes: false,
      hypertension: false,
      covid19: false,
      asthma: false,
      heartDisease: false,
      cancer: false,
      arthritis: false,
      alzheimers: false,
      otherDiseases: "",
    },
    details: {
      diabetesType: "",
      hypertensionSeverity: "",
      covid19Status: "",
      asthmaTrigger: "",
      heartDiseaseType: "",
      cancerType: "",
    },
    additionalInfo: {
      familyHistory: "",
      medications: "",
    },
  });

  const diseasesList = [
    { name: "diabetes", label: "Diabetes", icon: "🩸" },
    { name: "hypertension", label: "Hypertension", icon: "🫀" },
    { name: "covid19", label: "COVID-19", icon: "🦠" },
    { name: "asthma", label: "Asthma", icon: "🌬️" },
    { name: "heartDisease", label: "Heart Disease", icon: "❤️" },
    { name: "cancer", label: "Cancer", icon: "🎗️" },
    { name: "arthritis", label: "Arthritis", icon: "🦴" },
    { name: "alzheimers", label: "Alzheimer's", icon: "🧠" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        diseases: { ...prev.diseases, [name]: checked },
      }));
    } else {
      const [section, field] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [section]: { ...prev[section], [field]: value },
      }));
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your information has been submitted successfully.");
  };

  return (
    <div className="tracker-container">
      <h1>Major Diseases Tracker</h1>
      <div className="progress-bar">
        <div className={`step ${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`step ${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`step ${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="step-container">
            <h2>Personal Information</h2>
            <div className="form-group">
              <label>First Name*</label>
              <input
                type="text"
                name="personalInfo.firstName"
                value={formData.personalInfo.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name*</label>
              <input
                type="text"
                name="personalInfo.lastName"
                value={formData.personalInfo.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email*</label>
              <input
                type="email"
                name="personalInfo.email"
                value={formData.personalInfo.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="personalInfo.phone"
                value={formData.personalInfo.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Age*</label>
              <input
                type="number"
                name="personalInfo.age"
                value={formData.personalInfo.age}
                onChange={handleChange}
                min="1"
                max="120"
                required
              />
            </div>
            <div className="form-group">
              <label>Gender*</label>
              <select
                name="personalInfo.gender"
                value={formData.personalInfo.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>
            <button type="button" onClick={nextStep} className="next-btn">
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="step-container">
            <h2>Select Major Diseases</h2>
            <p>Select all that apply:</p>
            <div className="diseases-grid">
              {diseasesList.map((disease) => (
                <label key={disease.name} className="disease-item">
                  <input
                    type="checkbox"
                    name={disease.name}
                    checked={formData.diseases[disease.name]}
                    onChange={handleChange}
                  />
                  <span className="disease-icon">{disease.icon}</span>
                  <span>{disease.label}</span>
                </label>
              ))}
            </div>
            <div className="form-group">
              <label>Other Diseases</label>
              <textarea
                name="diseases.otherDiseases"
                value={formData.diseases.otherDiseases}
                onChange={handleChange}
                placeholder="List any other diseases..."
              />
            </div>

            {formData.diseases.diabetes && (
              <div className="form-group">
                <label>Type of Diabetes</label>
                <select
                  name="details.diabetesType"
                  value={formData.details.diabetesType}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                  <option value="gestational">Gestational</option>
                </select>
              </div>
            )}

            {formData.diseases.hypertension && (
              <div className="form-group">
                <label>Severity of Hypertension</label>
                <select
                  name="details.hypertensionSeverity"
                  value={formData.details.hypertensionSeverity}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="mild">Mild</option>
                  <option value="moderate">Moderate</option>
                  <option value="severe">Severe</option>
                </select>
              </div>
            )}

            {formData.diseases.covid19 && (
              <div className="form-group">
                <label>COVID-19 Status</label>
                <select
                  name="details.covid19Status"
                  value={formData.details.covid19Status}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="active">Active</option>
                  <option value="recovered">Recovered</option>
                  <option value="vaccinated">Vaccinated</option>
                </select>
              </div>
            )}

            {formData.diseases.asthma && (
              <div className="form-group">
                <label>Common Asthma Trigger</label>
                <input
                  type="text"
                  name="details.asthmaTrigger"
                  value={formData.details.asthmaTrigger}
                  onChange={handleChange}
                  placeholder="e.g., Pollen, Dust"
                />
              </div>
            )}

            {formData.diseases.heartDisease && (
              <div className="form-group">
                <label>Type of Heart Disease</label>
                <input
                  type="text"
                  name="details.heartDiseaseType"
                  value={formData.details.heartDiseaseType}
                  onChange={handleChange}
                  placeholder="e.g., Coronary Artery Disease"
                />
              </div>
            )}

            {formData.diseases.cancer && (
              <div className="form-group">
                <label>Type of Cancer</label>
                <input
                  type="text"
                  name="details.cancerType"
                  value={formData.details.cancerType}
                  onChange={handleChange}
                  placeholder="e.g., Breast, Lung"
                />
              </div>
            )}

            <div className="btn-group">
              <button type="button" onClick={prevStep} className="prev-btn">
                Previous
              </button>
              <button type="button" onClick={nextStep} className="next-btn">
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="step-container">
            <h2>Additional Information</h2>
            <div className="form-group">
              <label>Family History</label>
              <textarea
                name="additionalInfo.familyHistory"
                value={formData.additionalInfo.familyHistory}
                onChange={handleChange}
                placeholder="Any family history of major diseases?"
              />
            </div>
            <div className="form-group">
              <label>Current Medications</label>
              <textarea
                name="additionalInfo.medications"
                value={formData.additionalInfo.medications}
                onChange={handleChange}
                placeholder="List your current medications..."
              />
            </div>
            <div className="btn-group">
              <button type="button" onClick={prevStep} className="prev-btn">
                Previous
              </button>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default DiseasesTracker;
