import { getPokemon, getPokemones } from '@/services/pokemonService'
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
    getSelectedPokemonTypes() {
      const { types } = this.selectedPokemon || {}
      if (!types) return []

      return types.map(({ type }) => type.name)
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
      const { name, weight, height, types } = response

      this.selectedPokemon = { name, weight, height, types }
    },
  },
})
