import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { BookingFormData, OrderSummary } from '@/types/booking';
import { calculateDays } from '@/utils/formatters';
import { useDestinationsStore } from './destinations';

export const useBookingStore = defineStore('booking', () => {
  const bookingData = ref<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    country: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    adults: 1,
    children: 0,
    roomType: '',
    specialRequests: '',
  });

  const orderSummary = computed<OrderSummary | null>(() => {
    const { destination, departureDate, returnDate, adults, children } = bookingData.value;

    if (!destination || !departureDate || !returnDate) {
      return null;
    }

    const destinationsStore = useDestinationsStore();
    const dest = destinationsStore.getDestinationById(destination);

    if (!dest) {
      return null;
    }

    const totalDays = calculateDays(departureDate, returnDate);
    const pricePerPerson = dest.price;
    const totalPrice = pricePerPerson * (adults + children * 0.7);

    return {
      destination: dest.name,
      departureDate,
      returnDate,
      totalDays,
      adults,
      children,
      pricePerPerson,
      totalPrice,
    };
  });

  const updateBookingData = (data: Partial<BookingFormData>) => {
    bookingData.value = { ...bookingData.value, ...data };
  };

  const resetBooking = () => {
    bookingData.value = {
      name: '',
      email: '',
      phone: '',
      country: '',
      destination: '',
      departureDate: '',
      returnDate: '',
      adults: 1,
      children: 0,
      roomType: '',
      specialRequests: '',
    };
  };

  return {
    bookingData,
    orderSummary,
    updateBookingData,
    resetBooking,
  };
});

