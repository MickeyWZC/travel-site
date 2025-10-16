<template>
  <div class="bg-white rounded-xl shadow-lg p-6 sticky top-24">
    <h3 class="text-xl font-bold text-gray-800 mb-6">订单摘要</h3>

    <div v-if="summary" class="space-y-4">
      <!-- 目的地 -->
      <div class="flex justify-between py-2 border-b">
        <span class="text-gray-600">目的地</span>
        <span class="font-semibold text-gray-800">{{ summary.destination }}</span>
      </div>

      <!-- 日期 -->
      <div class="flex justify-between py-2 border-b">
        <span class="text-gray-600">出发日期</span>
        <span class="font-semibold text-gray-800">{{ formatDate(summary.departureDate) }}</span>
      </div>
      <div class="flex justify-between py-2 border-b">
        <span class="text-gray-600">返回日期</span>
        <span class="font-semibold text-gray-800">{{ formatDate(summary.returnDate) }}</span>
      </div>

      <!-- 天数 -->
      <div class="flex justify-between py-2 border-b">
        <span class="text-gray-600">总天数</span>
        <span class="font-semibold text-gray-800">{{ summary.totalDays }} 天</span>
      </div>

      <!-- 人数 -->
      <div class="flex justify-between py-2 border-b">
        <span class="text-gray-600">成人</span>
        <span class="font-semibold text-gray-800">{{ summary.adults }} 人</span>
      </div>
      <div v-if="summary.children > 0" class="flex justify-between py-2 border-b">
        <span class="text-gray-600">儿童</span>
        <span class="font-semibold text-gray-800">{{ summary.children }} 人</span>
      </div>

      <!-- 价格明细 -->
      <div class="mt-6 pt-4 border-t-2">
        <div class="flex justify-between py-2">
          <span class="text-gray-600">成人 ({{ summary.adults }} × ¥{{ summary.pricePerPerson.toLocaleString() }})</span>
          <span class="text-gray-800">¥{{ (summary.adults * summary.pricePerPerson).toLocaleString() }}</span>
        </div>
        <div v-if="summary.children > 0" class="flex justify-between py-2">
          <span class="text-gray-600">儿童 ({{ summary.children }} × ¥{{ (summary.pricePerPerson * 0.7).toLocaleString() }})</span>
          <span class="text-gray-800">¥{{ (summary.children * summary.pricePerPerson * 0.7).toLocaleString() }}</span>
        </div>
      </div>

      <!-- 总价 -->
      <div class="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 mt-4">
        <div class="flex justify-between items-center">
          <span class="text-lg font-semibold text-gray-700">总计</span>
          <span class="text-2xl font-bold text-blue-600">¥{{ formatPrice(summary.totalPrice) }}</span>
        </div>
      </div>

      <!-- 提示信息 -->
      <div class="mt-4 p-4 bg-yellow-50 rounded-lg">
        <p class="text-sm text-gray-600">
          <svg class="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
          </svg>
          此价格为预估价格，最终价格以确认订单为准
        </p>
      </div>
    </div>

    <div v-else class="text-center py-8 text-gray-500">
      <svg class="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
      </svg>
      <p>请填写预订信息</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useBookingStore } from '@/store/booking';
import { formatDate as formatDateUtil } from '@/utils/formatters';

const bookingStore = useBookingStore();
const summary = computed(() => bookingStore.orderSummary);

const formatDate = (date: string) => {
  return formatDateUtil(date);
};

const formatPrice = (price: number) => {
  return price.toLocaleString();
};
</script>

