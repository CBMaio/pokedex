<script setup>
import { onMounted } from 'vue'
import { usePokemonStore } from '@/stores/pokemon'
import PokemonItem from './PokemonItem.vue'

const pokemonStore = usePokemonStore()

onMounted(async () => {
  await pokemonStore.setPokemones()
})

const openPokemonModal = function (name) {
  pokemonStore.setSelectedPokemon({ name })
}
</script>

<template>
  <div class="list-container">
    <PokemonItem
      v-for="pokemon in pokemonStore.getPokemones"
      :key="pokemon.id"
      :pokemon="pokemon"
      @view-details="openPokemonModal"
    />
  </div>
</template>

<style></style>
