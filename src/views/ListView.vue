<script setup>
import { useRouter } from 'vue-router'
import EmptyState from '@/components/structure/EmptyState.vue'
import SearchField from '@/components/structure/SearchField.vue'

const router = useRouter()

const goToMainScreen = function () {
  router.push({ name: 'welcome' })
}
</script>

<template>
  <div class="view-container">
    <SearchField />
    <EmptyState @go-back="goToMainScreen" />
  </div>
</template>

<style scoped>
.view-container {
  padding: 30px;
  max-width: 570px;
  height: 100%;
  margin: auto;
}
</style>
