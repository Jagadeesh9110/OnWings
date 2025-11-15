import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// 1. Import useNavigate
import { useNavigate } from 'react-router-dom'
import { 
  selectAllFlights, 
  selectFlightsStatus, 
  selectSearchParams,
  selectFlightsError
} from '../store/slices/flightSlice'
import { selectFilteredAndSortedFlights } from '../store/slices/filterSlice'
import FlightCard from '../components/flight/FlightCard'
import FilterPanel from '../components/flight/FilterPanel'
import { Filter } from 'lucide-react'

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
  const allFlights = useSelector(selectAllFlights);
  const flights = useSelector(selectFilteredAndSortedFlights);
  const status = useSelector(selectFlightsStatus);
  const params = useSelector(selectSearchParams);
  const error = useSelector(selectFlightsError);
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <motion.h1 
            className="text-3xl font-bold mb-2 text-black/90"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Flights from {params.from?.toUpperCase()} to {params.to?.toUpperCase()}
          </motion.h1>
          <motion.div 
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-lg text-black/60">
              Showing {flights.length} of {allFlights.length} flights for {params.date}
            </p>
            
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </motion.div>
        </div>

        {/* Main Content with Sidebar */}
        <div className="flex gap-6">
          {/* Desktop Filter Panel (Sticky Sidebar) */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-4">
              <FilterPanel 
                isOpen={true}
                onClose={() => {}}
                isMobile={false}
              />
            </div>
          </div>

          {/* Mobile Filter Panel (Overlay) */}
          <FilterPanel 
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            isMobile={true}
          />

          {/* Flight Results */}
          <div className="flex-1">
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
      </div>
    </div>
  )
}

export default FlightResultsPage