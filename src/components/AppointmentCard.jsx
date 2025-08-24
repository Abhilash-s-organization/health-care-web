import React, { useState } from "react";

// Appointment Card Component
export const AppointmentCard = ({ appointment }) => {
  const statusStyles = {
    confirmed: { textColor: "#3975FB", bgColor: "#EDF2FD" },
    completed: { textColor: "#168942", bgColor: "#E7F7ED" },
    pending: { textColor: "#B77A03", bgColor: "#FFF6CD" }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const currentStatus = statusStyles[appointment.status] || statusStyles.pending;

  const cardStyles = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    marginBottom: '16px',
    border: '1px solid #e5e7eb',
    transition: 'box-shadow 0.2s',
    cursor: 'default'
  };

  const cardHoverStyles = {
    ...cardStyles,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)'
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={isHovered ? cardHoverStyles : cardStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        
        <div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#1f2937',
            margin: '0 0 4px 0'
          }}>
            {appointment.reason}
          </h3>
        </div>
        
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ color: '#6b7280', fontWeight: '500' }}>Date:</span>
          <span style={{ marginLeft: '8px', color: '#1f2937' }}>{formatDate(appointment.date)}</span>
        </div>
        
        
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ color: '#6b7280', fontWeight: '500' }}>Notes:</span>
          <span style={{ marginLeft: '8px', color: '#1f2937' }}>{appointment.notes}</span>
        </div>
        
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ color: '#6b7280', fontWeight: '500' }}>Status:</span>
          <span 
            style={{
              marginLeft: '8px',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '500',
              textTransform: 'capitalize',
              color: currentStatus.textColor,
              backgroundColor: currentStatus.bgColor
            }}
          >
            {appointment.status}
          </span>
        </div>
      </div>
    </div>
  );
};