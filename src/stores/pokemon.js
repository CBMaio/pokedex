import { getPokemon, getPokemones } from '@/services/pokemonService'
import { formatWord } from '@/utils'
import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemones: [],
    filteredPokemones: [],
    favorites: new Map(),
    selectedPokemon: {},
  }),
  getters: {
    getPokemones() {
      return this.filteredPokemones || []
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
  },
  actions: {
    handleFavorite({ pokemon: { name, ...data } }) {
      this.favorites.has(name)
        ? this.favorites.delete(name)
        : this.favorites.set(name, { name, ...data })
    },
    filterPokemones({ query = '' }) {
      this.filteredPokemones = !query
        ? this.pokemones
        : this.pokemones.filter(({ name }) => name.includes(query.toLowerCase()))
    },
    async setPokemones() {
      const response = await getPokemones()
      this.pokemones = response
      this.filteredPokemones = response
    },
    async setSelectedPokemon({ name: selectedName }) {
      const response = await getPokemon({ name: selectedName })
      const { name, weight, height, types, sprites } = response
      const image = sprites.other['official-artwork'].front_default

      this.selectedPokemon = { name, weight, height, types, image }
    },
  },
})
