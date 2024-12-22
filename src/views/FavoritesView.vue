<script setup>
import EmptyState from '@/components/structure/EmptyState.vue'
import { usePokemonStore } from '@/stores/pokemon'
import { computed } from 'vue'
import BottomNavbar from '@/components/structure/BottomNavbar.vue'
import PokemonList from '@/components/pokemon/PokemonList.vue'

const pokemonStore = usePokemonStore()

const isEmptyState = computed(() => !pokemonStore.getFavorites.size)
const favoritesAsArray = computed(() => Array.from(pokemonStore.getFavorites.values()))
</script>

<template>
  <div class="view-container">
    <div class="list-body">
      <div class="list-content">
        <EmptyState v-if="isEmptyState" />
        <PokemonList :pokemon-list="favoritesAsArray" />
      </div>
    </div>

    <BottomNavbar v-if="!isEmptyState" />
  </div>
</template>

<style scoped>
@import '@/assets/styles/views/listView.css';
</style>
