<script setup>
defineEmits(['action'])
defineProps({
  unselected: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button class="button" :class="{ unselected: unselected }" @click="$emit('action')">
    <slot />
  </button>
</template>

<style scoped>
@import '@/assets/styles/components/customButton.css';
</style>
