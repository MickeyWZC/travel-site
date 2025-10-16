<template>
  <section class="relative h-screen flex items-center justify-center text-white">
    <!-- 背景图片 -->
    <div
      class="absolute inset-0 bg-cover bg-center z-0"
      style="background-image: url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&h=1080&fit=crop')"
    >
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
    </div>

    <!-- 内容 -->
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <h1 class="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
        探索世界的美好
      </h1>
      <p class="text-xl md:text-2xl mb-8 text-gray-200">
        发现令人惊叹的目的地，创造难忘的回忆
      </p>

      <!-- 搜索栏 -->
      <div class="max-w-2xl mx-auto mb-8">
        <div class="bg-white rounded-full shadow-2xl p-2 flex items-center">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索您的梦想目的地..."
            class="flex-1 px-6 py-3 text-gray-800 outline-none rounded-l-full"
          />
          <button class="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition">
            搜索
          </button>
        </div>
      </div>

      <!-- CTA 按钮 -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#destinations"
          class="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition transform hover:scale-105"
        >
          开始探索
        </a>
        <router-link
          to="/booking"
          class="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition transform hover:scale-105"
        >
          立即预订
        </router-link>
      </div>
    </div>

    <!-- 滚动提示 -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchQuery = ref('');
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>

