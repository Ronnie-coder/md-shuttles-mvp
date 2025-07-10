export type Package = {
  id: string;
  title: string;
  description: string;
  price: number | null;
  imageUrl: string;
};

export const allPackages: Package[] = [
  // Page 1
  { id: 'airport-transfers', title: 'Airport Transfers', description: 'Reliable and timely transfers to and from the airport.', price: 350, imageUrl: '/images/packages/airport.jpg' },
  { id: 'chauffeur-drives', title: 'Private Chauffeur Drives', description: 'Your personal driver for a day of luxury and convenience.', price: 1700, imageUrl: '/images/packages/chauffeur.jpg' },
  { id: 'peninsula-cape', title: 'The Peninsula & Cape of Good Hope', description: 'A breathtaking journey to the iconic southwestern tip of Africa.', price: 9180, imageUrl: '/images/packages/cape-of-good-hope.jpg' },
  { id: 'best-of-cape-town', title: 'Best of Cape Town', description: 'Explore the city\'s top attractions, from Table Mountain to the V&A Waterfront.', price: 9420, imageUrl: '/images/packages/cape-town.jpg' },
  { id: 'whale-route', title: 'Whale Route', description: 'A seasonal tour to witness majestic southern right whales in Hermanus.', price: 1760, imageUrl: '/images/packages/whale-route.jpg' },
  { id: 'cultural-robben-island', title: 'Cultural & Robben Island', description: 'A poignant historical tour of the city and Robben Island.', price: 4250, imageUrl: '/images/packages/robben-island.jpg' },
  { id: 'wine-route', title: 'Wine Route', description: 'Savor the best vintages from the famous Stellenbosch & Franschhoek regions.', price: 8050, imageUrl: '/images/packages/wine-route.jpg' },
  { id: 'ebike-peninsula', title: 'E-Bike Cape Peninsula', description: 'Experience the stunning Cape Peninsula on a fun and accessible e-bike.', price: 2720, imageUrl: '/images/packages/ebike-peninsula.jpg' },
  { id: 'ebike-wine-route', title: 'E-Bike Wine Route', description: 'Cycle through beautiful vineyards and enjoy tastings with ease on an e-bike.', price: 2720, imageUrl: '/images/packages/ebike-wine.jpg' },
  { id: 'ebike-safari-west', title: 'E-Bike Safari West Coast', description: 'A unique wildlife safari adventure on an e-bike through the West Coast.', price: 3350, imageUrl: '/images/packages/ebike-safari.jpg' },
  { id: 'cape-town-safari', title: 'Cape Town Safari', description: 'An unforgettable Big 5 safari experience just a short drive from the city.', price: 4060, imageUrl: '/images/packages/safari.jpg' },
  { id: 'white-shark-cage', title: 'White Shark Cage Diving', description: 'An adrenaline-pumping encounter with the ocean\'s apex predator.', price: 2900, imageUrl: '/images/packages/shark-cage.jpg' },
  
  // Page 2
  { id: 'combo-marine-city', title: 'Combo: Marine Wildlife & City', description: 'Enjoy a sea cruise to spot marine life, followed by a city tour.', price: 2300, imageUrl: '/images/packages/combo-marine-city.jpg' },
  { id: 'combo-marine-wine', title: 'Combo: Marine Wildlife & Winelands', description: 'Pair a thrilling ocean adventure with a relaxing afternoon of wine tasting.', price: 2530, imageUrl: '/images/packages/combo-marine-wine.jpg' },
  { id: 'combo-marine-point', title: 'Combo: Marine Wildlife & Cape Point', description: 'The ultimate coastal experience combining a marine cruise and Cape Point.', price: 2710, imageUrl: '/images/packages/combo-marine-point.jpg' },
  { id: 'conference-events', title: 'Conference & Events', description: 'Seamless transportation logistics for your corporate events and conferences.', price: null, imageUrl: '/images/packages/conference.jpg' },
  { id: 'office-to-office', title: 'Office to Office Transportation', description: 'Reliable and professional transport services between your business locations.', price: null, imageUrl: '/images/packages/office.jpg' },
  { id: 'staff-transport', title: 'Staff Transportation', description: 'Customizable and dependable shuttle services for your valued employees.', price: null, imageUrl: '/images/packages/staff-transport.jpg' },
  { id: 'flavors-friends', title: 'Flavors & Friends', description: 'Curated culinary tours for private groups. Let\'s explore the tastes of the Cape.', price: null, imageUrl: '/images/packages/flavors.jpg' },
  { id: 'trailblazers', title: 'Trailblazers', description: 'Custom adventure packages for hiking and exploring the mountains.', price: null, imageUrl: '/images/packages/trailblazers.jpg' },
  { id: 'wilderness-wanderers', title: 'Wilderness Wanderers', description: 'Bespoke nature and wildlife tours designed around your interests.', price: null, imageUrl: '/images/packages/wilderness.jpg' },
  { id: 'winelands-explorers', title: 'Winelands Explorers', description: 'A personalized wine tasting journey tailored to your group\'s preferences.', price: null, imageUrl: '/images/packages/winelands-explorers.jpg' },
  { id: 'wave-riders', title: 'Wave Riders', description: 'Let us handle the transport for your surfing safari along the Cape coast.', price: null, imageUrl: '/images/packages/wave-riders.jpg' },
  { id: 'coffee-connectors', title: 'Coffee Connectors', description: 'A guided tour of Cape Town\'s best artisanal coffee roasters and cafes.', price: null, imageUrl: '/images/packages/coffee.jpg' },
  
  // Page 3
  { id: 'accommodation', title: 'Accommodation', description: 'Transportation services to and from your hotel, guesthouse, or rental.', price: null, imageUrl: '/images/packages/accommodation.jpg' },
  { id: 'township-tours', title: 'Township Tours', description: 'An insightful and authentic cultural experience in local townships.', price: null, imageUrl: '/images/packages/township.jpg' },
  { id: 'educational-tours', title: 'Educational Tours', description: 'Customized transport and tour solutions for school and university groups.', price: null, imageUrl: '/images/packages/educational.jpg' },
];