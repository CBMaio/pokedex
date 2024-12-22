import { getPokemon, getPokemons } from '@/services/pokemonService'
import { formatWord } from '@/utils'
import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemons: [],
    filteredPokemons: [],
    favorites: getInitialFavorites(),
    selectedPokemon: {},
    query: '',
    isLoading: false,
  }),
  getters: {
    getPokemons() {
      return this.filteredPokemons || []
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
    getLoading() {
      return this.isLoading
    },
  },
  actions: {
    handleFavorite({ pokemon: { name, ...data } }) {
      this.favorites.has(name)
        ? this.favorites.delete(name)
        : this.favorites.set(name, { name, ...data })

      saveLocalStorage(this.favorites)
    },
    filterPokemons({ query = '' }) {
      this.filteredPokemons = !query
        ? this.pokemons
        : this.pokemons.filter(({ name }) => name.includes(query.toLowerCase()))
    },
    async setPokemons() {
      if (this.pokemons.length) return

      this.isLoading = true
      let nextPage = null
      const allPokemons = []

      const startTime = Date.now()

      do {
        const { results, next } = await getPokemons(nextPage)
        allPokemons.push(...results)
        nextPage = next
      } while (nextPage)

      await this.handleLoadingTime(startTime)

      this.pokemons = allPokemons
      this.filteredPokemons = this.pokemons
      this.isLoading = false
    },

    async handleLoadingTime(startTime) {
      const elapsedTime = Date.now() - startTime
      const remainingTime = 4750 - elapsedTime

      if (remainingTime > 0) {
        await delay(remainingTime)
      }
    },
    async setSelectedPokemon({ name: selectedName }) {
      const response = await getPokemon({ name: selectedName })
      const { name, weight, height, types, sprites } = response
      const image = sprites.other['official-artwork'].front_default

      this.selectedPokemon = { name, weight, height, types, image }
    },
  },
})

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const saveLocalStorage = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify([...favorites]))
}
const getInitialFavorites = () => {
  const favorites = localStorage.getItem('favorites')
  return new Map(JSON.parse(favorites) || [])
}
