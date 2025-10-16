<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <div class="text-2xl font-bold">
            <span class="text-blue-500">探索</span>
            <span class="text-green-500">世界</span>
          </div>
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link to="/" class="text-gray-700 hover:text-blue-500 transition">首页</router-link>
          <a href="#destinations" class="text-gray-700 hover:text-blue-500 transition">目的地</a>
          <router-link to="/about" class="text-gray-700 hover:text-blue-500 transition">关于我们</router-link>
          <a href="#contact" class="text-gray-700 hover:text-blue-500 transition">联系方式</a>
          <router-link
            to="/booking"
            class="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition transform hover:scale-105"
          >
            立即预订
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="md:hidden text-gray-700 focus:outline-none"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden mt-4 pb-4">
        <div class="flex flex-col space-y-4">
          <router-link to="/" class="text-gray-700 hover:text-blue-500 transition" @click="toggleMenu">首页</router-link>
          <a href="#destinations" class="text-gray-700 hover:text-blue-500 transition" @click="toggleMenu">目的地</a>
          <router-link to="/about" class="text-gray-700 hover:text-blue-500 transition" @click="toggleMenu">关于我们</router-link>
          <a href="#contact" class="text-gray-700 hover:text-blue-500 transition" @click="toggleMenu">联系方式</a>
          <router-link
            to="/booking"
            class="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-full text-center hover:shadow-lg transition"
            @click="toggleMenu"
          >
            立即预订
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

