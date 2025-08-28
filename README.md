# HealthCare Management System

A modern React-based healthcare management system for managing doctors and medical staff.

## Features

- **Doctor Management**: Add, view, and delete doctor records
- **Modern UI**: Clean interface with Tailwind CSS and Times New Roman font
- **Pink Theme**: Custom color scheme using #ff5d8f
- **Responsive Design**: Works on desktop and mobile devices
- **Local Storage**: Data persistence using browser localStorage
- **Routing**: Organized route structure with React Router

## Tech Stack

- React 18
- React Router DOM
- Tailwind CSS
- Vite
- Vitest (for testing)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd health-care-web
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## Routes

- `/` - Dashboard (complete doctor management)
- `/add-doctor` - Add new doctor form
- `/doctors` - View all doctors list

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── DoctorForm.jsx
│   └── DoctorList.jsx
├── pages/              # Page components
│   └── Doctors.jsx
├── routes/             # Route definitions
│   ├── index.js
│   ├── Dashboard.jsx
│   ├── AddDoctor.jsx
│   ├── DoctorListPage.jsx
│   ├── ProtectedRoute.jsx
│   └── NotFound.jsx
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## License

This project is licensed under the MIT License.
