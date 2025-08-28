import React from 'react';
import DoctorForm from '../components/DoctorForm';

const AddDoctor = () => {
  const handleAddDoctor = (doctor) => {
    const savedDoctors = localStorage.getItem('doctors');
    const doctors = savedDoctors ? JSON.parse(savedDoctors) : [];
    const newDoctors = [...doctors, { ...doctor, id: Date.now() }];
    localStorage.setItem('doctors', JSON.stringify(newDoctors));
    window.location.href = '/doctors';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Add New Doctor</h1>
          <p className="mt-2 text-lg text-gray-600">
            Fill out the form below to add a new doctor to the system
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <DoctorForm onAddDoctor={handleAddDoctor} />
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
