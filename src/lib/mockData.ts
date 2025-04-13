
export interface CardListing {
  id: string;
  title: string;
  image: string;
  currentPrice: number;
  previousPrice: number;
  percentDrop: number;
  link: string;
  category: string;
  timeDropped: string; // ISO string
}

export const categories = [
  'All Categories',
  'Pokémon',
  'Magic: The Gathering',
  'Yu-Gi-Oh!',
  'Sports Cards',
  'Other TCGs'
];

export const mockListings: CardListing[] = [
  {
    id: '1',
    title: 'Charizard Holo 1st Edition Base Set PSA 9',
    image: 'https://i.ebayimg.com/images/g/ioIAAOSwImBk1Toi/s-l1600.jpg',
    currentPrice: 7499.99,
    previousPrice: 9999.99,
    percentDrop: 25,
    link: 'https://www.ebay.com',
    category: 'Pokémon',
    timeDropped: new Date(Date.now() - 3600000 * 2).toISOString() // 2 hours ago
  },
  {
    id: '2',
    title: 'Black Lotus Alpha Edition MTG BGS 8.5',
    image: 'https://i.ebayimg.com/images/g/NagAAOSwRGxlFsOl/s-l1600.jpg',
    currentPrice: 29999.99,
    previousPrice: 45999.99,
    percentDrop: 34.78,
    link: 'https://www.ebay.com',
    category: 'Magic: The Gathering',
    timeDropped: new Date(Date.now() - 3600000 * 5).toISOString() // 5 hours ago
  },
  {
    id: '3',
    title: 'Blue-Eyes White Dragon 1st Edition LOB-001 PSA 10',
    image: 'https://i.ebayimg.com/images/g/Z0IAAOSwD89j~l0P/s-l1600.jpg',
    currentPrice: 12500,
    previousPrice: 19999.99,
    percentDrop: 37.5,
    link: 'https://www.ebay.com',
    category: 'Yu-Gi-Oh!',
    timeDropped: new Date(Date.now() - 3600000 * 12).toISOString() // 12 hours ago
  },
  {
    id: '4',
    title: '1986 Fleer Michael Jordan Rookie #57 PSA 9',
    image: 'https://i.ebayimg.com/images/g/Mw4AAOSwvNJiaS3N/s-l1600.jpg',
    currentPrice: 11495,
    previousPrice: 15995,
    percentDrop: 28.13,
    link: 'https://www.ebay.com',
    category: 'Sports Cards',
    timeDropped: new Date(Date.now() - 3600000 * 16).toISOString() // 16 hours ago
  },
  {
    id: '5',
    title: 'Blastoise Holo 1st Edition Base Set PSA 8',
    image: 'https://i.ebayimg.com/images/g/oFQAAOSwi7tkTfnC/s-l1600.jpg',
    currentPrice: 2750,
    previousPrice: 3999.99,
    percentDrop: 31.25,
    link: 'https://www.ebay.com',
    category: 'Pokémon',
    timeDropped: new Date(Date.now() - 3600000 * 20).toISOString() // 20 hours ago
  },
  {
    id: '6',
    title: 'Mox Ruby Alpha Edition MTG BGS 9',
    image: 'https://i.ebayimg.com/images/g/3wgAAOSwLIxk~m1w/s-l1600.jpg',
    currentPrice: 5999.99,
    previousPrice: 8499.99,
    percentDrop: 29.41,
    link: 'https://www.ebay.com',
    category: 'Magic: The Gathering',
    timeDropped: new Date(Date.now() - 3600000 * 3).toISOString() // 3 hours ago
  },
  {
    id: '7',
    title: 'Dark Magician 1st Edition LOB-005 PSA 9',
    image: 'https://i.ebayimg.com/images/g/3psAAOSwvElj20nq/s-l1600.jpg',
    currentPrice: 2999.99,
    previousPrice: 4599.99,
    percentDrop: 34.78,
    link: 'https://www.ebay.com',
    category: 'Yu-Gi-Oh!',
    timeDropped: new Date(Date.now() - 3600000 * 7).toISOString() // 7 hours ago
  },
  {
    id: '8',
    title: '1996 Topps Kobe Bryant Rookie #138 PSA 10',
    image: 'https://i.ebayimg.com/images/g/UKIAAOSwjBpjeIMD/s-l1600.jpg',
    currentPrice: 5999.99,
    previousPrice: 8999.99,
    percentDrop: 33.33,
    link: 'https://www.ebay.com',
    category: 'Sports Cards',
    timeDropped: new Date(Date.now() - 3600000 * 10).toISOString() // 10 hours ago
  },
  {
    id: '9',
    title: 'Venusaur Holo 1st Edition Base Set PSA 8',
    image: 'https://i.ebayimg.com/images/g/y9kAAOSwTmtlGz0w/s-l1600.jpg',
    currentPrice: 1799.99,
    previousPrice: 2399.99,
    percentDrop: 25,
    link: 'https://www.ebay.com',
    category: 'Pokémon',
    timeDropped: new Date(Date.now() - 3600000 * 22).toISOString() // 22 hours ago
  },
  {
    id: '10',
    title: 'Digimon Alpha Red Box Booster Sealed',
    image: 'https://i.ebayimg.com/images/g/bBQAAOSwXAJlFyf8/s-l1600.jpg',
    currentPrice: 379.99,
    previousPrice: 549.99,
    percentDrop: 30.91,
    link: 'https://www.ebay.com',
    category: 'Other TCGs',
    timeDropped: new Date(Date.now() - 3600000 * 18).toISOString() // 18 hours ago
  }
];

// Helper function to format prices
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price);
}

// Helper function to format time since drop
export function formatTimeSince(timeDropped: string): string {
  const dropTime = new Date(timeDropped).getTime();
  const now = Date.now();
  const diffInHours = Math.floor((now - dropTime) / (1000 * 60 * 60));
  
  if (diffInHours < 1) {
    return 'Just now';
  } else if (diffInHours === 1) {
    return '1 hour ago';
  } else if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  } else {
    return '1 day ago';
  }
}
