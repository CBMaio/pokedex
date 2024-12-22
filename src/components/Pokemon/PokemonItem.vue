<script setup>
import { usePokemonStore } from '@/stores/pokemon'
import { formatWord } from '@/utils'
import FavoriteButton from '../structure/FavoriteButton.vue'
import { computed } from 'vue'

defineEmits(['viewDetails'])
const props = defineProps({
  pokemon: {
    type: Object,
    default: () => ({}),
    required: true,
  },
})

const pokemonStore = usePokemonStore()

const isFavorite = computed(() => pokemonStore.getFavorites.has(props.pokemon.name))

const onHandleFavorite = function () {
  pokemonStore.handleFavorite({ pokemon: props.pokemon })
}
</script>

<template>
  <div class="item">
    <div class="name black-letter" @click="$emit('viewDetails', pokemon.name)">
      {{ formatWord(pokemon.name) }}
    </div>
    <FavoriteButton :is-favorite="isFavorite" @handle-favorite="onHandleFavorite" />
  </div>
</template>

<style scoped>
@import '@/assets/styles/pokemon/pokemonItem.css';
</style>
