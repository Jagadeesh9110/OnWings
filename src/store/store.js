import { configureStore } from '@reduxjs/toolkit'
import flightReducer from './slices/flightSlice'
import bookingReducer from './slices/bookingSlice'

export const store = configureStore({
  reducer: {
    flights: flightReducer,
    booking: bookingReducer,
  },
})