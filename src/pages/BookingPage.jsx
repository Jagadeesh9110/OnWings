import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { 
  fetchFlightById, 
  selectCurrentFlight, 
  selectBookingStatus,
  clearBooking,
  // 1. Import new selectors
  selectPassengers,
  selectSelectedSeats
} from '../store/slices/bookingSlice'
import { Loader2 } from 'lucide-react'
import PassengerForm from '../components/booking/PassengerForm'
import SeatMap from '../components/booking/SeatMap'
import PriceSummary from '../components/booking/PriceSummary'
// 2. Import the new component
import LuggageInfo from '../components/booking/LuggageInfo'

const BookingPage = () => {
  const { flightId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const flight = useSelector(selectCurrentFlight);
  const status = useSelector(selectBookingStatus);
  // 3. Get passengers and seats for validation
  const passengers = useSelector(selectPassengers);
  const selectedSeats = useSelector(selectSelectedSeats);

  useEffect(() => {
    if (flightId) {
      dispatch(fetchFlightById(flightId));
    }
    return () => {
      // dispatch(clearBooking()); // Don't clear, so payment page can access it
    }
  }, [dispatch, flightId]);

  const handleBooking = () => {
    // 4. Validate that all passengers have a seat
    if (selectedSeats.length !== passengers.length) {
      alert(`Please select a seat for all ${passengers.length} passengers.`);
      return;
    }
    // TODO: Add validation for passenger names/age
    navigate('/payment');
  }

  if (status === 'loading' || !flight) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader2 className="h-12 w-12 animate-spin text-red-600" />
      </div>
    );
  }

  return (
    // Add the container back
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-black/90 mb-8">Booking Details</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-8">
          <PassengerForm />
          {/* 5. Add the LuggageInfo component */}
          <LuggageInfo /> 
          <SeatMap />
        </div>

        <div className="lg:col-span-1">
          <PriceSummary onConfirm={handleBooking} />
        </div>

      </div>
    </div>
  )
}

export default BookingPage