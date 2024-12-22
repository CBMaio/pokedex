<script setup>
import CloseIcon from '@/assets/img/close-icon.svg'

defineEmits(['close'])
defineProps({
  message: {
    type: String,
    deflaut: '',
    required: true,
  },
  type: {
    type: String,
    default: 'info',
    validator: (value) => {
      return ['info', 'success', 'warning', 'error'].includes(value)
    },
  },
})
</script>

<template>
  <div class="custom-alert" :class="type">
    <div class="alert-message">
      {{ message }}
    </div>

    <div class="close-icon" @click="$emit('close')">
      <CloseIcon />
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/components/customAlert.css';
</style>
