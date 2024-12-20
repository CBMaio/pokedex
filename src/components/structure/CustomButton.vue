<script setup>
defineEmits(['action'])
</script>

<template>
  <button class="button" @click="$emit('action')">
    <slot />
  </button>
</template>

<style lang="css" scoped>
.button {
  cursor: pointer;
  border-radius: 60px;
  padding: 11px 20px;
  background-color: var(--primary);
  color: var(--white);
  border: none;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
  text-align: center;
  border: none;
}
</style>
