<template>
  <div
    class="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl cursor-pointer"
    @click="$emit('select', destination.id)"
  >
    <!-- 图片 -->
    <div class="relative h-64 overflow-hidden">
      <img
        :src="destination.image"
        :alt="destination.name"
        class="w-full h-full object-cover"
      />
      <div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
        <div class="flex items-center">
          <svg class="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <span class="text-sm font-semibold">{{ destination.rating }}</span>
        </div>
      </div>
    </div>

    <!-- 内容 -->
    <div class="p-6">
      <div class="flex items-start justify-between mb-2">
        <h3 class="text-xl font-bold text-gray-800">{{ destination.name }}</h3>
      </div>

      <p class="text-gray-600 text-sm mb-2 flex items-center">
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        {{ destination.location }}
      </p>

      <p class="text-gray-600 mb-4">{{ destination.description }}</p>

      <div class="flex items-center justify-between">
        <div>
          <span class="text-2xl font-bold text-blue-600">¥{{ destination.price.toLocaleString() }}</span>
          <span class="text-gray-500 text-sm ml-1">{{ destination.priceUnit }}</span>
        </div>
        <button class="text-blue-500 hover:text-blue-700 font-semibold flex items-center">
          查看详情
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Destination } from '@/types/destination';

interface Props {
  destination: Destination;
}

defineProps<Props>();

defineEmits<{
  select: [id: string];
}>();
</script>

