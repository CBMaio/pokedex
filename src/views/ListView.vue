<script setup>
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { usePokemonStore } from '@/stores/pokemon'
import { useAlertStore } from '@/stores/alert'
import EmptyState from '@/components/structure/EmptyState.vue'
import BottomNavbar from '@/components/structure/BottomNavbar.vue'
import PokemonList from '@/components/pokemon/PokemonList.vue'
import LoaderAnimation from '@/components/structure/LoaderAnimation.vue'

const { t } = useI18n()
const pokemonStore = usePokemonStore()
const alertStore = useAlertStore()

const isLoading = ref(false)
const isEmptyState = computed(() => !pokemonStore.getPokemons.length)

onMounted(async () => {
  if (pokemonStore.getPokemons.length) return

  try {
    isLoading.value = true
    await pokemonStore.setPokemons()
  } catch (error) {
    console.error('Error setting pokemons', error)
    alertStore.addAlert({ type: 'error', message: t('errorSettingPokemons') })
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="view-container">
    <LoaderAnimation v-if="isLoading" />
    <div v-else class="list-body">
      <div class="list-content">
        <EmptyState v-if="isEmptyState" />
        <PokemonList :pokemon-list="pokemonStore.getPokemons" />
      </div>
    </div>

    <BottomNavbar v-if="!isEmptyState" />
  </div>
</template>

<style scoped>
@import '@/assets/styles/views/listView.css';
</style>
