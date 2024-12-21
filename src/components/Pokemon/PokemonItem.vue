<script setup>
import { formatWord } from '@/utils'
import FavoriteButton from '../structure/FavoriteButton.vue'

defineEmits(['viewDetails'])
defineProps({
  pokemon: {
    type: Object,
    default: () => ({}),
    required: true,
  },
})
</script>

<template>
  <div class="item" @click="$emit('viewDetails', pokemon.name)">
    <span class="name black-letter"> {{ formatWord(pokemon.name) }} </span>
    <FavoriteButton />
  </div>
</template>

<style scoped>
@import '@/assets/styles/pokemon/pokemonItem.css';
</style>
