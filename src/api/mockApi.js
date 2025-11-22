

import { MOCK_FLIGHTS } from '../data/mock-flights.json';

export const fetchMockFlights = (searchParams) => {
  console.log("Mock API call with:", searchParams);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: MOCK_FLIGHTS });
    }, 1000); 
  });
};