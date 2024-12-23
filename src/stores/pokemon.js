import { getPokemon, getPokemons } from '@/services/pokemonService'
import { formatWord } from '@/utils'
import { defineStore } from 'pinia'

const FILTERED_FAVORITES = 'filteredFavorites'
const FILTERED_POKEMONS = 'filteredPokemons'
const FAVORITES_ROUTE = 'favorites'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemons: [],
    filteredPokemons: [],
    filteredFavorites: null,
    favorites: getInitialFavorites(),
    selectedPokemon: {},
    query: '',
  }),
  getters: {
    getPokemons() {
      return this.filteredPokemons || []
    },
    getFavorites() {
      this.filteredFavorites = this.filteredFavorites || Array.from(this.favorites.values())
      return this.filteredFavorites || []
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

      this.filteredFavorites = Array.from(this.favorites.values())
      saveLocalStorage(this.favorites)
    },
    filterPokemons({ query = '', route }) {
      const isFavorites = route === FAVORITES_ROUTE
      const selectedList = isFavorites ? FILTERED_FAVORITES : FILTERED_POKEMONS
      const selectedItems = isFavorites ? [...this.favorites.values()] : this.pokemons

      this[selectedList] = !query
        ? selectedItems
        : selectedItems.filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()))
    },
    isFavorite({ name }) {
      return this.favorites.has(name)
    },
    async setPokemons() {
      if (this.pokemons.length) return

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
