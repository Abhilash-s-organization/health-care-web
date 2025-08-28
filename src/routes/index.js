import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import AddDoctor from './AddDoctor';
import DoctorListPage from './DoctorListPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add-doctor" element={<AddDoctor />} />
      <Route path="/doctors" element={<DoctorListPage />} />
    </Routes>
  );
};

export default AppRoutes;
