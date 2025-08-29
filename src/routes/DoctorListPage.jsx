import React, { useState, useEffect } from 'react';
import DoctorList from '../components/DoctorList';
import DoctorAPI from '../services/api';

const DoctorListPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      setLoading(true);
      setError(null);
      const doctorsData = await DoctorAPI.getAllDoctors();
      setDoctors(doctorsData);
    } catch (err) {
      setError(err.message);
      console.error('Failed to fetch doctors:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (index) => {
    // For now, keep local deletion until DELETE API is implemented
    const updatedDoctors = doctors.filter((_, i) => i !== index);
    setDoctors(updatedDoctors);
    localStorage.setItem('doctors', JSON.stringify(updatedDoctors));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading doctors...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
          <button 
            onClick={fetchDoctors}
            className="mt-4 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Doctor Directory</h1>
          <p className="mt-2 text-lg text-gray-600">
            View and manage all doctors in the system
          </p>
          <button 
            onClick={fetchDoctors}
            className="mt-4 bg-primary-500 hover:bg-primary-600 text-white px-3 py-1 rounded text-sm"
          >
            Refresh
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <DoctorList doctors={doctors} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default DoctorListPage;
