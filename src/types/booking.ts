export interface BookingFormData {
  // 个人信息
  name: string;
  email: string;
  phone: string;
  country: string;

  // 行程信息
  destination: string;
  departureDate: string;
  returnDate: string;
  adults: number;
  children: number;
  roomType: string;

  // 特殊需求
  specialRequests: string;
}

export interface OrderSummary {
  destination: string;
  departureDate: string;
  returnDate: string;
  totalDays: number;
  adults: number;
  children: number;
  pricePerPerson: number;
  totalPrice: number;
}

