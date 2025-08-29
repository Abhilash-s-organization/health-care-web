import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Sample doctor data (in production, this would come from a database)
let doctors = [
  {
    id: 1,
    firstName: "John",
    lastName: "Smith",
    specialization: "Cardiology",
    phone: "+1-555-0123",
    email: "john.smith@hospital.com",
    experienceYears: 15,
    salary: 250000
  },
  {
    id: 2,
    firstName: "Sarah",
    lastName: "Johnson",
    specialization: "Pediatrics",
    phone: "+1-555-0124",
    email: "sarah.johnson@hospital.com",
    experienceYears: 8,
    salary: 180000
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Brown",
    specialization: "Neurology",
    phone: "+1-555-0125",
    email: "michael.brown@hospital.com",
    experienceYears: 12,
    salary: 280000
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Davis",
    specialization: "Dermatology",
    phone: "+1-555-0126",
    email: "emily.davis@hospital.com",
    experienceYears: 6,
    salary: 200000
  }
];

// Routes

// GET /api/doctors - Get all doctors
app.get('/api/doctors', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: doctors.length,
      data: doctors
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// GET /api/doctors/:id - Get single doctor by ID
app.get('/api/doctors/:id', (req, res) => {
  try {
    const doctorId = parseInt(req.params.id);
    const doctor = doctors.find(doc => doc.id === doctorId);
    
    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: 'Doctor not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: doctor
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// GET /api/doctors/search/:specialization - Get doctors by specialization
app.get('/api/doctors/search/:specialization', (req, res) => {
  try {
    const specialization = req.params.specialization.toLowerCase();
    const filteredDoctors = doctors.filter(doc => 
      doc.specialization.toLowerCase().includes(specialization)
    );
    
    res.status(200).json({
      success: true,
      count: filteredDoctors.length,
      data: filteredDoctors
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Healthcare API is running',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found'
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'production' ? {} : error.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Healthcare API Server running on port ${PORT}`);
  console.log(`📋 API Documentation:`);
  console.log(`   GET  /api/doctors                    - Get all doctors`);
  console.log(`   GET  /api/doctors/:id                - Get doctor by ID`);
  console.log(`   GET  /api/doctors/search/:specialty  - Search by specialization`);
  console.log(`   GET  /api/health                     - Health check`);
});
