<script setup>
import { ref } from 'vue'

defineEmits(['action'])
defineProps({
  unselected: {
    type: Boolean,
    default: false,
  },
})

const isPressed = ref(false)
</script>

<template>
  <button
    class="button"
    :class="{ unselected: unselected, pressed: isPressed && !unselected }"
    @mousedown="isPressed = true"
    @mouseup="isPressed = false"
    @mouseleave="isPressed = false"
    @click="$emit('action')"
  >
    <slot />
  </button>
</template>

<style scoped>
@import '@/assets/styles/components/customButton.css';
</style>
