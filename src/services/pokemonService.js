import axios from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2'

export async function getPokemones() {
  const { data } = await axios.get(`${BASE_URL}/pokemon`)
  return data.results
}

export async function getPokemon({ name }) {
  const response = await axios.get(`${BASE_URL}/pokemon/${name}`)
  return response.data
}
