export const locations = [
  {
    id: 1,
    title: "Santorini",
    category: "Islands",
    description:
      "Perched atop volcanic cliffs, Santorini's iconic whitewashed villages cascade down to the impossibly blue Aegean Sea. A place where every sunset feels like it was composed for you alone.",
    whatsSpecial:
      "The caldera view from Oia at golden hour — the sky turns every shade of amber and rose before the last light disappears behind the volcano.",
    location: { city: "Oia", country: "Greece", continent: "Europe" },
    status: "visited",
    rating: 5,
    links: [
      { label: "Travel Guide", url: "https://www.visitgreece.gr/islands/cyclades/santorini/" },
      { label: "Best Restaurants", url: "https://www.tripadvisor.com/Restaurants-g189433-Santorini_South_Aegean.html" },
    ],
  },
  {
    id: 2,
    title: "Kyoto",
    category: "Historical",
    description:
      "Japan's ancient capital layers centuries of history beneath a quiet, contemplative surface. Bamboo groves, moss temples, and the ghost of old Japan linger in every stone-paved lane.",
    whatsSpecial:
      "The Fushimi Inari thousands of vermillion torii gates climbing the mountain at dawn, before the crowds arrive — a genuinely sacred corridor.",
    location: { city: "Kyoto", country: "Japan", continent: "Asia" },
    status: "plan-to-visit",
    rating: 0,
    links: [
      { label: "UNESCO Sites", url: "https://whc.unesco.org/en/list/688" },
      { label: "Travel Blog", url: "https://www.japan-guide.com/e/e2158.html" },
    ],
  },
  {
    id: 3,
    title: "Amalfi Coast",
    category: "Coastal",
    description:
      "A UNESCO-listed stretch of coastline where lemon groves tumble down vertiginous cliffs to turquoise coves. Each village clings to the rock like a painted postcard defying gravity.",
    whatsSpecial:
      "Driving the Nastro d'Argento road at dawn — hairpin turns, empty roads, and the Mediterranean shimmering hundreds of metres below.",
    location: { city: "Positano", country: "Italy", continent: "Europe" },
    status: "visited",
    rating: 4,
    links: [
      { label: "UNESCO Heritage", url: "https://whc.unesco.org/en/list/830" },
      { label: "Boat Tours", url: "https://www.amalficoast.it/en/ferries-amalfi-coast" },
    ],
  },
  {
    id: 4,
    title: "Patagonia",
    category: "Mountains",
    description:
      "At the bottom of the world, Patagonia's granite spires pierce storm-wracked skies above ancient glaciers and the infinite Pampas. Wilderness on a scale that recalibrates everything.",
    whatsSpecial:
      "Standing at Base Torres del Paine at first light — the towers glow pink before the world wakes, reflected in an ice-cold lagoon below.",
    location: { city: "Torres del Paine", country: "Chile", continent: "South America" },
    status: "plan-to-visit",
    rating: 0,
    links: [
      { label: "National Park", url: "https://www.parquetorresdelpaine.cl/" },
      { label: "Trekking Routes", url: "https://www.trekkingchile.com/" },
    ],
  },
  {
    id: 5,
    title: "Bali",
    category: "Islands",
    description:
      "The Island of Gods remains a place of genuine spiritual depth beneath the tourist surface — ancient temples buried in jungle, rice terraces carved over centuries, offerings on every doorstep.",
    whatsSpecial:
      "The water temple ritual at Pura Tirta Empul — bathing in sacred spring water alongside Balinese families still performing the same purification rites from the 10th century.",
    location: { city: "Ubud", country: "Indonesia", continent: "Asia" },
    status: "visited",
    rating: 4,
    links: [
      { label: "Culture Guide", url: "https://www.indonesia.travel/gb/en/destinations/bali-nusa-tenggara/bali" },
      { label: "Temple Map", url: "https://www.bali.com/bali-temples.html" },
    ],
  },
  {
    id: 6,
    title: "Marrakech",
    category: "Cities",
    description:
      "A sensory overload in the best possible way — the medina is a labyrinth of souks, riads, and spice merchants. Every alley has a secret courtyard; every rooftop has a story.",
    whatsSpecial:
      "Getting genuinely lost in the medina at noon — the smell of leather tanneries, the sound of a distant muezzin, a cool fountain courtyard appearing from nowhere.",
    location: { city: "Marrakech", country: "Morocco", continent: "Africa" },
    status: "plan-to-visit",
    rating: 0,
    links: [
      { label: "Medina Guide", url: "https://www.lonelyplanet.com/morocco/marrakesh/the-souqs-of-marrakech" },
      { label: "Riad Stays", url: "https://www.booking.com/city/ma/marrakech.html" },
    ],
  },
  {
    id: 7,
    title: "New York City",
    category: "Cities",
    description:
      "The city that never invented a reason to sleep. Manhattan's grid hums with a kinetic energy found nowhere else — every neighborhood a distinct world, the whole thing moving at a velocity that's almost geological.",
    whatsSpecial:
      "Walking the High Line at dusk as the last light catches the Hudson and the neon signs flicker on — the city's architectural history compressed into a single elevated promenade.",
    location: { city: "Manhattan", country: "USA", continent: "North America" },
    status: "visited",
    rating: 4,
    links: [
      { label: "The High Line", url: "https://www.thehighline.org/" },
      { label: "NYC Guide", url: "https://www.nycgo.com/" },
    ],
  },
  {
    id: 8,
    title: "Cape Town",
    category: "Coastal",
    description:
      "Hemmed between mountain and ocean, Cape Town is one of the most dramatically situated cities on Earth. Penguin colonies, wine estates, and the ghost of Mandela's imprisonment occupy the same small geography.",
    whatsSpecial:
      "Table Mountain at sunrise before the cloud tablecloth rolls in — the whole Cape Peninsula laid out below, and the ocean on three sides.",
    location: { city: "Cape Town", country: "South Africa", continent: "Africa" },
    status: "plan-to-visit",
    rating: 0,
    links: [
      { label: "Table Mountain", url: "https://www.tablemountain.net/" },
      { label: "Robben Island", url: "https://www.robben-island.org.za/" },
    ],
  },
  {
    id: 9,
    title: "Prague",
    category: "Historical",
    description:
      "The city that the 20th century largely spared. Prague's medieval core is the best-preserved in Europe — Baroque, Gothic and Art Nouveau layered so densely that every bridge and square is a history lesson you enjoy taking.",
    whatsSpecial:
      "Crossing Charles Bridge alone at 5 AM in October — stone saints loom in the fog, the river below invisible, the Old Town emerging from the mist.",
    location: { city: "Prague", country: "Czech Republic", continent: "Europe" },
    status: "visited",
    rating: 5,
    links: [
      { label: "Charles Bridge", url: "https://www.prague.eu/en/object/places/127/charles-bridge-karluv-most" },
      { label: "City Guide", url: "https://www.lonelyplanet.com/czech-republic/prague" },
    ],
  },
  {
    id: 10,
    title: "The Maldives",
    category: "Islands",
    description:
      "A scattering of coral atolls barely above sea level — the Maldives is the world's lowest country and perhaps its most beguiling. The water is glass-clear in colours that don't seem real.",
    whatsSpecial:
      "A glass-floor overwater bungalow at night — rays and reef sharks patrol below in the blue-lit shallows, and the Milky Way stretches overhead.",
    location: { city: "North Malé Atoll", country: "Maldives", continent: "Asia" },
    status: "plan-to-visit",
    rating: 0,
    links: [
      { label: "Resort Guide", url: "https://www.visitmaldives.com/en" },
      { label: "Marine Life", url: "https://www.iucnredlist.org/search?query=maldives+reef" },
    ],
  },
];

export const categories = ["All", "Islands", "Historical", "Coastal", "Mountains", "Cities"];
export const statuses = ["All", "Visited", "Plan to Visit"];
