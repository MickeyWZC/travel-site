<template>
  <div class="min-h-screen">
    <Header />

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-blue-600 to-green-600 text-white py-24">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">关于我们</h1>
          <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            探索世界，发现美好。我们致力于为每一位旅行者打造难忘的旅程体验
          </p>
        </div>
      </div>
      <!-- 装饰性波浪 -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="white"/>
        </svg>
      </div>
    </section>

    <!-- 公司介绍 -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-gray-800 mb-6">我们的故事</h2>
            <p class="text-gray-600 text-lg mb-4">
              探索世界成立于2020年，我们是一家专注于提供高品质旅游体验的现代化旅游服务平台。
              从成立之初，我们就秉承着"让每一次旅行都成为美好回忆"的理念。
            </p>
            <p class="text-gray-600 text-lg mb-4">
              我们的团队由资深旅游专家、当地向导和热情的客服人员组成，
              致力于为您精心策划每一个行程细节，确保您的旅程既安全又充满惊喜。
            </p>
            <p class="text-gray-600 text-lg">
              无论您是寻求冒险刺激的背包客，还是追求舒适放松的度假者，
              我们都能为您量身定制最适合的旅行方案。
            </p>
          </div>
          <div class="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop" 
              alt="旅行团队" 
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 使命与愿景 -->
    <section class="py-16 bg-blue-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">使命与愿景</h2>
          <p class="text-gray-600 text-lg">我们的承诺与追求</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl p-8 shadow-lg">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">🎯</span>
            </div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-4 text-center">我们的使命</h3>
            <p class="text-gray-600 text-center">
              为每一位旅行者提供安全、舒适、难忘的旅行体验，
              让世界触手可及，让美好随处可见。
            </p>
          </div>

          <div class="bg-white rounded-xl p-8 shadow-lg">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">🌟</span>
            </div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-4 text-center">我们的愿景</h3>
            <p class="text-gray-600 text-center">
              成为最受信赖的旅游服务平台，
              用专业和热情连接世界各地的美好，
              让旅行改变生活。
            </p>
          </div>

          <div class="bg-white rounded-xl p-8 shadow-lg">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">💎</span>
            </div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-4 text-center">我们的价值观</h3>
            <p class="text-gray-600 text-center">
              诚信为本，客户至上，追求卓越，
              持续创新，用心服务每一位旅行者。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心优势 -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">我们的优势</h2>
          <p class="text-gray-600 text-lg">专业团队，贴心服务</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="advantage in advantages" 
            :key="advantage.id"
            class="text-center p-6 rounded-xl hover:shadow-lg transition transform hover:scale-105"
          >
            <div class="text-5xl mb-4">{{ advantage.icon }}</div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ advantage.title }}</h3>
            <p class="text-gray-600">{{ advantage.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 数据统计 -->
    <section class="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div 
            v-for="stat in stats" 
            :key="stat.id"
            class="text-center"
          >
            <div class="text-4xl md:text-5xl font-bold mb-2">{{ stat.value }}</div>
            <div class="text-blue-100 text-lg">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-blue-50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold text-gray-800 mb-6">准备好开始您的旅程了吗？</h2>
        <p class="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          现在就联系我们，让我们的专业团队为您定制专属的旅行计划
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/booking"
            class="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition transform hover:scale-105"
          >
            立即预订
          </router-link>
          <a
            href="#contact"
            class="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            联系我们
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

const advantages = ref([
  {
    id: '1',
    icon: '🏆',
    title: '专业团队',
    description: '资深旅游专家和当地向导组成的专业服务团队'
  },
  {
    id: '2',
    icon: '🌍',
    title: '全球覆盖',
    description: '覆盖全球200+热门旅游目的地，满足您的各种需求'
  },
  {
    id: '3',
    icon: '⭐',
    title: '品质保证',
    description: '严格筛选合作伙伴，确保服务质量和安全标准'
  },
  {
    id: '4',
    icon: '💰',
    title: '价格优势',
    description: '直接对接优质资源，为您提供最具性价比的旅行方案'
  }
]);

const stats = ref([
  {
    id: '1',
    value: '50,000+',
    label: '满意客户'
  },
  {
    id: '2',
    value: '200+',
    label: '旅游目的地'
  },
  {
    id: '3',
    value: '98%',
    label: '客户好评率'
  },
  {
    id: '4',
    value: '24/7',
    label: '全天候服务'
  }
]);
</script>
