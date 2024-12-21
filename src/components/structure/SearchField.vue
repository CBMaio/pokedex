<script setup>
import SearchIcon from '@/assets/img/search-icon.svg'
</script>

<template>
  <div class="search-container">
    <div class="search-field">
      <SearchIcon class="search-icon" />
      <input type="text" placeholder="Search" class="search-element black-letter" />
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/components/searchField.css';
</style>
