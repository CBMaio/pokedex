<script setup lang="ts">
import CustomButton from './CustomButton.vue'

defineEmits(['goBack'])
</script>

<template>
  <div class="container">
    <h3 class="title black-letter font-bold">Uh-oh!</h3>
    <p class="description gray-letter">You look lost on your journey!</p>

    <CustomButton @action="$emit('goBack')"> Go back home </CustomButton>
  </div>
</template>

<style scoped>
@import '@/assets/styles/components/emptyState.css';
</style>
