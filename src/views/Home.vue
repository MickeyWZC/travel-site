<template>
  <div class="min-h-screen">
    <Header />
    <HeroSection />
    <DestinationGrid />
    <FeaturesSection />
    <Testimonials />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import HeroSection from '@/components/home/HeroSection.vue';
import DestinationGrid from '@/components/home/DestinationGrid.vue';
import FeaturesSection from '@/components/home/FeaturesSection.vue';
import Testimonials from '@/components/home/Testimonials.vue';
</script>

