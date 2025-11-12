import React from 'react'
import { useSelector } from 'react-redux'
// 1. Import useNavigate
import { useNavigate } from 'react-router-dom'
import { 
  selectAllFlights, 
  selectFlightsStatus, 
  selectSearchParams,
  selectFlightsError
} from '../store/slices/flightSlice'
import FlightCard from '../components/flight/FlightCard'

import { motion, AnimatePresence } from 'framer-motion'
import FlightLoader from '../components/common/FlightLoader'
// ... (Animation variants are unchanged) ...
const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const FlightResultsPage = () => {
  const flights = useSelector(selectAllFlights);
  const status = useSelector(selectFlightsStatus);
  const params = useSelector(selectSearchParams);
  const error = useSelector(selectFlightsError);
  
  // 2. Initialize the navigate function
  const navigate = useNavigate();

  // 3. Create the handler function
  const handleBookClick = (flightId) => {
    navigate(`/book/${flightId}`);
  };

  let content;

  if (status === 'loading') {
    // ... (loading spinner code is unchanged) ...
  } else if (status === 'succeeded') {
    if (flights.length > 0) {
      content = (
        <motion.div 
          className="space-y-6"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {flights.map((flight, index) => {
            const logoText = flight.airline.substring(0, 2).toUpperCase();
            const logoUrl = `https://placehold.co/64x64/333/eee?text=${logoText}`;

            return (
              <motion.div key={flight.id} variants={itemVariants}>
                <FlightCard
                  airline={{
                    name: flight.airline,
                    logo: logoUrl,
                    flightNumber: flight.id,
                  }}
                  departureTime={flight.departure}
                  arrivalTime={flight.arrival}
                  duration="2h 00m"
                  stops={0}
                  price={flight.price}
                  offer={index % 2 === 0 ? "10% OFF" : null}
                  refundableType="Refundable"
                  // 4. Pass the new handler to the onBook prop
                  onBook={() => handleBookClick(flight.id)}
                  onFlightDetails={() => alert(`Showing details for ${flight.id}`)}
                />
              </motion.div>
            )
          })}
        </motion.div>
      );
    } else {
      // ... (no flights found code is unchanged) ...
    }
  } else if (status === 'failed') {
    // ... (error code is unchanged) ...
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-3xl font-bold mb-2 text-black/90"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Flights from {params.from?.toUpperCase()} to {params.to?.toUpperCase()}
        </motion.h1>
        <motion.p 
          className="text-lg text-black/60 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Showing results for {params.date}
        </motion.p>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={status}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default FlightResultsPage