<script setup>
import { useRouter } from 'vue-router'
import EmptyState from '@/components/structure/EmptyState.vue'
import { usePokemonStore } from '@/stores/pokemon'
import { computed } from 'vue'
import BottomNavbar from '@/components/structure/BottomNavbar.vue'
import PokemonList from '@/components/pokemon/PokemonList.vue'

const pokemonStore = usePokemonStore()
const router = useRouter()

const isEmptyState = computed(() => !pokemonStore.getFavorites.size)
const favoritesAsArray = computed(() => Array.from(pokemonStore.getFavorites.values()))

const goToMainScreen = function () {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="view-container">
    <div class="list-body">
      <div class="list-content">
        <EmptyState v-if="isEmptyState" @go-back="goToMainScreen" />
        <PokemonList :pokemon-list="favoritesAsArray" />
      </div>
    </div>

    <BottomNavbar />
  </div>
</template>

<style scoped>
@import '@/assets/styles/views/listView.css';
</style>
