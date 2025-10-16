export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  priceUnit: string;
  location: string;
  rating: number;
  // 详情页扩展字段
  longDescription?: string;
  images?: string[];
  highlights?: string[];
  duration?: string;
  bestTime?: string;
  included?: string[];
  excluded?: string[];
  itinerary?: ItineraryDay[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

