<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { usePokemonStore } from '@/stores/pokemon'
import { useAlertStore } from '@/stores/alert'
import CloseIcon from '@/assets/img/close-icon.svg'
import { formatWord } from '@/utils'
import CustomButton from '../structure/CustomButton.vue'
import FavoriteButton from '../structure/FavoriteButton.vue'

defineEmits(['close'])

const pokemonStore = usePokemonStore()
const alertStore = useAlertStore()
const { t } = useI18n()

const pokemon = computed(() => pokemonStore.selectedPokemon)
const isFavorite = computed(() => pokemonStore.isFavorite({ name: pokemon.value?.name }))
const pokemonProperties = computed(() => {
  const { name, height, weight } = pokemon.value || {}
  const types = pokemonStore.getSelectedPokemonTypes.join(', ')

  return Object.entries({ name, height, weight, types })
})

const share = function () {
  const formattedProperties = pokemonProperties.value
    .map(([key, value]) => `${formatWord(key)}: ${formatWord(value)}`)
    .join(', ')
  navigator.clipboard.writeText(`Check out this pokemon: ${formattedProperties}`)
  alertStore.addAlert({ message: t('copiedToClipboard'), type: 'success' })
}
const onHandleFavorite = function () {
  pokemonStore.handleFavorite({ pokemon: pokemon.value })
}
</script>

<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="image-container">
        <CloseIcon class="close-icon" @click="$emit('close')" />
        <img :src="pokemon.image" :alt="pokemon.name" class="pokemon-image" />
      </div>
      <div class="body">
        <div v-for="[key, value] in pokemonProperties" :key="key" class="property-row">
          <span class="property-name font-bold"> {{ $t(key) }}: </span>
          <span class="property-value">{{ formatWord(value) }}</span>
        </div>
      </div>
      <footer class="footer">
        <CustomButton @action="share"> {{ $t('shareToFriends') }} </CustomButton>
        <FavoriteButton :is-favorite="isFavorite" @handle-favorite="onHandleFavorite" />
      </footer>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/components/selectedPokemonModal.css';
</style>
