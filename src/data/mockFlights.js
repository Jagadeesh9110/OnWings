// This file simulates a fake API response with extensive flight data
export const allFlights = [
  // Delhi to Mumbai Routes
  { id: "FL001", airline: "AirVista", from: "DEL", to: "BOM", departure: "06:00", arrival: "08:10", price: 4800, logo: "🛫" },
  { id: "FL002", airline: "SkyConnect", from: "BOM", to: "DEL", departure: "09:00", arrival: "11:10", price: 4900, logo: "🛫" },
  { id: "FL063", airline: "IndiGo", from: "DEL", to: "BOM", departure: "10:30", arrival: "12:40", price: 4500, logo: "✈️" },
  { id: "FL064", airline: "Air India", from: "DEL", to: "BOM", departure: "14:00", arrival: "16:10", price: 5200, logo: "🇮🇳" },
  { id: "FL065", airline: "SpiceJet", from: "DEL", to: "BOM", departure: "18:00", arrival: "20:10", price: 4300, logo: "🌶️" },
  { id: "FL066", airline: "Vistara", from: "BOM", to: "DEL", departure: "07:30", arrival: "09:40", price: 5100, logo: "✨" },
  { id: "FL067", airline: "GoAir", from: "BOM", to: "DEL", departure: "12:00", arrival: "14:10", price: 4400, logo: "🟢" },
  { id: "FL068", airline: "AirAsia", from: "BOM", to: "DEL", departure: "16:30", arrival: "18:40", price: 4200, logo: "🔴" },
  
  // Delhi to Bangalore Routes
  { id: "FL003", airline: "BrightAir", from: "DEL", to: "BLR", departure: "07:00", arrival: "09:40", price: 6200, logo: "✈️" },
  { id: "FL004", airline: "Ember Airlines", from: "BLR", to: "DEL", departure: "10:30", arrival: "13:10", price: 6300, logo: "✨" },
  { id: "FL069", airline: "IndiGo", from: "DEL", to: "BLR", departure: "11:00", arrival: "13:40", price: 5800, logo: "✈️" },
  { id: "FL070", airline: "Air India", from: "DEL", to: "BLR", departure: "15:30", arrival: "18:10", price: 6500, logo: "🇮🇳" },
  { id: "FL071", airline: "SpiceJet", from: "BLR", to: "DEL", departure: "06:00", arrival: "08:40", price: 5900, logo: "🌶️" },
  { id: "FL072", airline: "Vistara", from: "BLR", to: "DEL", departure: "14:00", arrival: "16:40", price: 6400, logo: "✨" },
  
  // Delhi to Hyderabad Routes
  { id: "FL005", airline: "AuraFly", from: "DEL", to: "HYD", departure: "05:45", arrival: "08:00", price: 5700, logo: "🌀" },
  { id: "FL006", airline: "AirVista", from: "HYD", to: "DEL", departure: "09:00", arrival: "11:10", price: 5600, logo: "🛫" },
  { id: "FL073", airline: "IndiGo", from: "DEL", to: "HYD", departure: "12:30", arrival: "14:45", price: 5400, logo: "✈️" },
  { id: "FL074", airline: "Air India", from: "HYD", to: "DEL", departure: "16:00", arrival: "18:10", price: 5900, logo: "🇮🇳" },
  { id: "FL075", airline: "SpiceJet", from: "DEL", to: "HYD", departure: "19:30", arrival: "21:45", price: 5300, logo: "🌶️" },
  
  // Bangalore to Chennai Routes
  { id: "FL007", airline: "SkyConnect", from: "BLR", to: "MAA", departure: "06:00", arrival: "07:00", price: 2500, logo: "🛫" },
  { id: "FL008", airline: "BrightAir", from: "MAA", to: "BLR", departure: "08:00", arrival: "09:00", price: 2600, logo: "✈️" },
  { id: "FL076", airline: "IndiGo", from: "BLR", to: "MAA", departure: "10:30", arrival: "11:30", price: 2400, logo: "✈️" },
  { id: "FL077", airline: "Air India", from: "BLR", to: "MAA", departure: "14:00", arrival: "15:00", price: 2700, logo: "🇮🇳" },
  { id: "FL078", airline: "SpiceJet", from: "MAA", to: "BLR", departure: "12:00", arrival: "13:00", price: 2550, logo: "🌶️" },
  { id: "FL079", airline: "Vistara", from: "MAA", to: "BLR", departure: "17:30", arrival: "18:30", price: 2650, logo: "✨" },
  
  // Kolkata to Delhi Routes
  { id: "FL009", airline: "Ember Airlines", from: "CCU", to: "DEL", departure: "07:30", arrival: "09:40", price: 5500, logo: "✨" },
  { id: "FL010", airline: "AuraFly", from: "DEL", to: "CCU", departure: "17:00", arrival: "19:10", price: 5600, logo: "🌀" },
  { id: "FL080", airline: "IndiGo", from: "CCU", to: "DEL", departure: "11:00", arrival: "13:10", price: 5300, logo: "✈️" },
  { id: "FL081", airline: "Air India", from: "DEL", to: "CCU", departure: "13:30", arrival: "15:40", price: 5800, logo: "🇮🇳" },
  { id: "FL082", airline: "SpiceJet", from: "CCU", to: "DEL", departure: "15:00", arrival: "17:10", price: 5200, logo: "🌶️" },
  
  // Mumbai to Bangalore Routes
  { id: "FL011", airline: "AirVista", from: "BOM", to: "BLR", departure: "05:00", arrival: "07:00", price: 4700, logo: "🛫" },
  { id: "FL012", airline: "SkyConnect", from: "BLR", to: "BOM", departure: "09:00", arrival: "11:00", price: 4800, logo: "🛫" },
  { id: "FL083", airline: "IndiGo", from: "BOM", to: "BLR", departure: "11:30", arrival: "13:30", price: 4500, logo: "✈️" },
  { id: "FL084", airline: "Air India", from: "BOM", to: "BLR", departure: "15:00", arrival: "17:00", price: 5000, logo: "🇮🇳" },
  { id: "FL085", airline: "Vistara", from: "BLR", to: "BOM", departure: "13:00", arrival: "15:00", price: 4900, logo: "✨" },
  
  // Mumbai to Chennai Routes
  { id: "FL013", airline: "BrightAir", from: "BOM", to: "MAA", departure: "12:00", arrival: "14:00", price: 4000, logo: "✈️" },
  { id: "FL014", airline: "AuraFly", from: "MAA", to: "BOM", departure: "15:00", arrival: "17:00", price: 4100, logo: "🌀" },
  { id: "FL086", airline: "IndiGo", from: "BOM", to: "MAA", departure: "08:00", arrival: "10:00", price: 3900, logo: "✈️" },
  { id: "FL087", airline: "SpiceJet", from: "MAA", to: "BOM", departure: "11:30", arrival: "13:30", price: 3850, logo: "🌶️" },
  
  // Delhi to Ahmedabad Routes
  { id: "FL015", airline: "Ember Airlines", from: "DEL", to: "AMD", departure: "08:00", arrival: "09:45", price: 4300, logo: "✨" },
  { id: "FL016", airline: "AirVista", from: "AMD", to: "DEL", departure: "17:00", arrival: "18:45", price: 4400, logo: "🛫" },
  { id: "FL088", airline: "IndiGo", from: "DEL", to: "AMD", departure: "12:00", arrival: "13:45", price: 4100, logo: "✈️" },
  { id: "FL089", airline: "Air India", from: "AMD", to: "DEL", departure: "14:30", arrival: "16:15", price: 4500, logo: "🇮🇳" },
  { id: "FL090", airline: "SpiceJet", from: "DEL", to: "AMD", departure: "16:00", arrival: "17:45", price: 4000, logo: "🌶️" },
  
  // Bangalore to Hyderabad Routes
  { id: "FL017", airline: "SkyConnect", from: "BLR", to: "HYD", departure: "10:00", arrival: "11:15", price: 3200, logo: "🛫" },
  { id: "FL018", airline: "BrightAir", from: "HYD", to: "BLR", departure: "12:00", arrival: "13:15", price: 3300, logo: "✈️" },
  { id: "FL091", airline: "IndiGo", from: "BLR", to: "HYD", departure: "14:30", arrival: "15:45", price: 3100, logo: "✈️" },
  { id: "FL092", airline: "Vistara", from: "HYD", to: "BLR", departure: "17:00", arrival: "18:15", price: 3250, logo: "✨" },
  
  // Delhi to Lucknow Routes
  { id: "FL019", airline: "AuraFly", from: "DEL", to: "LKO", departure: "13:30", arrival: "14:30", price: 2900, logo: "🌀" },
  { id: "FL020", airline: "Ember Airlines", from: "LKO", to: "DEL", departure: "16:00", arrival: "17:00", price: 3000, logo: "✨" },
  { id: "FL093", airline: "IndiGo", from: "DEL", to: "LKO", departure: "09:00", arrival: "10:00", price: 2800, logo: "✈️" },
  { id: "FL094", airline: "Air India", from: "LKO", to: "DEL", departure: "11:30", arrival: "12:30", price: 3100, logo: "🇮🇳" },
  
  // Mumbai to Pune Routes
  { id: "FL021", airline: "AirVista", from: "BOM", to: "PNQ", departure: "07:30", arrival: "08:10", price: 1800, logo: "🛫" },
  { id: "FL022", airline: "SkyConnect", from: "PNQ", to: "BOM", departure: "09:00", arrival: "09:45", price: 1900, logo: "🛫" },
  { id: "FL095", airline: "IndiGo", from: "BOM", to: "PNQ", departure: "12:00", arrival: "12:45", price: 1750, logo: "✈️" },
  { id: "FL096", airline: "Vistara", from: "PNQ", to: "BOM", departure: "15:30", arrival: "16:15", price: 1850, logo: "✨" },
  { id: "FL097", airline: "SpiceJet", from: "BOM", to: "PNQ", departure: "18:00", arrival: "18:45", price: 1700, logo: "🌶️" },
  
  // Hyderabad to Chennai Routes
  { id: "FL023", airline: "BrightAir", from: "HYD", to: "MAA", departure: "06:30", arrival: "07:45", price: 3200, logo: "✈️" },
  { id: "FL024", airline: "AuraFly", from: "MAA", to: "HYD", departure: "09:00", arrival: "10:15", price: 3100, logo: "🌀" },
  { id: "FL098", airline: "IndiGo", from: "HYD", to: "MAA", departure: "13:00", arrival: "14:15", price: 3000, logo: "✈️" },
  { id: "FL099", airline: "Air India", from: "MAA", to: "HYD", departure: "16:30", arrival: "17:45", price: 3250, logo: "🇮🇳" },
  
  // Kolkata to Bangalore Routes
  { id: "FL025", airline: "Ember Airlines", from: "CCU", to: "BLR", departure: "11:30", arrival: "14:00", price: 4600, logo: "✨" },
  { id: "FL026", airline: "AirVista", from: "BLR", to: "CCU", departure: "15:00", arrival: "17:30", price: 4500, logo: "🛫" },
  { id: "FL100", airline: "IndiGo", from: "CCU", to: "BLR", departure: "07:00", arrival: "09:30", price: 4400, logo: "✈️" },
  { id: "FL101", airline: "Vistara", from: "BLR", to: "CCU", departure: "19:00", arrival: "21:30", price: 4700, logo: "✨" },
  
  // Delhi to Goa Routes
  { id: "FL027", airline: "BrightAir", from: "DEL", to: "GOI", departure: "06:00", arrival: "08:20", price: 5800, logo: "✈️" },
  { id: "FL028", airline: "SkyConnect", from: "GOI", to: "DEL", departure: "09:00", arrival: "11:20", price: 5700, logo: "🛫" },
  { id: "FL102", airline: "IndiGo", from: "DEL", to: "GOI", departure: "13:00", arrival: "15:20", price: 5500, logo: "✈️" },
  { id: "FL103", airline: "Air India", from: "GOI", to: "DEL", departure: "16:30", arrival: "18:50", price: 5900, logo: "🇮🇳" },
  { id: "FL104", airline: "SpiceJet", from: "DEL", to: "GOI", departure: "19:00", arrival: "21:20", price: 5400, logo: "🌶️" },
  
  // Delhi to Patna Routes
  { id: "FL029", airline: "AuraFly", from: "DEL", to: "PAT", departure: "10:00", arrival: "11:45", price: 4300, logo: "🌀" },
  { id: "FL030", airline: "Ember Airlines", from: "PAT", to: "DEL", departure: "12:30", arrival: "14:15", price: 4200, logo: "✨" },
  { id: "FL105", airline: "IndiGo", from: "DEL", to: "PAT", departure: "14:00", arrival: "15:45", price: 4100, logo: "✈️" },
  { id: "FL106", airline: "Air India", from: "PAT", to: "DEL", departure: "17:00", arrival: "18:45", price: 4400, logo: "🇮🇳" },
  
  // Delhi to Jaipur Routes
  { id: "FL031", airline: "AirVista", from: "DEL", to: "JAI", departure: "06:30", arrival: "07:45", price: 3100, logo: "🛫" },
  { id: "FL032", airline: "SkyConnect", from: "JAI", to: "DEL", departure: "09:00", arrival: "10:15", price: 3200, logo: "🛫" },
  { id: "FL107", airline: "IndiGo", from: "DEL", to: "JAI", departure: "11:30", arrival: "12:45", price: 2900, logo: "✈️" },
  { id: "FL108", airline: "SpiceJet", from: "JAI", to: "DEL", departure: "14:00", arrival: "15:15", price: 3000, logo: "🌶️" },
  { id: "FL109", airline: "Vistara", from: "DEL", to: "JAI", departure: "17:30", arrival: "18:45", price: 3150, logo: "✨" },
  
  // Bangalore to Kochi Routes
  { id: "FL033", airline: "BrightAir", from: "BLR", to: "COK", departure: "07:00", arrival: "08:10", price: 2900, logo: "✈️" },
  { id: "FL034", airline: "AuraFly", from: "COK", to: "BLR", departure: "09:30", arrival: "10:40", price: 3000, logo: "🌀" },
  { id: "FL110", airline: "IndiGo", from: "BLR", to: "COK", departure: "12:00", arrival: "13:10", price: 2800, logo: "✈️" },
  { id: "FL111", airline: "Air India", from: "COK", to: "BLR", departure: "15:30", arrival: "16:40", price: 3100, logo: "🇮🇳" },
  
  // Chennai to Coimbatore Routes
  { id: "FL035", airline: "Ember Airlines", from: "MAA", to: "CJB", departure: "08:00", arrival: "09:00", price: 2600, logo: "✨" },
  { id: "FL036", airline: "AirVista", from: "CJB", to: "MAA", departure: "11:00", arrival: "12:00", price: 2700, logo: "🛫" },
  { id: "FL112", airline: "IndiGo", from: "MAA", to: "CJB", departure: "14:00", arrival: "15:00", price: 2500, logo: "✈️" },
  { id: "FL113", airline: "SpiceJet", from: "CJB", to: "MAA", departure: "17:00", arrival: "18:00", price: 2550, logo: "🌶️" },
  
  // Delhi to Thiruvananthapuram Routes
  { id: "FL037", airline: "SkyConnect", from: "DEL", to: "TRV", departure: "13:00", arrival: "16:00", price: 6400, logo: "🛫" },
  { id: "FL038", airline: "BrightAir", from: "TRV", to: "DEL", departure: "17:00", arrival: "20:00", price: 6500, logo: "✈️" },
  { id: "FL114", airline: "IndiGo", from: "DEL", to: "TRV", departure: "09:00", arrival: "12:00", price: 6200, logo: "✈️" },
  { id: "FL115", airline: "Air India", from: "TRV", to: "DEL", departure: "06:00", arrival: "09:00", price: 6600, logo: "🇮🇳" },
  
  // Mumbai to Jaipur Routes
  { id: "FL039", airline: "AuraFly", from: "BOM", to: "JAI", departure: "10:30", arrival: "12:00", price: 3700, logo: "🌀" },
  { id: "FL040", airline: "Ember Airlines", from: "JAI", to: "BOM", departure: "14:00", arrival: "15:30", price: 3600, logo: "✨" },
  { id: "FL116", airline: "IndiGo", from: "BOM", to: "JAI", departure: "08:00", arrival: "09:30", price: 3500, logo: "✈️" },
  { id: "FL117", airline: "SpiceJet", from: "JAI", to: "BOM", departure: "17:00", arrival: "18:30", price: 3550, logo: "🌶️" },
  
  // Kolkata to Guwahati Routes
  { id: "FL041", airline: "AirVista", from: "CCU", to: "GAU", departure: "07:00", arrival: "08:10", price: 3500, logo: "🛫" },
  { id: "FL042", airline: "SkyConnect", from: "GAU", to: "CCU", departure: "09:00", arrival: "10:10", price: 3400, logo: "🛫" },
  { id: "FL118", airline: "IndiGo", from: "CCU", to: "GAU", departure: "13:00", arrival: "14:10", price: 3300, logo: "✈️" },
  { id: "FL119", airline: "Air India", from: "GAU", to: "CCU", departure: "16:00", arrival: "17:10", price: 3550, logo: "🇮🇳" },
  
  // Hyderabad to Visakhapatnam Routes
  { id: "FL043", airline: "BrightAir", from: "HYD", to: "VGA", departure: "08:30", arrival: "09:30", price: 2500, logo: "✈️" },
  { id: "FL044", airline: "AuraFly", from: "VGA", to: "HYD", departure: "10:00", arrival: "11:00", price: 2600, logo: "🌀" },
  { id: "FL120", airline: "IndiGo", from: "HYD", to: "VGA", departure: "14:00", arrival: "15:00", price: 2450, logo: "✈️" },
  { id: "FL121", airline: "SpiceJet", from: "VGA", to: "HYD", departure: "17:30", arrival: "18:30", price: 2550, logo: "🌶️" },
  
  // Bangalore to Mangalore Routes
  { id: "FL045", airline: "Ember Airlines", from: "BLR", to: "IXE", departure: "12:30", arrival: "13:30", price: 2800, logo: "✨" },
  { id: "FL046", airline: "AirVista", from: "IXE", to: "BLR", departure: "14:00", arrival: "15:00", price: 2900, logo: "🛫" },
  { id: "FL122", airline: "IndiGo", from: "BLR", to: "IXE", departure: "08:00", arrival: "09:00", price: 2700, logo: "✈️" },
  { id: "FL123", airline: "Air India", from: "IXE", to: "BLR", departure: "17:00", arrival: "18:00", price: 3000, logo: "🇮🇳" },
  
  // Delhi to Nagpur Routes
  { id: "FL047", airline: "SkyConnect", from: "DEL", to: "NAG", departure: "11:00", arrival: "12:30", price: 3500, logo: "🛫" },
  { id: "FL048", airline: "BrightAir", from: "NAG", to: "DEL", departure: "14:00", arrival: "15:30", price: 3600, logo: "✈️" },
  { id: "FL124", airline: "IndiGo", from: "DEL", to: "NAG", departure: "08:00", arrival: "09:30", price: 3400, logo: "✈️" },
  { id: "FL125", airline: "Air India", from: "NAG", to: "DEL", departure: "17:00", arrival: "18:30", price: 3700, logo: "🇮🇳" },
  
  // Mumbai to Goa Routes
  { id: "FL049", airline: "AuraFly", from: "BOM", to: "GOI", departure: "06:30", arrival: "07:30", price: 3200, logo: "🌀" },
  { id: "FL050", airline: "Ember Airlines", from: "GOI", to: "BOM", departure: "09:00", arrival: "10:00", price: 3100, logo: "✨" },
  { id: "FL126", airline: "IndiGo", from: "BOM", to: "GOI", departure: "12:30", arrival: "13:30", price: 3000, logo: "✈️" },
  { id: "FL127", airline: "SpiceJet", from: "GOI", to: "BOM", departure: "15:00", arrival: "16:00", price: 2950, logo: "🌶️" },
  { id: "FL128", airline: "Vistara", from: "BOM", to: "GOI", departure: "18:00", arrival: "19:00", price: 3150, logo: "✨" },
  
  // Delhi to Pune Routes
  { id: "FL051", airline: "AirVista", from: "DEL", to: "PNQ", departure: "08:00", arrival: "10:00", price: 4600, logo: "🛫" },
  { id: "FL052", airline: "SkyConnect", from: "PNQ", to: "DEL", departure: "11:30", arrival: "13:30", price: 4700, logo: "🛫" },
  { id: "FL129", airline: "IndiGo", from: "DEL", to: "PNQ", departure: "14:00", arrival: "16:00", price: 4500, logo: "✈️" },
  { id: "FL130", airline: "Vistara", from: "PNQ", to: "DEL", departure: "17:00", arrival: "19:00", price: 4800, logo: "✨" },
  
  // Chennai to Madurai Routes
  { id: "FL053", airline: "BrightAir", from: "MAA", to: "IXM", departure: "06:00", arrival: "07:00", price: 2500, logo: "✈️" },
  { id: "FL054", airline: "AuraFly", from: "IXM", to: "MAA", departure: "08:00", arrival: "09:00", price: 2400, logo: "🌀" },
  { id: "FL131", airline: "IndiGo", from: "MAA", to: "IXM", departure: "12:00", arrival: "13:00", price: 2350, logo: "✈️" },
  { id: "FL132", airline: "SpiceJet", from: "IXM", to: "MAA", departure: "16:00", arrival: "17:00", price: 2450, logo: "🌶️" },
  
  // Bangalore to Visakhapatnam Routes
  { id: "FL055", airline: "Ember Airlines", from: "BLR", to: "VIZ", departure: "07:30", arrival: "09:15", price: 3800, logo: "✨" },
  { id: "FL056", airline: "AirVista", from: "VIZ", to: "BLR", departure: "10:00", arrival: "11:45", price: 3700, logo: "🛫" },
  { id: "FL133", airline: "IndiGo", from: "BLR", to: "VIZ", departure: "14:00", arrival: "15:45", price: 3650, logo: "✈️" },
  
  // Kolkata to Bhubaneswar Routes
  { id: "FL057", airline: "SkyConnect", from: "CCU", to: "BBI", departure: "12:00", arrival: "13:10", price: 3100, logo: "🛫" },
  { id: "FL058", airline: "BrightAir", from: "BBI", to: "CCU", departure: "15:00", arrival: "16:10", price: 3000, logo: "✈️" },
  { id: "FL134", airline: "IndiGo", from: "CCU", to: "BBI", departure: "08:00", arrival: "09:10", price: 2950, logo: "✈️" },
  { id: "FL135", airline: "Air India", from: "BBI", to: "CCU", departure: "18:00", arrival: "19:10", price: 3150, logo: "🇮🇳" },
  
  // Delhi to Chandigarh Routes
  { id: "FL059", airline: "AuraFly", from: "DEL", to: "IXC", departure: "09:00", arrival: "10:00", price: 2800, logo: "🌀" },
  { id: "FL136", airline: "IndiGo", from: "DEL", to: "IXC", departure: "12:30", arrival: "13:30", price: 2700, logo: "✈️" },
  { id: "FL137", airline: "SpiceJet", from: "IXC", to: "DEL", departure: "15:00", arrival: "16:00", price: 2750, logo: "🌶️" },
  { id: "FL138", airline: "Vistara", from: "DEL", to: "IXC", departure: "18:00", arrival: "19:00", price: 2850, logo: "✨" },
  
  // Additional Popular Routes
  { id: "FL139", airline: "IndiGo", from: "BOM", to: "HYD", departure: "07:00", arrival: "08:30", price: 3400, logo: "✈️" },
  { id: "FL140", airline: "Vistara", from: "HYD", to: "BOM", departure: "10:00", arrival: "11:30", price: 3500, logo: "✨" },
  { id: "FL141", airline: "Air India", from: "BOM", to: "AMD", departure: "13:00", arrival: "14:15", price: 2900, logo: "🇮🇳" },
  { id: "FL142", airline: "SpiceJet", from: "AMD", to: "BOM", departure: "16:00", arrival: "17:15", price: 2800, logo: "🌶️" },
  { id: "FL143", airline: "IndiGo", from: "MAA", to: "DEL", departure: "06:30", arrival: "09:00", price: 5500, logo: "✈️" },
  { id: "FL144", airline: "Vistara", from: "DEL", to: "MAA", departure: "11:00", arrival: "13:30", price: 5700, logo: "✨" },
  { id: "FL145", airline: "Air India", from: "BLR", to: "JAI", departure: "08:00", arrival: "10:30", price: 5200, logo: "🇮🇳" },
  { id: "FL146", airline: "SpiceJet", from: "JAI", to: "BLR", departure: "12:00", arrival: "14:30", price: 5100, logo: "🌶️" },
  { id: "FL147", airline: "IndiGo", from: "CCU", to: "MAA", departure: "09:00", arrival: "11:30", price: 4200, logo: "✈️" },
  { id: "FL148", airline: "Vistara", from: "MAA", to: "CCU", departure: "14:00", arrival: "16:30", price: 4300, logo: "✨" },
  { id: "FL149", airline: "Air India", from: "HYD", to: "COK", departure: "07:30", arrival: "09:00", price: 3600, logo: "🇮🇳" },
  { id: "FL150", airline: "IndiGo", from: "COK", to: "HYD", departure: "11:00", arrival: "12:30", price: 3500, logo: "✈️" },
  
  // Late Night and Early Morning Flights
  { id: "FL151", airline: "IndiGo", from: "DEL", to: "BOM", departure: "22:00", arrival: "00:10", price: 4100, logo: "✈️" },
  { id: "FL152", airline: "SpiceJet", from: "BOM", to: "DEL", departure: "23:00", arrival: "01:10", price: 4000, logo: "🌶️" },
  { id: "FL153", airline: "Air India", from: "DEL", to: "BLR", departure: "05:00", arrival: "07:40", price: 6000, logo: "🇮🇳" },
  { id: "FL154", airline: "IndiGo", from: "BLR", to: "DEL", departure: "21:30", arrival: "00:10", price: 5800, logo: "✈️" },
  { id: "FL155", airline: "Vistara", from: "DEL", to: "HYD", departure: "23:30", arrival: "01:45", price: 5500, logo: "✨" },
  { id: "FL156", airline: "SpiceJet", from: "HYD", to: "DEL", departure: "04:30", arrival: "06:40", price: 5400, logo: "🌶️" },
  { id: "FL157", airline: "IndiGo", from: "BOM", to: "BLR", departure: "22:30", arrival: "00:30", price: 4400, logo: "✈️" },
  { id: "FL158", airline: "Air India", from: "BLR", to: "BOM", departure: "05:30", arrival: "07:30", price: 4600, logo: "🇮🇳" },
  { id: "FL159", airline: "SpiceJet", from: "MAA", to: "DEL", departure: "23:00", arrival: "01:30", price: 5300, logo: "🌶️" },
  { id: "FL160", airline: "Vistara", from: "DEL", to: "MAA", departure: "04:00", arrival: "06:30", price: 5600, logo: "✨" },
  
  // Weekend and Holiday Special Flights
  { id: "FL161", airline: "IndiGo", from: "DEL", to: "GOI", departure: "10:00", arrival: "12:20", price: 5600, logo: "✈️" },
  { id: "FL162", airline: "Vistara", from: "GOI", to: "DEL", departure: "13:00", arrival: "15:20", price: 5800, logo: "✨" },
  { id: "FL163", airline: "Air India", from: "BOM", to: "COK", departure: "09:30", arrival: "11:00", price: 3700, logo: "🇮🇳" },
  { id: "FL164", airline: "SpiceJet", from: "COK", to: "BOM", departure: "12:30", arrival: "14:00", price: 3600, logo: "🌶️" },
  { id: "FL165", airline: "IndiGo", from: "BLR", to: "GOI", departure: "11:00", arrival: "12:00", price: 3300, logo: "✈️" },
  { id: "FL166", airline: "Vistara", from: "GOI", to: "BLR", departure: "14:30", arrival: "15:30", price: 3400, logo: "✨" },
  { id: "FL167", airline: "Air India", from: "DEL", to: "IXC", departure: "16:00", arrival: "17:00", price: 2900, logo: "🇮🇳" },
  { id: "FL168", airline: "SpiceJet", from: "IXC", to: "DEL", departure: "19:30", arrival: "20:30", price: 2800, logo: "🌶️" },
  { id: "FL169", airline: "IndiGo", from: "BOM", to: "LKO", departure: "08:30", arrival: "10:30", price: 3900, logo: "✈️" },
  { id: "FL170", airline: "Vistara", from: "LKO", to: "BOM", departure: "13:00", arrival: "15:00", price: 4000, logo: "✨" },
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