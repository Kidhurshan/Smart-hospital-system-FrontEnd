<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/bd6eb064-bb91-4228-ad18-1f5c9ae69239" />
<div align="center">
# 🏥 Smart Hospital System
</div>
A comprehensive healthcare management system built with React, TypeScript, and Node.js that provides role-based access for doctors, medical administrators, staff, and patients.

---

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

## 🎥 Demo

<div align="center">

<a href="https://youtu.be/VJuOrDhEqqk">
  <img src="https://img.youtube.com/vi/VJuOrDhEqqk/maxresdefault.jpg" alt="Smart Hospital System Demo" width="650" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
</a>

*Click the image above to watch the full demo video on YouTube*

</div>

## 🚀 Quick Access

<div align="center">

| Feature | Description | Link |
|---------|-------------|------|
| 🏥 **Live Demo** | Experience the application | [Try Demo](https://youtu.be/VJuOrDhEqqk) |
| 📚 **Documentation** | Complete setup guide | [View Docs](#installation--setup) |
| 🐛 **Report Issues** | Found a bug? Let us know | [GitHub Issues](https://github.com/Kidhurshan/Smart-hospital-system-FrontEnd/issues) |
| ⭐ **Star Project** | Support the project | [GitHub Repo](https://github.com/Kidhurshan/Smart-hospital-system-FrontEnd) |

</div>


## 📋 Table of Contents

- [Demo Video](#demo-video)
- [Quick Access](#quick-access)
- [Tech Stack](#tech-stack)
- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technology Stack](#technology-stack)
- [System Architecture](#system-architecture)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Configuration](#environment-configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [User Roles & Permissions](#user-roles--permissions)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

The Smart Hospital System is a modern, full-stack healthcare management application designed to streamline hospital operations, patient care, and medical record management. The system provides different interfaces and functionalities based on user roles, ensuring secure and efficient healthcare delivery.

### Key Benefits

- **Role-based Access Control**: Different interfaces for doctors, medical administrators, staff, and patients
- **Real-time Analytics**: Comprehensive dashboards with medical analytics and patient statistics
- **Secure Communication**: Integrated email and SMS notifications
- **Medical Record Management**: Complete patient history and medical reports tracking
- **Treatment Planning**: Calendar-based treatment scheduling and management

## ✨ Features

### 🔐 Authentication & Security
- JWT-based authentication
- Role-based access control
- Secure API endpoints with API key validation
- Password reset functionality
- Session management

### 👨‍⚕️ Doctor Features
- Patient record management
- Medical analytics and reports
- Treatment planning and scheduling
- Patient checkup forms
- Medical test management
- Patient history tracking

### 👨‍💼 Medical Administrator Features
- User management (doctors, staff, patients)
- System analytics and reporting
- Access history monitoring
- Report history tracking
- User registration and profile management

### 👨‍💻 Staff Features
- Patient registration
- Report assignment
- Medical treatment scheduling
- Patient data management
- Treatment plan coordination

### 👤 Patient Features
- Personal medical records access
- Treatment plan viewing
- Medical report history
- Appointment scheduling
- Health analytics dashboard

### 📊 Analytics & Reporting
- Real-time dashboards
- Medical analytics
- Patient statistics
- Geographic data visualization
- Blood count analysis
- BMI tracking

## 📸 Screenshots

<div align="center">

<img src="https://github.com/user-attachments/assets/43d06994-cb3c-4b09-8c72-06db31e4c3be" alt="Dashboard Overview" width="300"  style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); margin: 10px;">
<img src="https://github.com/user-attachments/assets/a2052caa-ea6d-459d-82e3-86c4c3098733" alt="Patient Management" width="300"  style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); margin: 10px;">
<img src="https://github.com/user-attachments/assets/24087163-ab37-4950-8c68-ae711fa43b23" alt="Medical Analytics" width="300"  style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); margin: 10px;">

</div>

## 🛠 Technology Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **ApexCharts** - Data visualization
- **FullCalendar** - Calendar functionality
- **React Hook Form** - Form handling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Multer** - File uploads
- **Nodemailer** - Email service
- **Twilio** - SMS service
- **bcrypt** - Password hashing

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **nodemon** - Development server

## 🏗 System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Database      │
│   (React/TS)    │◄──►│   (Node.js)     │◄──►│   (MongoDB)     │
│   Port: 5173    │    │   Port: 8000    │    │   Port: 27017   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v8 or higher)
- **MongoDB** (v6 or higher)
- **Git**

### Node.js Installation
```bash
# Download from https://nodejs.org/
# Or use package manager
# Windows (Chocolatey)
choco install nodejs

# macOS (Homebrew)
brew install node

# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### MongoDB Installation
```bash
# Download from https://www.mongodb.com/try/download/community
# Or use package manager
# Windows (Chocolatey)
choco install mongodb

# macOS (Homebrew)
brew tap mongodb/brew
brew install mongodb-community

# Ubuntu/Debian
sudo apt-get install mongodb
```

## 🚀 Installation & Setup

### Step 1: Clone the Repository

```bash
# Clone the main repository
git clone https://github.com/Kidhurshan/Smart-hospital-system-FrontEnd.git
cd Smart-hospital-system-FrontEnd

# Navigate to backend directory
cd BACKEND-SMART HOSPITAL SYSTEM/smart-hospital-system
```

### Step 2: Backend Setup

```bash
# Navigate to backend directory
cd BACKEND-SMART HOSPITAL SYSTEM/smart-hospital-system

# Install dependencies
npm install

# Create environment file
cp config/config.env.example config/config.env
# Edit config.env with your configuration

# Start MongoDB (if not running as service)
mongod

# Run in development mode
npm run dev

# Or run in production mode
npm run prod
```

**Backend will be running on:** `http://localhost:8000`

### Step 3: Frontend Setup

```bash
# Navigate back to frontend directory
cd ../../

# Install dependencies
npm install

# Start development server
npm run dev
```

**Frontend will be running on:** `http://localhost:5173`

## ⚙️ Environment Configuration

### Backend Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=8000
NODE_ENV=development
API_KEY=your_api_key_here
DB_LOCAL_URI=mongodb://127.0.0.1:27017/smart-hospital
DB_ATLAS_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_TIME=7d
COOKIE_EXPIRES_TIME=7
BACKEND_URL=http://127.0.0.1:8000

# Twilio Configuration (SMS)
TWILIO_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_NUMBER=your_twilio_number

# Gmail SMTP Configuration (Email)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM_NAME=Smart Hospital
SMTP_FROM_EMAIL=your_email@gmail.com
```

### Frontend Configuration

The frontend automatically connects to the backend API. Ensure the backend is running before starting the frontend.

## 🎮 Usage

### Starting the Application

1. **Start Backend:**
   ```bash
   cd BACKEND-SMART HOSPITAL SYSTEM/smart-hospital-system
   npm run prod
   ```

2. **Start Frontend:**
   ```bash
   npm run dev
   ```

3. **Access the Application:**
   - Open your browser and navigate to `http://localhost:5173`
   - Use the login credentials for your role

### Available Scripts

#### Backend Scripts
```bash
npm run dev      # Development mode
npm run prod     # Production mode
npm start        # Start server
npm test         # Run tests
```

#### Frontend Scripts
```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📚 API Documentation

### Base URL
```
http://localhost:8000/api/v1
```

### Authentication Endpoints
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout
- `POST /auth/forgot-password` - Password reset request
- `POST /auth/reset-password` - Password reset

### User Management Endpoints
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Patient Endpoints
- `GET /patients` - Get all patients
- `POST /patients` - Create patient
- `GET /patients/:id` - Get patient details
- `PUT /patients/:id` - Update patient

### Doctor Endpoints
- `GET /doctors` - Get all doctors
- `POST /doctors` - Create doctor
- `GET /doctors/:id` - Get doctor details
- `PUT /doctors/:id` - Update doctor

### Report Endpoints
- `GET /reports` - Get all reports
- `POST /reports` - Create report
- `GET /reports/:id` - Get report details
- `PUT /reports/:id` - Update report

## 👥 User Roles & Permissions

### 🏥 Medical Administrator (MA)
- **Access Level**: Full system access
- **Features**:
  - User management (doctors, staff, patients)
  - System analytics and reporting
  - Access history monitoring
  - Report history tracking
  - User registration and profile management

### 👨‍⚕️ Doctor
- **Access Level**: Patient care and medical records
- **Features**:
  - Patient record management
  - Medical analytics and reports
  - Treatment planning and scheduling
  - Patient checkup forms
  - Medical test management

### 👨‍💻 Staff
- **Access Level**: Patient registration and support
- **Features**:
  - Patient registration
  - Report assignment
  - Medical treatment scheduling
  - Patient data management
  - Treatment plan coordination

### 👤 Patient
- **Access Level**: Personal medical records
- **Features**:
  - Personal medical records access
  - Treatment plan viewing
  - Medical report history
  - Appointment scheduling
  - Health analytics dashboard

## 📁 Project Structure

```
FRONTEND-SMART HOSPITAL SYSTEM/
├── BACKEND-SMART HOSPITAL SYSTEM/
│   └── smart-hospital-system/
│       ├── app.js                 # Main application file
│       ├── config/                # Configuration files
│       ├── controllers/           # Route controllers
│       ├── middlewares/           # Custom middlewares
│       ├── models/                # Database models
│       ├── routes/                # API routes
│       ├── uploads/               # File uploads
│       └── utils/                 # Utility functions
├── src/
│   ├── actions/                   # Redux actions
│   ├── components/                # React components
│   │   ├── auth_components/       # Authentication components
│   │   ├── common_components/     # Shared components
│   │   ├── components_Doctor/     # Doctor-specific components
│   │   ├── components_MA/         # MA-specific components
│   │   ├── components_Patients/   # Patient-specific components
│   │   └── components_Staff/      # Staff-specific components
│   ├── constants/                 # Application constants
│   ├── context/                   # React context providers
│   ├── hooks/                     # Custom React hooks
│   ├── icons/                     # SVG icons
│   ├── layout/                    # Layout components
│   ├── pages/                     # Page components
│   │   ├── AuthPages/            # Authentication pages
│   │   ├── Doctor/               # Doctor pages
│   │   ├── MA/                   # MA pages
│   │   ├── Patient/              # Patient pages
│   │   └── Staff/                # Staff pages
│   └── slices/                   # Redux slices
├── public/                       # Static assets
└── package.json                  # Frontend dependencies
```

## 🔧 Development

### Code Style
- **Frontend**: ESLint + Prettier
- **Backend**: Standard JavaScript
- **TypeScript**: Strict mode enabled

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push to remote
git push origin feature/new-feature
```

### Testing
```bash
# Frontend testing
npm run test

# Backend testing
npm test
```

## 🐛 Troubleshooting

### Common Issues

#### Backend Issues
1. **MongoDB Connection Error**
   ```bash
   # Ensure MongoDB is running
   mongod
   ```

2. **Port Already in Use**
   ```bash
   # Kill process on port 8000
   npx kill-port 8000
   ```

3. **Module Not Found**
   ```bash
   # Reinstall dependencies
   rm -rf node_modules package-lock.json
   npm install
   ```

#### Frontend Issues
1. **Build Errors**
   ```bash
   # Clear cache and reinstall
   npm run build --force
   ```

2. **Development Server Issues**
   ```bash
   # Clear Vite cache
   rm -rf node_modules/.vite
   npm run dev
   ```

### Performance Optimization
- Enable MongoDB indexing for frequently queried fields
- Use React.memo for expensive components
- Implement lazy loading for routes
- Optimize bundle size with code splitting

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 📞 Support

For support and questions:
- **Email**: [Your Email]
- **GitHub Issues**: [Repository Issues Page]
- **Documentation**: [Project Wiki]

## 🙏 Acknowledgments

- React Team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- MongoDB for the database solution
- All contributors and maintainers

---

**Made with ❤️ for better healthcare management**

*Last updated: December 2024*
