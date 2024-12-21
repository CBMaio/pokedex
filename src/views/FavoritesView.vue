<script setup>
import { useRouter } from 'vue-router'
import EmptyState from '@/components/structure/EmptyState.vue'
import { usePokemonStore } from '@/stores/pokemon'
import { computed } from 'vue'
import BottomNavbar from '@/components/structure/BottomNavbar.vue'

const pokemonStore = usePokemonStore()
const router = useRouter()

const isEmptyState = computed(() => !pokemonStore.favorites.length)

const goToMainScreen = function () {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="view-container">
    <div class="list-body">
      <EmptyState v-if="isEmptyState" @go-back="goToMainScreen" />
    </div>

    <BottomNavbar v-if="!isEmptyState" />
  </div>
</template>

<style scoped>
@import '@/assets/styles/views/listView.css';
</style>
