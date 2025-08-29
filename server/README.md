# Healthcare API Server

Express.js backend server for the Healthcare Management System.

## Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Or start in production mode:
```bash
npm start
```

## API Endpoints

### GET Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/doctors` | Get all doctors |
| GET | `/api/doctors/:id` | Get doctor by ID |
| GET | `/api/doctors/search/:specialization` | Search doctors by specialization |
| GET | `/api/health` | Health check endpoint |

### Response Format

All API responses follow this format:

```json
{
  "success": true,
  "count": 4,
  "data": [...]
}
```

### Example Responses

#### GET /api/doctors
```json
{
  "success": true,
  "count": 4,
  "data": [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Smith",
      "specialization": "Cardiology",
      "phone": "+1-555-0123",
      "email": "john.smith@hospital.com",
      "experienceYears": 15,
      "salary": 250000
    }
  ]
}
```

#### GET /api/doctors/1
```json
{
  "success": true,
  "data": {
    "id": 1,
    "firstName": "John",
    "lastName": "Smith",
    "specialization": "Cardiology",
    "phone": "+1-555-0123",
    "email": "john.smith@hospital.com",
    "experienceYears": 15,
    "salary": 250000
  }
}
```

## Server Configuration

- **Port**: 5000 (default) or PORT environment variable
- **CORS**: Enabled for all origins
- **Security**: Helmet middleware for security headers
- **Logging**: Morgan middleware for request logging

## Testing the API

You can test the API using:

### cURL
```bash
curl http://localhost:5000/api/doctors
```

### Browser
Navigate to: `http://localhost:5000/api/doctors`

### Postman
Import the endpoints and test them directly.
