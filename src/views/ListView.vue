<script setup>
import { computed, onMounted, ref } from 'vue'
import EmptyState from '@/components/structure/EmptyState.vue'
import { usePokemonStore } from '@/stores/pokemon'
import BottomNavbar from '@/components/structure/BottomNavbar.vue'
import PokemonList from '@/components/pokemon/PokemonList.vue'
import LoaderAnimation from '@/components/structure/LoaderAnimation.vue'

const pokemonStore = usePokemonStore()
const isLoading = ref(false)
const isEmptyState = computed(() => !pokemonStore.getPokemons.length)

onMounted(async () => {
  if (pokemonStore.getPokemons.length) return

  isLoading.value = true
  await pokemonStore.setPokemons()
  setTimeout(() => {
    isLoading.value = false
  }, 4750)
})
</script>

<template>
  <div class="view-container">
    <LoaderAnimation v-if="isLoading" />
    <div class="list-body">
      <div class="list-content">
        <EmptyState v-if="isEmptyState" />
        <PokemonList :pokemon-list="pokemonStore.getPokemons" />
      </div>
    </div>

    <BottomNavbar v-if="!isEmptyState" />
  </div>
</template>

<style scoped>
@import '@/assets/styles/views/listView.css';
</style>
