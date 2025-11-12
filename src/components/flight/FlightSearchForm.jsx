import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchFlights } from '../../store/slices/flightSlice'
import { Search, ArrowRightLeft } from 'lucide-react'
import { airports } from '../../data/airports'
import { ArkDatePicker } from '../common/ArkDatePicker' 

const FlightSearchForm = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  
  //  HERE IS THE FIX:
  //  Changed initial state from '' to null
  const [date, setDate] = useState(null);
  
  const [error, setError] = useState('');
  
  const [tripType, setTripType] = useState('oneWay');

  //  HERE IS THE FIX:
  //  Changed initial state from '' to null
  const [returnDate, setReturnDate] = useState(null);

  const [passengers, setPassengers] = useState('');

  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const isRoundTrip = tripType === 'roundTrip';
    if (!from || !to || !date || (isRoundTrip && !returnDate) || !passengers) {
      setError("Please fill in all fields.");
      return;
    }
    setError('');
    dispatch(fetchFlights({ 
      from, 
      to, 
      date, 
      returnDate: isRoundTrip ? returnDate : null, 
      tripType,
      passengers
    }));
    navigate('/flights');
  };

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  const handleFromChange = (e) => {
    const value = e.target.value;
    setFrom(value);
    if (value.length > 0) {
      const filtered = airports.filter(airport => 
        airport.code.toUpperCase().startsWith(value.toUpperCase()) || 
        airport.city.toUpperCase().startsWith(value.toUpperCase())
      );
      setFromSuggestions(filtered);
    } else {
      setFromSuggestions([]);
    }
  };

  const handleToChange = (e) => {
    const value = e.target.value;
    setTo(value);
    if (value.length > 0) {
      const filtered = airports.filter(airport => 
        airport.code.toUpperCase().startsWith(value.toUpperCase()) || 
        airport.city.toUpperCase().startsWith(value.toUpperCase())
      );
      setToSuggestions(filtered);
    } else {
      setToSuggestions([]);
    }
  };

  const onFromSuggestionClick = (airport) => {
    setFrom(airport.code);
    setFromSuggestions([]);
  };

  const onToSuggestionClick = (airport) => {
    setTo(airport.code);
    setToSuggestions([]);
  };


  const activeTripButton = "bg-red-700 text-white font-semibold py-2 px-4 rounded-none";
  const inactiveTripButton = "bg-transparent text-gray-500 font-semibold py-2 px-4 rounded-none border border-gray-400 hover:bg-gray-100";

  return (
    <form 
      onSubmit={handleSubmit} 
      className="grid grid-cols-1 md:grid-cols-6 gap-x-6 gap-y-4 items-end"
    >
      {/* --- Trip Type Toggle --- */}
      <div className="md:col-span-6 flex justify-start gap-0 mb-2">
        <button 
          type="button" 
          onClick={() => setTripType('oneWay')} 
          className={tripType === 'oneWay' ? activeTripButton : inactiveTripButton}
        >
          One-way
        </button>
        <button 
          type="button" 
          onClick={() => setTripType('roundTrip')} 
          className={tripType === 'roundTrip' ? activeTripButton : inactiveTripButton}
        >
          Round-trip
        </button>
      </div>

      {/* --- Source/Destination --- */}
      <div className="md:col-span-6 flex flex-col md:flex-row items-end gap-x-4 gap-y-4">
        {/* Source Input */}
        <div className="w-full relative">
          <input
            type="text" id="from" value={from}
            onChange={handleFromChange}
            placeholder="Source"
            className="mt-1 block w-full p-3 bg-transparent text-white border-0  border-b-2 border-red-600 focus:border-primary focus:ring-0 rounded-none"
            autoComplete="off"
            onBlur={() => setTimeout(() => setFromSuggestions([]), 100)}
            onFocus={handleFromChange}
          />
          {fromSuggestions.length > 0 && (
            <div className="absolute z-10 w-full bg-white shadow-lg mt-1 rounded-none max-h-60 overflow-y-auto">
              {fromSuggestions.map((airport) => (
                <div 
                  key={airport.code}
                  className="p-3 text-black cursor-pointer border-0 border-red-600 hover:bg-red-100 hover:border-l-4"
                  onMouseDown={() => onFromSuggestionClick(airport)}
                >
                  {airport.city} ({airport.code})
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Swap Button */}
        <button
          type="button" onClick={handleSwap}
          className="p-2 text-red-700 hover:text-primary transition-colors"
          title="Swap source and destination"
        >
          <ArrowRightLeft className="h-5 w-5" />
        </button>
        {/* Destination Input */}
        <div className="w-full relative">
          <input
            type="text" id="to" value={to}
            onChange={handleToChange}
            placeholder="Destination"
            className="mt-1 block w-full p-3 bg-transparent text-white border-0 border-b-2 border-red-600 focus:border-primary focus:ring-0 rounded-none"
            autoComplete="off"
            onBlur={() => setTimeout(() => setToSuggestions([]), 100)}
            onFocus={handleToChange}
          />
          {toSuggestions.length > 0 && (
            <div className="absolute z-10 w-full bg-white shadow-lg mt-1 rounded-none max-h-60 overflow-y-auto">
              {toSuggestions.map((airport) => (
                <div 
                  key={airport.code}
                  className="p-3 text-black cursor-pointer border-0 border-red-600 hover:bg-red-100 hover:border-l-4"
                  onMouseDown={() => onToSuggestionClick(airport)}
                >
                  {airport.city} ({airport.code})
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* --- Date Fields --- */}
      <div className={tripType === 'oneWay' ? "md:col-span-3" : "md:col-span-2"}>
        <ArkDatePicker 
          placeholder="Depart"
          value={date}
          onChange={setDate}
        />
      </div>

      {tripType === 'roundTrip' && (
        <div className="md:col-span-2">
          <ArkDatePicker 
            placeholder="Return"
            value={returnDate}
            onChange={setReturnDate}
          />
        </div>
      )}
      
      {/* --- Passengers Field --- */}
      <div className={tripType === 'oneWay' ? "md:col-span-3" : "md:col-span-2"}>
        <label htmlFor="passengers" className="block text-sm font-bold text-white/80 text-left">Passengers</label>
        <input
          type="text"
          id="passengers"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
          placeholder="e.g., 2 Adults"
          className="mt-1 block w-full p-3 bg-transparent border-0 border-b-2 border-gray-300 focus:border-primary focus:ring-0 rounded-none text-white"
        />
      </div>

      <button 
        type="submit" 
        className="w-full bg-red-700 text-white font-bold py-3 px-6 rounded-none transition duration-200 hover:bg-white hover:text-red-900 flex items-center justify-center md:col-span-6"
      >
        <Search className="mr-2 h-5 w-5" />
        Search Flights
      </button>

      {error && (
        <div className="md:col-span-6 text-red-600 text-sm mt-2">
          {error}
        </div>
      )}
    </form>
  )
}

export default FlightSearchForm