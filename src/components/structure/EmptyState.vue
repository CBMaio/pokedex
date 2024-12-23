<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { usePokemonStore } from '@/stores/pokemon'
import CustomButton from './CustomButton.vue'

const router = useRouter()
const route = useRoute()
const pokemonStore = usePokemonStore()

const goToMainScreen = function () {
  pokemonStore.filterPokemons({ query: '', route: route.name })
  pokemonStore.query = ''
  router.push({ name: 'list' })
}
</script>

<template>
  <div class="container">
    <h3 class="title black-letter font-bold">{{ $t('emptyStateTitle') }}</h3>
    <p class="description gray-letter">{{ $t('lookLostMessage') }}</p>

    <CustomButton @action="goToMainScreen"> {{ $t('goBackHome') }} </CustomButton>
  </div>
</template>

<style scoped>
@import '@/assets/styles/components/emptyState.css';
</style>
