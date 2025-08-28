import React, { useState, useEffect } from 'react';
import DoctorForm from '../components/DoctorForm';
import DoctorList from '../components/DoctorList';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  // Load doctors from localStorage on component mount
  useEffect(() => {
    const savedDoctors = localStorage.getItem('doctors');
    if (savedDoctors) {
      setDoctors(JSON.parse(savedDoctors));
    }
  }, []);

  // Save doctors to localStorage whenever the doctors array changes
  useEffect(() => {
    localStorage.setItem('doctors', JSON.stringify(doctors));
  }, [doctors]);

  const addDoctor = (newDoctor) => {
    setDoctors([...doctors, { ...newDoctor, id: Date.now() }]);
  };

  const deleteDoctor = (index) => {
    const updatedDoctors = doctors.filter((_, i) => i !== index);
    setDoctors(updatedDoctors);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Doctor Management</h1>
          <p className="mt-2 text-lg text-gray-600">
            Add and manage doctors in the healthcare system
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <DoctorForm onAddDoctor={addDoctor} />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <DoctorList doctors={doctors} onDelete={deleteDoctor} />
        </div>
      </div>
    </div>
  );
};

export default Doctors;
