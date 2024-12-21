<script setup>
import { usePokemonStore } from '@/stores/pokemon'
import CloseIcon from '@/assets/img/close-icon.svg'
import { formatWord } from '@/utils'
import CustomButton from '../structure/CustomButton.vue'
import FavoriteButton from '../structure/FavoriteButton.vue'

defineEmits(['close'])

const pokemonStore = usePokemonStore()
const pokemon = pokemonStore.selectedPokemon

const share = function () {}
</script>

<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="image-container">
        <CloseIcon class="close-icon" @click="$emit('close')" />
        <img :src="pokemon.image" :alt="pokemon.name" class="pokemon-image" />
      </div>
      <div class="body">
        <div
          v-for="[key, value] in pokemonStore.getPokemonProperties"
          :key="key"
          class="property-row"
        >
          <span class="property-name font-bold"> {{ formatWord(key) }}: </span>
          <span class="property-value">{{ formatWord(value) }}</span>
        </div>
      </div>
      <footer class="footer">
        <CustomButton @action="share"> Share to my friends </CustomButton>
        <FavoriteButton />
      </footer>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/components/selectedPokemonModal.css';
</style>
