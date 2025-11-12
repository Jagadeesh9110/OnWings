import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { 
  selectPassengers, 
  addPassenger, 
  updatePassenger,
  removePassenger
} from '../../store/slices/bookingSlice'
import { UserPlus, X } from 'lucide-react'

const PassengerForm = () => {
  const passengers = useSelector(selectPassengers);
  const dispatch = useDispatch();

  const handleUpdate = (id, field, value) => {
    dispatch(updatePassenger({ id, field, value }));
  };

  return (
    <div className="bg-white border border-black/30 p-6 rounded shadow-lg text-white/90">
      <h2 className="text-black/90 text-2xl font-semibold mb-6 border-b border-red-800/50 pb-4">
        Passenger Details
      </h2>
      
      {passengers.map((p, index) => (
        <div key={p.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="md:col-span-4 flex items-center"> {/* <--- 1. REMOVED justify-between */}
            
            {/* 2. ADDED this new flex wrapper */}
            <div className="flex items-center gap-4">
              <h3 className="text-lg font-medium text-red-500">
                Passenger {index + 1}
              </h3>
              
              {index > 0 && ( 
                <button
                  type="button"
                  onClick={() => dispatch(removePassenger(p.id))}
                  // Made the button a bit smaller to fit
                  className="flex items-center text-gray-400 hover:text-red-500 transition-colors text-sm"
                  title="Remove Passenger"
                >
                  <X className="h-4 w-4 mr-1" />
                  Remove
                </button>
              )}
            </div>
          </div>

          

          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-black/80 text-left">First Name</label>
            <input
              type="text"
              className="mt-1 block w-full p-3 bg-transparent border-0 border-b-2 border-gray-500 focus:border-red-500 focus:ring-0 rounded-none text-black"
              value={p.firstName}
              onChange={(e) => handleUpdate(p.id, 'firstName', e.target.value)}
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-black/80 text-left">Last Name</label>
            <input
              type="text"
              className="mt-1 block w-full p-3 bg-transparent border-0 border-b-2 border-gray-500 focus:border-red-500 focus:ring-0 rounded-none text-black"
              value={p.lastName}
              onChange={(e) => handleUpdate(p.id, 'lastName', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-black/80 text-left">Age</label>
            <input
              type="number"
              className="mt-1 block w-full p-3 bg-transparent border-0 border-b-2 border-gray-500 focus:border-red-500 focus:ring-0 rounded-none text-black"
              value={p.age}
              onChange={(e) => handleUpdate(p.id, 'age', e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-black/80 text-left">Gender</label>
            <select
              className="mt-1 block w-full p-3 bg-white border-0 border-b-2 border-gray-500 focus:border-red-500 focus:ring-0 rounded-none text-black"
              value={p.gender}
              onChange={(e) => handleUpdate(p.id, 'gender', e.target.value)}
            >
              <option value="">Select...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

        </div>
      ))}
      
      <button 
        onClick={() => dispatch(addPassenger())}
        className="flex items-center text-red-500 font-medium hover:text-red-400"
      >
        <UserPlus className="h-4 w-4 mr-2" />
        Add Another Passenger
      </button>
    </div>
  )
}

export default PassengerForm