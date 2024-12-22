<script setup>
import { ref } from 'vue'
import { usePokemonStore } from '@/stores/pokemon'
import PokemonItem from '@/components/pokemon/PokemonItem.vue'
import SelectedPokemonModal from '@/components/modals/SelectedPokemonModal.vue'

const pokemonStore = usePokemonStore()
const isOpenModal = ref(false)

defineProps({
  pokemonList: {
    type: Array,
    required: true,
  },
})

const openPokemonModal = async function (name) {
  await pokemonStore.setSelectedPokemon({ name })
  isOpenModal.value = true
}
</script>

<template>
  <div class="list-container">
    <PokemonItem
      v-for="pokemon in pokemonList"
      :key="pokemon.name"
      :pokemon="pokemon"
      @view-details="openPokemonModal"
    />
  </div>

  <SelectedPokemonModal v-if="isOpenModal" @close="isOpenModal = false" />
</template>

<style></style>
