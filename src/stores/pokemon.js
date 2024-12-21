import { getPokemon, getPokemones } from '@/services/pokemonService'
import { formatWord } from '@/utils'
import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemones: [],
    favorites: [],
    selectedPokemon: {},
  }),
  getters: {
    getPokemones() {
      return this.pokemones
    },
    getFavorites() {
      return this.favorites
    },
    getSelectedPokemon() {
      return this.selectedPokemon
    },
    getSelectedPokemonTypes() {
      const { types } = this.selectedPokemon || {}
      if (!types) return []

      return types.map(({ type }) => formatWord(type.name))
    },
    getPokemonProperties() {
      const data = { ...this.selectedPokemon, types: this.getSelectedPokemonTypes.join(', ') }
      delete data.image
      return Object.entries(data)
    },
  },
  actions: {
    addFavorite({ pokemon }) {
      this.favorites.push(pokemon)
    },
    removeFavorite({ id }) {
      this.favorites.filter(({ id: pokemonId }) => pokemonId !== id)
    },
    async setPokemones() {
      const response = await getPokemones()
      this.pokemones = response
    },
    async setSelectedPokemon({ name: selectedName }) {
      const response = await getPokemon({ name: selectedName })
      const { name, weight, height, types, sprites } = response
      const image = sprites.other['official-artwork'].front_default

      this.selectedPokemon = { name, weight, height, types, image }
    },
  },
})
