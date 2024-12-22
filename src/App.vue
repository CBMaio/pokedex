<script setup>
import { RouterView } from 'vue-router'
import { usePokemonStore } from './stores/pokemon'
import LoaderAnimation from './components/structure/LoaderAnimation.vue'

const pokemonStore = usePokemonStore()
</script>

<template>
  <div class="global-container">
    <router-view name="header" />
    <LoaderAnimation v-if="pokemonStore.getLoading" />
    <main class="main-body" v-else>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.global-container {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .main-body {
    flex: 1;
  }
}
</style>
