import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { 
  fetchFlightById, 
  selectCurrentFlight, 
  selectBookingStatus,
  clearBooking,
  selectPassengers,
  selectSelectedSeats,
  addPassenger,
  removePassenger
} from '../store/slices/bookingSlice'
import { selectSearchParams } from '../store/slices/flightSlice'
import { Loader2 } from 'lucide-react'
import PassengerForm from '../components/booking/PassengerForm'
import SeatMap from '../components/booking/SeatMap'
import PriceSummary from '../components/booking/PriceSummary'
import LuggageInfo from '../components/booking/LuggageInfo'

const BookingPage = () => {
  const { flightId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const flight = useSelector(selectCurrentFlight);
  const status = useSelector(selectBookingStatus);
  const passengers = useSelector(selectPassengers);
  const selectedSeats = useSelector(selectSelectedSeats);
  const searchParams = useSelector(selectSearchParams);

  useEffect(() => {
    if (flightId) {
      dispatch(fetchFlightById(flightId));
    }
    return () => {
      // dispatch(clearBooking()); 
    }
  }, [dispatch, flightId]);

  // Sync passenger count from search params (adults + children) → booking passengers array
  useEffect(() => {
    const adults = Number(searchParams?.adults || 1);
    const children = Number(searchParams?.children || 0);
    const desired = Math.max(1, adults + children);
    const current = passengers.length;
    
    if (desired > current) {
      // Add required passengers
      for (let i = 0; i < desired - current; i++) {
        dispatch(addPassenger());
      }
    } else if (desired < current) {
      // Remove extras from the end
      const toRemove = current - desired;
      for (let i = 0; i < toRemove; i++) {
        if (passengers.length > desired) {
          const lastPassenger = passengers[passengers.length - 1];
          dispatch(removePassenger(lastPassenger.id));
        }
      }
    }
  }, [dispatch, searchParams?.adults, searchParams?.children]);

  const handleBooking = () => {
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