import React, { useState, useEffect } from 'react';
import DoctorList from '../components/DoctorList';

const DoctorListPage = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const savedDoctors = localStorage.getItem('doctors');
    if (savedDoctors) {
      setDoctors(JSON.parse(savedDoctors));
    }
  }, []);

  const handleDelete = (index) => {
    const updatedDoctors = doctors.filter((_, i) => i !== index);
    setDoctors(updatedDoctors);
    localStorage.setItem('doctors', JSON.stringify(updatedDoctors));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Doctor Directory</h1>
          <p className="mt-2 text-lg text-gray-600">
            View and manage all doctors in the system
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <DoctorList doctors={doctors} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default DoctorListPage;
