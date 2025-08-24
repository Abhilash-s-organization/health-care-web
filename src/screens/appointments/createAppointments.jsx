import React, { useState, useEffect } from "react";
import "./createAppointments.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const CreateAppointments = () => {
      const navigate = useNavigate();

  const [formData, setFormData] = useState({
    doctorId: "",
    date: "",
    time: "",
    reason: "",
    notes: "",
  });

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Mock doctors data - replace with your actual API call
  useEffect(() => {
    // Simulate fetching doctors
    const mockDoctors = [
      { id: 1, name: "Dr. Smith Johnson", specialty: "Cardiologist" },
      { id: 2, name: "Dr. Sarah Wilson", specialty: "Neurologist" },
      { id: 3, name: "Dr. Michael Brown", specialty: "Pediatrician" },
      { id: 4, name: "Dr. Emily Davis", specialty: "Orthopedist" },
    ];
    setDoctors(mockDoctors);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.doctorId ||
      !formData.date ||
      !formData.time ||
      !formData.reason
    ) {
      setError("Please fill in all required fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Combine date and time
      const appointmentDateTime = new Date(
        `${formData.date}T${formData.time}:00.000Z`
      );

      const requestBody = {
        date: appointmentDateTime.toISOString(),
        status: "pending",
        notes: formData.notes,
        reason: formData.reason,
        DoctorId: 1,
        PatientId: 2, // You might want to get this dynamically
      };

      console.log("Scheduling appointment with:", requestBody);
      await axios
        .post("http://localhost:3000/api/appointments/create", requestBody)
        .then((response) => {
          // Handle successful response
          console.log(response.data);
        })
        .catch((error) => {
          // Handle error
          console.error(error);
        });

      // Simulate successful response
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        // Reset form
        setFormData({
          doctorId: "",
          date: "",
          time: "",
          reason: "",
          notes: "",
        });
          

        // Clear success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      }, 1000);
        navigate("/appointments")
    } catch (err) {
      setLoading(false);
      setError(err.message || "Failed to schedule appointment");
    }
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  return (
    <div className="create-appointments-container">
      <div className="form-wrapper">
        <div className="form-header">
          <h1 className="page-title">Book Appointment</h1>
          <p className="page-subtitle">
            Schedule your appointment with our healthcare professionals
          </p>
        </div>

        {success && (
          <div className="alert alert-success">
            <span className="alert-icon">✓</span>
            Appointment scheduled successfully!
          </div>
        )}

        {error && (
          <div className="alert alert-error">
            <span className="alert-icon">⚠</span>
            {error}
          </div>
        )}

        <div className="appointment-form">
          {/* Doctor Selection */}
          <div className="form-group">
            <label htmlFor="doctorId" className="form-label">
              Select Doctor *
            </label>
            <select
              id="doctorId"
              name="doctorId"
              value={formData.doctorId}
              onChange={handleInputChange}
              className="form-select"
              required
            >
              <option value="">Choose a doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name} - {doctor.specialty}
                </option>
              ))}
            </select>
          </div>

          {/* Date and Time Row */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date" className="form-label">
                Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                min={getTodayDate()}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="time" className="form-label">
                Time *
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
          </div>

          {/* Reason */}
          <div className="form-group">
            <label htmlFor="reason" className="form-label">
              Reason for Visit *
            </label>
            <input
              type="text"
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              placeholder="e.g., Routine checkup, Follow-up visit"
              className="form-input"
              required
            />
          </div>

          {/* Notes */}
          <div className="form-group">
            <label htmlFor="notes" className="form-label">
              Additional Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Any additional information or special requirements"
              className="form-textarea"
              rows="4"
            />
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className={`schedule-button ${loading ? "loading" : ""}`}
            >
              {loading ? (
                <>
                  <span className="loading-spinner"></span>
                  Scheduling...
                </>
              ) : (
                "Schedule Appointment"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
