import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { mockFlightApi } from '../../data/mockFlights'

// This is an async "thunk" - it handles the API call
export const fetchFlights = createAsyncThunk(
  'flights/fetchFlights',
  async (searchParams) => {
    // searchParams will be { from, to, date }
    console.log("Fetching flights with params:", searchParams);
    const response = await mockFlightApi(searchParams);
    return response; // This data becomes the `action.payload`
  }
)

const initialState = {
  flights: [],       // The list of flights found
  searchParams: {},  // The last search criteria
  status: 'idle',    // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const flightSlice = createSlice({
  name: 'flights',
  initialState,
  // Standard "reducers" for synchronous actions
  reducers: {
    clearFlights: (state) => {
      state.flights = [];
      state.status = 'idle';
    },
  },
  // "extraReducers" handle actions from async thunks
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state, action) => {
        state.status = 'loading';
        // Save the search params when the search starts
        state.searchParams = action.meta.arg; 
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.flights = action.payload; // Set flights to the data we got
      })
      .addCase(fetchFlights.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { clearFlights } = flightSlice.actions;

// Selectors to pull data from the store in your components
export const selectAllFlights = (state) => state.flights.flights;
export const selectFlightsStatus = (state) => state.flights.status;
export const selectSearchParams = (state) => state.flights.searchParams;

export const selectFlightsError = (state) => state.flights.error;
export default flightSlice.reducer;