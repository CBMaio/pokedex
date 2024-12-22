import axios from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2'

export async function getPokemons(requiredPage) {
  const url = requiredPage || `${BASE_URL}/pokemon`
  const { data } = await axios.get(url)
  return data
}

export async function getPokemon({ name }) {
  const response = await axios.get(`${BASE_URL}/pokemon/${name}`)
  return response.data
}
