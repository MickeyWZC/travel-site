<template>
  <button
    :class="[
      'px-6 py-2 rounded-full font-semibold transition transform',
      variantClasses,
      disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 hover:shadow-lg'
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  disabled: false,
});

defineEmits<{
  click: [event: MouseEvent];
}>();

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-gradient-to-r from-blue-500 to-green-500 text-white';
    case 'secondary':
      return 'bg-gray-200 text-gray-800 hover:bg-gray-300';
    case 'outline':
      return 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50';
    default:
      return 'bg-gradient-to-r from-blue-500 to-green-500 text-white';
  }
});
</script>

