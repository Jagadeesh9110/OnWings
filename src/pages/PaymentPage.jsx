import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { 
  selectCurrentFlight, 
  selectPassengers, 
  selectSelectedSeats, // <-- 1. FIX: Changed to plural
  completeBooking
} from '../store/slices/bookingSlice'
import PaymentForm from '../components/booking/PaymentForm'
import { ArrowLeft } from 'lucide-react'

// Mock prices (same as PriceSummary)
const SEAT_FEE = 800;
const TAX_RATE = 0.18;

const PaymentPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const flight = useSelector(selectCurrentFlight);
  const selectedSeats = useSelector(selectSelectedSeats); // <-- 2. FIX: Changed to plural
  const passengers = useSelector(selectPassengers);

  if (!flight) {
    return (
      <div className="container mx-auto py-8 text-center text-white/90">
        <h2 className="text-2xl font-semibold">No booking in progress.</h2>
        <button onClick={() => navigate('/')} className="text-red-500 hover:underline">
          Go to Home
        </button>
      </div>
    )
  }

  // Calculate total again
  const passengerCount = passengers.length;
  const basePrice = flight.price * passengerCount;
  const seatFee = selectedSeats.length * SEAT_FEE; // <-- 3. FIX: Use .length
  const subtotal = basePrice + seatFee;
  const taxes = subtotal * TAX_RATE;
  const total = subtotal + taxes;

  const formatPrice = (price) => new Intl.NumberFormat('en-IN', {
    style: 'currency', currency: 'INR'
  }).format(price);

  const handlePayment = async () => {
    const bookingDetails = {
      flight,
      passengers,
      selectedSeats, // <-- 4. FIX: Pass plural
      total,
    };
    
    try {
      const resultAction = await dispatch(completeBooking(bookingDetails)).unwrap()
      navigate(`/confirmation/${resultAction.bookingId}`)
    } catch (err) {
      alert("Payment Failed: " + err.message);
    }
  }

  return (
    <div className="container mx-auto py-8 text-white/90">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-red-500 font-medium mb-4 hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Booking
        </button>
        <h1 className="text-4xl font-bold text-white/90 mb-8">Confirm Your Payment</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Payment Form */}
          <div className="bg-black/80 border border-red-800/50 p-6 rounded-none shadow-lg">
            {/* We'll need to create/style this component next */}
            <PaymentForm onSubmit={handlePayment} /> 
          </div>

          {/* Order Summary */}
          <div className="bg-black/80 border border-red-800/50 p-6 rounded-none shadow-lg h-fit">
            <h2 className="text-2xl font-semibold border-b border-red-800/50 pb-4 mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-white/60">Flight: {flight.id}</span>
                <span className="font-medium">{flight.from} → {flight.to}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Passengers</span>
                <span className="font-medium">{passengerCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Seat(s)</span>
                <span className="font-medium">{selectedSeats.join(', ')}</span>
              </div>
              <div className="flex justify-between border-t border-white/20 mt-4 pt-4">
                <span className="text-white/60">Total (incl. taxes)</span>
                <span className="font-bold text-lg">{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage