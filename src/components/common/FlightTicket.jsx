import React from 'react'
import { Send } from 'lucide-react'

const FlightTicket = ({ booking }) => {
  const { flight, passengers, selectedSeat, total, bookingId } = booking;
  
  const formatPrice = (price) => new Intl.NumberFormat('en-IN', {
    style: 'currency', currency: 'INR'
  }).format(price);

  return (
    <div className="bg-white p-8 rounded-lg shadow-2xl border-4 border-primary">
      <div className="flex justify-between items-center border-b-2 border-dashed pb-4">
        <div>
          <h2 className="text-3xl font-bold text-primary flex items-center">
            <Send className="mr-2" /> OnWings
          </h2>
          <p className="text-gray-500">Your E-Ticket</p>
        </div>
        <div className="text-right">
          <p className="font-bold">Booking ID:</p>
          <p className="text-lg text-red-500 font-mono">{bookingId}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-8 my-6">
        <div>
          <p className="text-sm text-gray-500">Passenger</p>
          <p className="text-xl font-medium">
            {passengers[0].firstName} {passengers[0].lastName}
            {passengers.length > 1 && ` (+${passengers.length - 1})`}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Flight</p>
          <p className="text-xl font-medium">{flight.airline} {flight.id}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Seat</p>
          <p className="text-xl font-medium">{selectedSeat}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Total Paid</p>
          <p className="text-xl font-medium">{formatPrice(total)}</p>
        </div>
      </div>

      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
        <div>
          <p className="text-sm text-gray-500">From</p>
          <p className="text-3xl font-bold">{flight.from}</p>
          <p className="text-lg">{flight.departure}</p>
        </div>
        <div className="text-4xl text-gray-400">✈️</div>
        <div className="text-right">
          <p className="text-sm text-gray-500">To</p>
          <p className="text-3xl font-bold">{flight.to}</p>
          <p className="text-lg">{flight.arrival}</p>
        </div>
      </div>
      
      <div className="text-center mt-6">
        <p className="font-bold">Thank you for flying with OnWings!</p>
      </div>
    </div>
  );
}

export default FlightTicket