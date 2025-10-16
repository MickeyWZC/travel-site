<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">为什么选择我们</h2>
        <p class="text-gray-600 text-lg">专业的服务，让您的旅程无忧</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="feature in features"
          :key="feature.id"
          class="text-center p-6 rounded-xl hover:shadow-lg transition transform hover:scale-105"
        >
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-3xl">{{ feature.icon }}</span>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const features = ref([
  {
    id: '1',
    icon: '👨‍✈️',
    title: '专业导游服务',
    description: '经验丰富的导游团队，为您提供专业的旅行指导和当地文化讲解'
  },
  {
    id: '2',
    icon: '🏨',
    title: '精选住宿',
    description: '精心挑选优质酒店，确保您享受舒适安全的住宿环境'
  },
  {
    id: '3',
    icon: '💬',
    title: '24/7 客服支持',
    description: '全天候客服团队随时待命，及时解决您在旅途中的任何问题'
  },
  {
    id: '4',
    icon: '💰',
    title: '最优价格保证',
    description: '承诺提供市场最优价格，发现更低价格即刻退还差价'
  }
]);
</script>

