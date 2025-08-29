const API_BASE_URL = 'http://localhost:5000/api';

// API service class for doctor management
class DoctorAPI {
  // GET all doctors
  static async getAllDoctors() {
    try {
      const response = await fetch(`${API_BASE_URL}/doctors`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch doctors');
      }
      
      return data.data; // Return the doctors array
    } catch (error) {
      console.error('Error fetching doctors:', error);
      throw error;
    }
  }

  // GET doctor by ID
  static async getDoctorById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/doctors/${id}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch doctor');
      }
      
      return data.data; // Return the doctor object
    } catch (error) {
      console.error('Error fetching doctor:', error);
      throw error;
    }
  }

  // GET doctors by specialization
  static async getDoctorsBySpecialization(specialization) {
    try {
      const response = await fetch(`${API_BASE_URL}/doctors/search/${specialization}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to search doctors');
      }
      
      return data.data; // Return the filtered doctors array
    } catch (error) {
      console.error('Error searching doctors:', error);
      throw error;
    }
  }

  // Health check
  static async healthCheck() {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Health check failed');
      }
      
      return data;
    } catch (error) {
      console.error('Health check error:', error);
      throw error;
    }
  }
}

export default DoctorAPI;
