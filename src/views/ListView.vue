<script setup>
import { useRouter } from 'vue-router'
import EmptyState from '@/components/structure/EmptyState.vue'
import { usePokemonStore } from '@/stores/pokemon'
import { computed } from 'vue'
import BottomNavbar from '@/components/structure/BottomNavbar.vue'
import PokemonList from '@/components/pokemon/PokemonList.vue'

const router = useRouter()
const pokemonStore = usePokemonStore()

const isEmptyState = computed(() => !pokemonStore.pokemones?.length)

const goToMainScreen = function () {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="view-container">
    <div class="list-body">
      <div class="list-content">
        <EmptyState v-if="isEmptyState" @go-back="goToMainScreen" />
        <PokemonList />
      </div>
    </div>

    <BottomNavbar v-if="!isEmptyState" />
  </div>
</template>

<style scoped>
@import '@/assets/styles/views/listView.css';
</style>
