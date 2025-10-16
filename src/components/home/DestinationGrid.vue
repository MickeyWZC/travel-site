<template>
  <section id="destinations" class="py-16 bg-blue-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">热门目的地</h2>
        <p class="text-gray-600 text-lg">发现世界各地令人惊叹的旅游胜地</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <DestinationCard
          v-for="destination in destinations"
          :key="destination.id"
          :destination="destination"
          @select="handleSelect"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useDestinationsStore } from '@/store/destinations';
import { useBookingStore } from '@/store/booking';
import DestinationCard from './DestinationCard.vue';

const router = useRouter();
const destinationsStore = useDestinationsStore();
const bookingStore = useBookingStore();

const destinations = computed(() => destinationsStore.destinations);

const handleSelect = (id: string) => {
  router.push(`/destination/${id}`);
};
</script>

