<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      @click.self="close"
    >
      <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all">
        <!-- 成功图标 -->
        <div class="text-center mb-6">
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-gray-800 mb-2">预订成功！</h2>
          <p class="text-gray-600">感谢您的预订，我们已收到您的订单</p>
        </div>

        <!-- 订单号 -->
        <div class="bg-blue-50 rounded-lg p-4 mb-6">
          <p class="text-sm text-gray-600 mb-1">订单号</p>
          <p class="text-lg font-semibold text-blue-600">{{ orderNumber }}</p>
        </div>

        <!-- 提示信息 -->
        <div class="bg-yellow-50 rounded-lg p-4 mb-6">
          <p class="text-sm text-gray-700">
            <svg class="w-5 h-5 inline mr-2 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            确认邮件已发送至您的邮箱，请注意查收
          </p>
        </div>

        <!-- 按钮 -->
        <div class="flex flex-col sm:flex-row gap-3">
          <button
            @click="goHome"
            class="flex-1 bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition"
          >
            返回首页
          </button>
          <button
            @click="close"
            class="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

interface Props {
  isOpen: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  close: [];
}>();

const router = useRouter();
const orderNumber = ref('');

// 生成随机订单号
const generateOrderNumber = () => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);
  return `TW${timestamp}${random}`;
};

watch(() => props.isOpen, (value) => {
  if (value) {
    orderNumber.value = generateOrderNumber();
  }
});

const close = () => {
  emit('close');
};

const goHome = () => {
  emit('close');
  router.push('/');
};
</script>

