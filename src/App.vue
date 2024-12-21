<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="global-container">
    <router-view name="header" />
    <main class="main-body">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.global-container {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .main-body {
    flex: 1;
  }
}
</style>
