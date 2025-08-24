import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppointmentCard } from "../../components/AppointmentCard";

export const DisplayAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/appointments/")
      .then((response) => {
        console.log("Data", response.data);
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);


  return (
    <div className="containerStyles">
      <div className="maxWidthContainerStyles">
        <div className="headerStyles">
          <div>
            <h1 className="titleStyles">Appointments</h1>
            <p className="subtitleStyles">
              Manage your upcoming and past appointments
            </p>
          </div>
          <button className="buttonStyles" onClick={()=> navigate("/create")}>
            Book Appointment
          </button>
        </div>

        {/* Appointments List */}
        <div>
          {appointments.length === 0 ? (
            <div className="loadingStyles">
              <div style={{ color: "#6b7280", fontSize: "18px" }}>
                No appointments found
              </div>
              <p style={{ color: "#9ca3af", marginTop: "8px" }}>
                Click "Book Appointment" to schedule your first appointment
              </p>
            </div>
          ) : (
            appointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
