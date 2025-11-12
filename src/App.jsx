import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import HomePage from './pages/HomePage'
import FlightResultsPage from './pages/FlightResultsPage'
import BookingPage from './pages/BookingPage'
import PaymentPage from './pages/PaymentPage'
import ConfirmationPage from './pages/ConfirmationPage'

function App() {
  return (
    <div className="app min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flights" element={<FlightResultsPage />} />
          <Route path="/book/:flightId" element={<BookingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/confirmation/:bookingId" element={<ConfirmationPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App