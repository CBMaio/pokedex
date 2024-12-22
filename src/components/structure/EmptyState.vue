<script setup lang="ts">
import { useRouter } from 'vue-router'
import { usePokemonStore } from '@/stores/pokemon'
import CustomButton from './CustomButton.vue'

const router = useRouter()
const pokemonStore = usePokemonStore()

const goToMainScreen = function () {
  pokemonStore.filterPokemons({ query: '' })
  pokemonStore.query = ''
  router.push({ name: 'list' })
}
</script>

<template>
  <div class="container">
    <h3 class="title black-letter font-bold">Uh-oh!</h3>
    <p class="description gray-letter">You look lost on your journey!</p>

    <CustomButton @action="goToMainScreen"> Go back home </CustomButton>
  </div>
</template>

<style scoped>
@import '@/assets/styles/components/emptyState.css';
</style>
