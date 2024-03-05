import axios from 'axios'

export const getPokemonByName = async (name: string) => {
  const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return data
}

export const getPokemonSpecies = async (name: string) => {
  const { data } = await axios(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
  return data
}
