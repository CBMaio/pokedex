<script setup>
import { onMounted, ref } from 'vue'
import { usePokemonStore } from '@/stores/pokemon'
import PokemonItem from '@/components/pokemon/PokemonItem.vue'
import SelectedPokemonModal from '../modals/SelectedPokemonModal.vue'

const pokemonStore = usePokemonStore()
const isOpenModal = ref(false)

onMounted(async () => {
  await pokemonStore.setPokemones()
})

const openPokemonModal = async function (name) {
  await pokemonStore.setSelectedPokemon({ name })
  isOpenModal.value = true
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

  <SelectedPokemonModal v-if="isOpenModal" @close="isOpenModal = false" />
</template>

<style></style>
