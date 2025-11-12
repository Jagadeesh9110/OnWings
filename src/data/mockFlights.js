// This file simulates a fake API response
export const allFlights = [
  { id: "FL001", airline: "AirVista", from: "DEL", to: "BOM", departure: "06:00", arrival: "08:10", price: 4800, logo: "🛫" },
  { id: "FL002", airline: "SkyConnect", from: "BOM", to: "DEL", departure: "09:00", arrival: "11:10", price: 4900, logo: "🛫" },
  { id: "FL003", airline: "BrightAir", from: "DEL", to: "BLR", departure: "07:00", arrival: "09:40", price: 6200, logo: "✈️" },
  { id: "FL004", airline: "Ember Airlines", from: "BLR", to: "DEL", departure: "10:30", arrival: "13:10", price: 6300, logo: "✨" },
  { id: "FL005", airline: "AuraFly", from: "DEL", to: "HYD", departure: "05:45", arrival: "08:00", price: 5700, logo: "🌀" },
  { id: "FL006", airline: "AirVista", from: "HYD", to: "DEL", departure: "09:00", arrival: "11:10", price: 5600, logo: "🛫" },
  { id: "FL007", airline: "SkyConnect", from: "BLR", to: "MAA", departure: "06:00", arrival: "07:00", price: 2500, logo: "🛫" },
  { id: "FL008", airline: "BrightAir", from: "MAA", to: "BLR", departure: "08:00", arrival: "09:00", price: 2600, logo: "✈️" },
  { id: "FL009", airline: "Ember Airlines", from: "CCU", to: "DEL", departure: "07:30", arrival: "09:40", price: 5500, logo: "✨" },
  { id: "FL010", airline: "AuraFly", from: "DEL", to: "CCU", departure: "17:00", arrival: "19:10", price: 5600, logo: "🌀" },
  { id: "FL011", airline: "AirVista", from: "BOM", to: "BLR", departure: "05:00", arrival: "07:00", price: 4700, logo: "🛫" },
  { id: "FL012", airline: "SkyConnect", from: "BLR", to: "BOM", departure: "09:00", arrival: "11:00", price: 4800, logo: "🛫" },
  { id: "FL013", airline: "BrightAir", from: "BOM", to: "MAA", departure: "12:00", arrival: "14:00", price: 4000, logo: "✈️" },
  { id: "FL014", airline: "AuraFly", from: "MAA", to: "BOM", departure: "15:00", arrival: "17:00", price: 4100, logo: "🌀" },
  { id: "FL015", airline: "Ember Airlines", from: "DEL", to: "AMD", departure: "08:00", arrival: "09:45", price: 4300, logo: "✨" },
  { id: "FL016", airline: "AirVista", from: "AMD", to: "DEL", departure: "17:00", arrival: "18:45", price: 4400, logo: "🛫" },
  { id: "FL017", airline: "SkyConnect", from: "BLR", to: "HYD", departure: "10:00", arrival: "11:15", price: 3200, logo: "🛫" },
  { id: "FL018", airline: "BrightAir", from: "HYD", to: "BLR", departure: "12:00", arrival: "13:15", price: 3300, logo: "✈️" },
  { id: "FL019", airline: "AuraFly", from: "DEL", to: "LKO", departure: "13:30", arrival: "14:30", price: 2900, logo: "🌀" },
  { id: "FL020", airline: "Ember Airlines", from: "LKO", to: "DEL", departure: "16:00", arrival: "17:00", price: 3000, logo: "✨" },
  { id: "FL021", airline: "AirVista", from: "BOM", to: "PNQ", departure: "07:30", arrival: "08:10", price: 1800, logo: "🛫" },
  { id: "FL022", airline: "SkyConnect", from: "PNQ", to: "BOM", departure: "09:00", arrival: "09:45", price: 1900, logo: "🛫" },
  { id: "FL023", airline: "BrightAir", from: "HYD", to: "MAA", departure: "06:30", arrival: "07:45", price: 3200, logo: "✈️" },
  { id: "FL024", airline: "AuraFly", from: "MAA", to: "HYD", departure: "09:00", arrival: "10:15", price: 3100, logo: "🌀" },
  { id: "FL025", airline: "Ember Airlines", from: "CCU", to: "BLR", departure: "11:30", arrival: "14:00", price: 4600, logo: "✨" },
  { id: "FL026", airline: "AirVista", from: "BLR", to: "CCU", departure: "15:00", arrival: "17:30", price: 4500, logo: "🛫" },
  { id: "FL027", airline: "BrightAir", from: "DEL", to: "GOI", departure: "06:00", arrival: "08:20", price: 5800, logo: "✈️" },
  { id: "FL028", airline: "SkyConnect", from: "GOI", to: "DEL", departure: "09:00", arrival: "11:20", price: 5700, logo: "🛫" },
  { id: "FL029", airline: "AuraFly", from: "DEL", to: "PAT", departure: "10:00", arrival: "11:45", price: 4300, logo: "🌀" },
  { id: "FL030", airline: "Ember Airlines", from: "PAT", to: "DEL", departure: "12:30", arrival: "14:15", price: 4200, logo: "✨" },
  { id: "FL031", airline: "AirVista", from: "DEL", to: "JAI", departure: "06:30", arrival: "07:45", price: 3100, logo: "🛫" },
  { id: "FL032", airline: "SkyConnect", from: "JAI", to: "DEL", departure: "09:00", arrival: "10:15", price: 3200, logo: "🛫" },
  { id: "FL033", airline: "BrightAir", from: "BLR", to: "COK", departure: "07:00", arrival: "08:10", price: 2900, logo: "✈️" },
  { id: "FL034", airline: "AuraFly", from: "COK", to: "BLR", departure: "09:30", arrival: "10:40", price: 3000, logo: "🌀" },
  { id: "FL035", airline: "Ember Airlines", from: "MAA", to: "CJB", departure: "08:00", arrival: "09:00", price: 2600, logo: "✨" },
  { id: "FL036", airline: "AirVista", from: "CJB", to: "MAA", departure: "11:00", arrival: "12:00", price: 2700, logo: "🛫" },
  { id: "FL037", airline: "SkyConnect", from: "DEL", to: "TRV", departure: "13:00", arrival: "16:00", price: 6400, logo: "🛫" },
  { id: "FL038", airline: "BrightAir", from: "TRV", to: "DEL", departure: "17:00", arrival: "20:00", price: 6500, logo: "✈️" },
  { id: "FL039", airline: "AuraFly", from: "BOM", to: "JAI", departure: "10:30", arrival: "12:00", price: 3700, logo: "🌀" },
  { id: "FL040", airline: "Ember Airlines", from: "JAI", to: "BOM", departure: "14:00", arrival: "15:30", price: 3600, logo: "✨" },
  { id: "FL041", airline: "AirVista", from: "CCU", to: "GAU", departure: "07:00", arrival: "08:10", price: 3500, logo: "🛫" },
  { id: "FL042", airline: "SkyConnect", from: "GAU", to: "CCU", departure: "09:00", arrival: "10:10", price: 3400, logo: "🛫" },
  { id: "FL043", airline: "BrightAir", from: "HYD", to: "VGA", departure: "08:30", arrival: "09:30", price: 2500, logo: "✈️" },
  { id: "FL044", airline: "AuraFly", from: "VGA", to: "HYD", departure: "10:00", arrival: "11:00", price: 2600, logo: "🌀" },
  { id: "FL045", airline: "Ember Airlines", from: "BLR", to: "IXE", departure: "12:30", arrival: "13:30", price: 2800, logo: "✨" },
  { id: "FL046", airline: "AirVista", from: "IXE", to: "BLR", departure: "14:00", arrival: "15:00", price: 2900, logo: "🛫" },
  { id: "FL047", airline: "SkyConnect", from: "DEL", to: "NAG", departure: "11:00", arrival: "12:30", price: 3500, logo: "🛫" },
  { id: "FL048", airline: "BrightAir", from: "NAG", to: "DEL", departure: "14:00", arrival: "15:30", price: 3600, logo: "✈️" },
  { id: "FL049", airline: "AuraFly", from: "BOM", to: "GOI", departure: "06:30", arrival: "07:30", price: 3200, logo: "🌀" },
  { id: "FL050", airline: "Ember Airlines", from: "GOI", to: "BOM", departure: "09:00", arrival: "10:00", price: 3100, logo: "✨" },
  { id: "FL051", airline: "AirVista", from: "DEL", to: "PNQ", departure: "08:00", arrival: "10:00", price: 4600, logo: "🛫" },
  { id: "FL052", airline: "SkyConnect", from: "PNQ", to: "DEL", departure: "11:30", arrival: "13:30", price: 4700, logo: "🛫" },
  { id: "FL053", airline: "BrightAir", from: "MAA", to: "IXM", departure: "06:00", arrival: "07:00", price: 2500, logo: "✈️" },
  { id: "FL054", airline: "AuraFly", from: "IXM", to: "MAA", departure: "08:00", arrival: "09:00", price: 2400, logo: "🌀" },
  { id: "FL055", airline: "Ember Airlines", from: "BLR", to: "VIZ", departure: "07:30", arrival: "09:15", price: 3800, logo: "✨" },
  { id: "FL056", airline: "AirVista", from: "VIZ", to: "BLR", departure: "10:00", arrival: "11:45", price: 3700, logo: "🛫" },
  { id: "FL057", airline: "SkyConnect", from: "CCU", to: "BBI", departure: "12:00", arrival: "13:10", price: 3100, logo: "🛫" },
  { id: "FL058", airline: "BrightAir", from: "BBI", to: "CCU", departure: "15:00", arrival: "16:10", price: 3000, logo: "✈️" },
  { id: "FL059", airline: "AuraFly", from: "DEL", to: "IXC", departure: "09:00", arrival: "10:00", price: 2800, logo: "🌀" },
  { id: "FL060", airline: "Ember Airlines", from: "BLR", to: "BOM", departure: "11:00", arrival: "12:00", price: 2900, logo: "✨" },
  { id: "FL060", airline: "AirIndia Airlines", from: "BLR", to: "BOM", departure: "11:00", arrival: "12:00", price: 2900, logo: "✨" },
  { id: "FL061", airline: "Indigo Airlines", from: "BLR", to: "BOM", departure: "11:00", arrival: "12:00", price: 2900, logo: "✨" },
  { id: "IL067", airline: "Spicejet Airlines", from: "BLR", to: "BOM", departure: "11:00", arrival: "12:00", price: 2900, logo: "✨" }
];


// This is our mock API function
export const mockFlightApi = (searchParams) => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      // If no searchParams, just return all (for fetchFlightById)
      if (!searchParams.from) {
        resolve(allFlights);
        return;
      }
      const { from, to } = searchParams;
      const results = allFlights.filter(
        (flight) => 
          flight.from.toUpperCase() === from.toUpperCase() &&
          flight.to.toUpperCase() === to.toUpperCase()
      );
      resolve(results);
    }, 1500); // 1.5 second delay
  });
};