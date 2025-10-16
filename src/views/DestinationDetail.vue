<template>
  <div class="min-h-screen bg-gray-50">
    <Header />
    
    <div v-if="destination" class="container mx-auto px-4 py-8">
      <!-- 图片画廊 -->
      <div class="mb-8">
        <div class="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <img
            :src="currentImage"
            :alt="destination.name"
            class="w-full h-full object-cover"
          />
          <div class="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span class="text-lg font-bold">{{ destination.rating }}</span>
            </div>
          </div>
        </div>
        
        <!-- 缩略图 -->
        <div v-if="destination.images && destination.images.length > 1" class="grid grid-cols-4 gap-4 mt-4">
          <div
            v-for="(img, index) in destination.images"
            :key="index"
            @click="currentImageIndex = index"
            :class="[
              'relative h-24 rounded-lg overflow-hidden cursor-pointer transition-all',
              currentImageIndex === index ? 'ring-4 ring-blue-500' : 'opacity-70 hover:opacity-100'
            ]"
          >
            <img :src="img" :alt="`${destination.name} ${index + 1}`" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- 主要内容 -->
        <div class="lg:col-span-2 space-y-8">
          <!-- 基本信息 -->
          <div class="bg-white rounded-xl shadow-lg p-6">
            <div class="flex items-start justify-between mb-4">
              <div>
                <h1 class="text-4xl font-bold text-gray-800 mb-2">{{ destination.name }}</h1>
                <p class="text-gray-600 flex items-center text-lg">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  {{ destination.location }}
                </p>
              </div>
              <div class="text-right">
                <p class="text-3xl font-bold text-blue-600">¥{{ destination.price.toLocaleString() }}</p>
                <p class="text-gray-500">{{ destination.priceUnit }}</p>
              </div>
            </div>
            
            <p class="text-gray-700 leading-relaxed">
              {{ destination.longDescription || destination.description }}
            </p>
          </div>

          <!-- 行程亮点 -->
          <div v-if="destination.highlights && destination.highlights.length > 0" class="bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <svg class="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
              </svg>
              行程亮点
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div
                v-for="(highlight, index) in destination.highlights"
                :key="index"
                class="flex items-center"
              >
                <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-700">{{ highlight }}</span>
              </div>
            </div>
          </div>

          <!-- 行程安排 -->
          <div v-if="destination.itinerary && destination.itinerary.length > 0" class="bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <svg class="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
              行程安排
            </h2>
            <div class="space-y-6">
              <div
                v-for="day in destination.itinerary"
                :key="day.day"
                class="border-l-4 border-blue-500 pl-4"
              >
                <div class="flex items-center mb-2">
                  <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                    第{{ day.day }}天
                  </span>
                  <h3 class="text-xl font-bold text-gray-800">{{ day.title }}</h3>
                </div>
                <p class="text-gray-600 mb-3">{{ day.description }}</p>
                <ul class="space-y-1">
                  <li
                    v-for="(activity, index) in day.activities"
                    :key="index"
                    class="text-gray-700 flex items-center"
                  >
                    <svg class="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                    </svg>
                    {{ activity }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 费用包含/不包含 -->
          <div v-if="destination.included || destination.excluded" class="bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">费用说明</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-if="destination.included && destination.included.length > 0">
                <h3 class="text-lg font-semibold text-green-600 mb-3 flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  费用包含
                </h3>
                <ul class="space-y-2">
                  <li
                    v-for="(item, index) in destination.included"
                    :key="index"
                    class="text-gray-700 flex items-start"
                  >
                    <svg class="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    {{ item }}
                  </li>
                </ul>
              </div>
              
              <div v-if="destination.excluded && destination.excluded.length > 0">
                <h3 class="text-lg font-semibold text-red-600 mb-3 flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                  </svg>
                  费用不包含
                </h3>
                <ul class="space-y-2">
                  <li
                    v-for="(item, index) in destination.excluded"
                    :key="index"
                    class="text-gray-700 flex items-start"
                  >
                    <svg class="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- 侧边栏 - 预订信息 -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-xl shadow-lg p-6 sticky top-8">
            <h3 class="text-xl font-bold text-gray-800 mb-4">预订信息</h3>
            
            <div class="space-y-4 mb-6">
              <div class="flex justify-between items-center py-3 border-b">
                <span class="text-gray-600">行程时长</span>
                <span class="font-semibold text-gray-800">{{ destination.duration || '待定' }}</span>
              </div>
              <div class="flex justify-between items-center py-3 border-b">
                <span class="text-gray-600">最佳时间</span>
                <span class="font-semibold text-gray-800">{{ destination.bestTime || '全年' }}</span>
              </div>
              <div class="flex justify-between items-center py-3 border-b">
                <span class="text-gray-600">起步价格</span>
                <span class="text-2xl font-bold text-blue-600">¥{{ destination.price.toLocaleString() }}</span>
              </div>
            </div>

            <button
              @click="handleBooking"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              立即预订
            </button>

            <div class="mt-6 p-4 bg-blue-50 rounded-lg">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                </svg>
                <div class="text-sm text-gray-600">
                  <p class="font-semibold text-gray-800 mb-1">咨询服务</p>
                  <p>如有疑问，请联系我们的旅游顾问</p>
                  <p class="mt-2 text-blue-600">电话: 400-123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 未找到目的地 -->
    <div v-else class="container mx-auto px-4 py-16 text-center">
      <svg class="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      <h2 class="text-2xl font-bold text-gray-800 mb-2">未找到该目的地</h2>
      <p class="text-gray-600 mb-6">抱歉，我们找不到您要查看的目的地信息</p>
      <button
        @click="$router.push('/')"
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
      >
        返回首页
      </button>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useDestinationsStore } from '@/store/destinations';
import { useBookingStore } from '@/store/booking';
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

const route = useRoute();
const router = useRouter();
const destinationsStore = useDestinationsStore();
const bookingStore = useBookingStore();

const currentImageIndex = ref(0);

const destination = computed(() => {
  const id = route.params.id as string;
  return destinationsStore.getDestinationById(id);
});

const currentImage = computed(() => {
  if (!destination.value) return '';
  if (destination.value.images && destination.value.images.length > 0) {
    return destination.value.images[currentImageIndex.value];
  }
  return destination.value.image;
});

const handleBooking = () => {
  if (destination.value) {
    bookingStore.updateBookingData({ destination: destination.value.id });
    router.push('/booking');
  }
};

onMounted(() => {
  // 滚动到顶部
  window.scrollTo(0, 0);
});
</script>
