<script setup>
import { ref, watch } from 'vue'
import { usePokemonStore } from '@/stores/pokemon'
import PokemonItem from '@/components/pokemon/PokemonItem.vue'
import SelectedPokemonModal from '@/components/modals/SelectedPokemonModal.vue'

const pokemonStore = usePokemonStore()
const isOpenModal = ref(false)
const scrollComponent = ref(null)
const data = ref([])
const offset = ref(0)
const amount = 20

const props = defineProps({
  pokemonList: {
    type: Array,
    required: true,
  },
})

const loadMorePosts = function () {
  if (offset.value >= props.pokemonList.length) return
  const moreData = props.pokemonList.slice(offset.value, offset.value + amount)
  data.value.push(...moreData)
  offset.value += amount
}

const handleScroll = function () {
  let element = scrollComponent.value

  const bottomOfWindow = element.scrollTop + element.clientHeight >= element.scrollHeight
  if (bottomOfWindow) {
    loadMorePosts()
  }
}

const openPokemonModal = async function (name) {
  await pokemonStore.setSelectedPokemon({ name })
  isOpenModal.value = true
}

watch(
  () => props.pokemonList,
  (newVal) => {
    data.value = newVal.slice(offset.value, offset.value + amount)
  },
  { immediate: true },
)
</script>

<template>
  <div class="list-container" ref="scrollComponent" @scroll="handleScroll">
    <PokemonItem
      v-for="pokemon in data"
      :key="pokemon.name"
      :pokemon="pokemon"
      @view-details="openPokemonModal"
    />
  </div>

  <SelectedPokemonModal v-if="isOpenModal" @close="isOpenModal = false" />
</template>

<style scoped>
.list-container {
  max-height: calc(100vh - 210px);
  overflow: auto;
}
</style>
