<template>
  <section class="py-16 bg-gradient-to-r from-blue-50 to-green-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">客户评价</h2>
        <p class="text-gray-600 text-lg">听听他们的旅行故事</p>
      </div>

      <div class="relative max-w-4xl mx-auto">
        <!-- 评价卡片 -->
        <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div class="flex items-center mb-6">
            <img
              :src="currentTestimonial.avatar"
              :alt="currentTestimonial.name"
              class="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h4 class="text-xl font-semibold text-gray-800">{{ currentTestimonial.name }}</h4>
              <div class="flex items-center mt-1">
                <svg
                  v-for="star in 5"
                  :key="star"
                  class="w-5 h-5"
                  :class="star <= currentTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
            </div>
          </div>
          <p class="text-gray-600 text-lg leading-relaxed italic">
            "{{ currentTestimonial.comment }}"
          </p>
        </div>

        <!-- 导航按钮 -->
        <div class="flex justify-center mt-8 space-x-2">
          <button
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.id"
            @click="currentIndex = index"
            class="w-3 h-3 rounded-full transition"
            :class="currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'"
          ></button>
        </div>

        <!-- 左右箭头 -->
        <button
          @click="prev"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition"
        >
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <button
          @click="next"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition"
        >
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const testimonials = ref([
  {
    id: '1',
    name: '张小姐',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
    rating: 5,
    comment: '这次马尔代夫之旅太棒了！服务周到，行程安排合理，住宿环境优美。导游非常专业，让我们深入了解了当地文化。强烈推荐！'
  },
  {
    id: '2',
    name: '李先生',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
    rating: 5,
    comment: '瑞士阿尔卑斯山的行程超出预期！风景如画，滑雪体验一流。客服团队反应迅速，解决了我们遇到的所有问题。非常满意！'
  },
  {
    id: '3',
    name: '王女士',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
    rating: 5,
    comment: '京都之旅让我感受到了浓厚的日本文化。寺庙参观、茶道体验都安排得很好。酒店位置便利，服务贴心。下次还会选择这里！'
  }
]);

const currentIndex = ref(0);

const currentTestimonial = computed(() => testimonials.value[currentIndex.value]);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};
</script>

