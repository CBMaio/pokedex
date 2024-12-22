<script setup>
import { usePokemonStore } from '@/stores/pokemon'
import SearchIcon from '@/assets/img/search-icon.svg'

const pokemonStore = usePokemonStore()

const handleSearch = function (e) {
  pokemonStore.filterPokemons({ query: e.target.value })
}
</script>

<template>
  <div class="search-container">
    <div class="search-field">
      <SearchIcon class="search-icon" />
      <input
        v-model="pokemonStore.query"
        type="text"
        :placeholder="$t('search')"
        class="search-element black-letter"
        @input="handleSearch"
      />
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/components/searchField.css';
</style>
