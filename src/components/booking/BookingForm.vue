<template>
  <div class="bg-white rounded-xl shadow-lg p-8">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">预订信息</h2>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- 个人信息 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-4">个人信息</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            v-model="formData.name"
            label="姓名"
            placeholder="请输入您的姓名"
            required
            :error="errors.name"
          />
          <FormInput
            v-model="formData.email"
            label="邮箱"
            type="email"
            placeholder="example@email.com"
            required
            :error="errors.email"
          />
          <FormInput
            v-model="formData.phone"
            label="电话号码"
            type="tel"
            placeholder="+86 138 0000 0000"
            required
            :error="errors.phone"
          />
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              国家/地区 <span class="text-red-500">*</span>
            </label>
            <select
              v-model="formData.country"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">请选择</option>
              <option v-for="country in countries" :key="country" :value="country">
                {{ country }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <!-- 行程信息 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-4">行程信息</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              目的地 <span class="text-red-500">*</span>
            </label>
            <select
              v-model="formData.destination"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">请选择目的地</option>
              <option v-for="dest in destinations" :key="dest.id" :value="dest.id">
                {{ dest.name }} - ¥{{ dest.price.toLocaleString() }}{{ dest.priceUnit }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              房间类型 <span class="text-red-500">*</span>
            </label>
            <select
              v-model="formData.roomType"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">请选择</option>
              <option v-for="room in roomTypes" :key="room.value" :value="room.value">
                {{ room.label }}
              </option>
            </select>
          </div>

          <FormInput
            v-model="formData.departureDate"
            label="出发日期"
            type="date"
            required
            :error="errors.departureDate"
          />
          <FormInput
            v-model="formData.returnDate"
            label="返回日期"
            type="date"
            required
            :error="errors.returnDate"
          />

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              成人数量 <span class="text-red-500">*</span>
            </label>
            <input
              v-model.number="formData.adults"
              type="number"
              min="1"
              max="10"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              儿童数量
            </label>
            <input
              v-model.number="formData.children"
              type="number"
              min="0"
              max="10"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <!-- 特殊需求 -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          特殊需求
        </label>
        <textarea
          v-model="formData.specialRequests"
          rows="4"
          placeholder="请告诉我们您的特殊需求或要求..."
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></textarea>
      </div>

      <!-- 提交按钮 -->
      <div class="flex justify-end">
        <button
          type="submit"
          :disabled="isSubmitting"
          class="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isSubmitting ? '提交中...' : '确认预订' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useBookingStore } from '@/store/booking';
import { useDestinationsStore } from '@/store/destinations';
import { validateEmail, validatePhone, validateDate, validateDateRange } from '@/utils/validation';
import { ROOM_TYPES, COUNTRIES } from '@/utils/constants';
import FormInput from './FormInput.vue';

const emit = defineEmits<{
  submit: [];
}>();

const bookingStore = useBookingStore();
const destinationsStore = useDestinationsStore();

const formData = computed(() => bookingStore.bookingData);
const destinations = computed(() => destinationsStore.destinations);
const roomTypes = ROOM_TYPES;
const countries = COUNTRIES;

const errors = ref<Record<string, string>>({});
const isSubmitting = ref(false);

// 监听表单数据变化，实时验证
watch(() => formData.value.email, (value) => {
  if (value && !validateEmail(value)) {
    errors.value.email = '请输入有效的邮箱地址';
  } else {
    delete errors.value.email;
  }
});

watch(() => formData.value.phone, (value) => {
  if (value && !validatePhone(value)) {
    errors.value.phone = '请输入有效的电话号码';
  } else {
    delete errors.value.phone;
  }
});

watch(() => formData.value.departureDate, (value) => {
  if (value && !validateDate(value)) {
    errors.value.departureDate = '出发日期不能早于今天';
  } else {
    delete errors.value.departureDate;
  }
});

watch(() => [formData.value.departureDate, formData.value.returnDate], ([departure, returnDate]) => {
  if (departure && returnDate && !validateDateRange(departure, returnDate)) {
    errors.value.returnDate = '返回日期必须晚于出发日期';
  } else {
    delete errors.value.returnDate;
  }
});

const handleSubmit = async () => {
  // 验证所有字段
  const newErrors: Record<string, string> = {};

  if (!formData.value.name.trim()) {
    newErrors.name = '请输入姓名';
  }
  if (!validateEmail(formData.value.email)) {
    newErrors.email = '请输入有效的邮箱地址';
  }
  if (!validatePhone(formData.value.phone)) {
    newErrors.phone = '请输入有效的电话号码';
  }
  if (!validateDate(formData.value.departureDate)) {
    newErrors.departureDate = '出发日期不能早于今天';
  }
  if (!validateDateRange(formData.value.departureDate, formData.value.returnDate)) {
    newErrors.returnDate = '返回日期必须晚于出发日期';
  }

  errors.value = newErrors;

  if (Object.keys(newErrors).length === 0) {
    isSubmitting.value = true;
    // 模拟提交
    await new Promise(resolve => setTimeout(resolve, 1500));
    isSubmitting.value = false;
    emit('submit');
  }
};
</script>

