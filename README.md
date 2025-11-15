# ✈️ OnWings - Modern Flight Booking System

<div align="center">

![React](https://img.shields.io/badge/react-19.1.1-blue.svg)
![Vite](https://img.shields.io/badge/vite-7.1.7-646CFF.svg)
![Redux Toolkit](https://img.shields.io/badge/redux_toolkit-2.9.2-764ABC.svg)
![Tailwind CSS](https://img.shields.io/badge/tailwind_css-3.4.18-38B2AC.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

A seamless and intuitive flight booking platform built with modern web technologies, featuring real-time seat selection, dynamic pricing, and a beautiful user interface.

[Live Demo](#) • [Report Bug](https://github.com/ashishbongu/OnWings/issues) • [Request Feature](https://github.com/ashishbongu/OnWings/issues)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage Guide](#usage-guide)
- [Development](#development)
- [Contributing](#contributing)
- [Team](#team)
- [License](#license)

---

## 🎯 About The Project

OnWings is a comprehensive flight booking system designed to address the common pain points in traditional booking platforms. We've created an intuitive, modern interface that streamlines the entire booking process from search to confirmation.

### The Problem We Solve

- ❌ Fragmented and confusing user experiences
- ❌ Poor real-time seat selection interfaces
- ❌ Lack of transparent pricing information
- ❌ Complicated multi-step booking processes

### Our Solution

✅ Seamless, guided booking workflow  
✅ Interactive real-time seat selection  
✅ Transparent dynamic pricing  
✅ Modern, responsive design  
✅ Comprehensive booking management  

---

## ✨ Key Features

### 🔍 Smart Flight Search
- Dynamic date selection with custom date picker
- Route selection with airport autocomplete
- Flexible search parameters

### 🪑 Real-time Seat Selection
- Interactive seat map with live availability
- Visual seat status indicators (available, selected, occupied)
- Multi-passenger seat allocation
- Premium seat options

### 👥 Multi-passenger Booking
- Comprehensive passenger information forms
- Support for multiple travelers
- Passenger type selection (Adult, Child, Infant)
- Contact information management

### 💰 Dynamic Pricing System
- Real-time price calculation
- Luggage options with dynamic pricing
- Tax and fee breakdown
- Clear price summary

### 🎫 Digital Ticket Generation
- Instant booking confirmation
- Downloadable digital tickets
- Booking reference numbers
- Email confirmation (simulated)

### 🔐 User Authentication
- Secure login and signup modals
- Form validation
- Session management
- Protected booking routes

### 🎨 Beautiful UI/UX
- Custom shader backgrounds
- Smooth animations with Framer Motion
- Responsive design for all devices
- Intuitive navigation

---

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - UI library
- **Vite 7.1.7** - Build tool and dev server
- **React Router 7.9.4** - Client-side routing
- **Framer Motion 12.23.24** - Animations

### State Management
- **Redux Toolkit 2.9.2** - Global state management
- **React Redux 9.2.0** - React bindings for Redux

### Styling
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS transformations
- **@paper-design/shaders-react** - Custom shader effects

### UI Components
- **@ark-ui/react 5.27.1** - Accessible UI primitives
- **Lucide React 0.548.0** - Icon library
- **@internationalized/date 3.5.5** - Date handling

### API & Data
- **Axios 1.7.2** - HTTP client
- Mock API with realistic delays

### Development Tools
- **ESLint 9.36.0** - Code linting
- **Autoprefixer 10.4.21** - CSS vendor prefixes

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ashishbongu/OnWings.git
   cd OnWings
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

## 📁 Project Structure

```
OnWings/
├── public/                 # Static assets
├── src/
│   ├── api/               # API simulation and services
│   │   └── mockApi.js     # Mock API endpoints
│   ├── assets/            # Images, fonts, etc.
│   ├── components/
│   │   ├── auth/          # Authentication components
│   │   │   ├── LoginModal.jsx
│   │   │   └── SignupModal.jsx
│   │   ├── booking/       # Booking flow components
│   │   │   ├── LuggageInfo.jsx
│   │   │   ├── PassengerForm.jsx
│   │   │   ├── PaymentForm.jsx
│   │   │   ├── PriceSummary.jsx
│   │   │   └── SeatMap.jsx
│   │   ├── common/        # Shared components
│   │   │   ├── ArkDatePicker.jsx
│   │   │   ├── ExpandingGallery.jsx
│   │   │   ├── FlightLoader.jsx
│   │   │   ├── FlightTicket.jsx
│   │   │   ├── FloatingPaths.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ShaderBackground.jsx
│   │   │   └── WarpBackground.jsx
│   │   ├── flight/        # Flight-related components
│   │   │   ├── FlightCard.jsx
│   │   │   └── FlightSearchForm.jsx
│   │   └── icons/         # Icon components
│   ├── data/              # Static data
│   │   ├── airports.js    # Airport information
│   │   └── mockFlights.js # Sample flight data
│   ├── pages/             # Page components
│   │   ├── HomePage.jsx
│   │   ├── FlightResultsPage.jsx
│   │   ├── BookingPage.jsx
│   │   └── ConfirmationPage.jsx
│   ├── store/             # Redux store
│   │   ├── store.js       # Store configuration
│   │   └── slices/        # Redux slices
│   │       ├── bookingSlice.js
│   │       └── flightSlice.js
│   ├── styles/            # Global styles
│   ├── App.jsx            # Root component
│   └── main.jsx           # Entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── eslint.config.js
```

---

## 📖 Usage Guide

### 1. Search for Flights

1. Navigate to the homepage
2. Select departure and arrival airports
3. Choose travel dates using the date picker
4. Select number of passengers
5. Click "Search Flights"

### 2. Browse Flight Results

- View available flights with details (time, duration, price)
- Filter and sort results
- Select your preferred flight

### 3. Complete Booking

**Step 1: Passenger Information**
- Enter details for all passengers
- Provide contact information

**Step 2: Seat Selection**
- View interactive seat map
- Select seats for each passenger
- See real-time availability

**Step 3: Luggage & Extras**
- Choose baggage options
- Add travel insurance (if available)
- Review price breakdown

**Step 4: Payment**
- Enter payment details
- Review final price
- Confirm booking

### 4. Get Confirmation

- View booking confirmation
- Download digital ticket
- Receive booking reference

---

## 👨‍💻 Development

### Component Development

Components follow a modular structure with clear separation of concerns:

- **Presentational Components**: Pure UI components
- **Container Components**: Connected to Redux store
- **Page Components**: Top-level route components

### State Management

The application uses Redux Toolkit with the following slices:

**Flight Slice**
- Flight search parameters
- Search results
- Selected flight

**Booking Slice**
- Passenger information
- Seat selections
- Luggage options
- Payment details
- Booking confirmation

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and colors
- Use custom shader effects sparingly

### Adding New Features

1. Create feature branch from `main`
2. Develop and test locally
3. Ensure code passes linting
4. Submit pull request for review

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👥 Team

This project was developed by a collaborative team of developers:

- **Ganesh** - Team Coordinator & Frontend Development
- **Jagadesh** - State Management & API Integration
- **Hariteja** - UI/UX Design & Component Architecture
- **Ashish** - Booking System & Payment Flow
- **Harsha** - Seat Selection & Real-time Features

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🔗 Links

- **Repository**: [https://github.com/ashishbongu/OnWings](https://github.com/ashishbongu/OnWings)
- **Issues**: [https://github.com/ashishbongu/OnWings/issues](https://github.com/ashishbongu/OnWings/issues)

---

## 🙏 Acknowledgments

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Ark UI](https://ark-ui.com/)

---

<div align="center">

Made with ❤️ by the OnWings Team

**[⬆ Back to Top](#-onwings---modern-flight-booking-system)**

</div>
