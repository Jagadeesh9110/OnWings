// In a real app, you would have an 'amadeusApi.js' file too
// This file just simulates a 1-second network delay

import { MOCK_FLIGHTS } from '../data/mock-flights.json';

export const fetchMockFlights = (searchParams) => {
  console.log("Mock API call with:", searchParams);
  return new Promise((resolve) => {
    setTimeout(() => {
      // You could add filtering logic here based on searchParams
      resolve({ data: MOCK_FLIGHTS });
    }, 1000); // Simulate 1-second network delay
  });
};