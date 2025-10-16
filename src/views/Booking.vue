<template>
  <div class="min-h-screen bg-blue-50">
    <Header />

    <!-- 页面标题 -->
    <section class="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-center mb-4">预订您的梦想之旅</h1>
        <p class="text-xl text-center text-blue-100">填写信息，开启美好旅程</p>
      </div>
    </section>

    <!-- 预订内容 -->
    <section class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- 预订表单 -->
        <div class="lg:col-span-2">
          <BookingForm @submit="handleSubmitSuccess" />
        </div>

        <!-- 订单摘要 -->
        <div class="lg:col-span-1">
          <OrderSummary />
        </div>
      </div>
    </section>

    <Footer />

    <!-- 成功模态框 -->
    <SuccessModal :is-open="showSuccessModal" @close="showSuccessModal = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import BookingForm from '@/components/booking/BookingForm.vue';
import OrderSummary from '@/components/booking/OrderSummary.vue';
import SuccessModal from '@/components/booking/SuccessModal.vue';

const showSuccessModal = ref(false);

const handleSubmitSuccess = () => {
  showSuccessModal.value = true;
};
</script>

