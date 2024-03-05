import { EvolutionChain, Evolution, ChainLink, Pokemon } from '@/types/pokemon'
import { getPokemonByName, getPokemonSpecies } from '@/utils/apiHandler'
import { capitalizeFirstLetter } from '@/utils/stringFormat'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useEvolutionChain = (name: string) => {
  const query = useQuery({
    queryKey: ['evolutionChain'],
    queryFn: async () => {
      try {
        const { evolution_chain } = await getPokemonSpecies(name)
        const { data: chain } = await axios.get(evolution_chain.url)
        const evolutions = await getEvolutions(chain)
        return evolutions
      } catch (error) {
        return []
      }
    },
  })

  return query
}

const getEvolutions = async (evolutionChain: EvolutionChain): Promise<Evolution[]> => {
  let evolutions: Evolution[] = []

  if (!evolutionChain.chain.evolves_to.length) return []

  const traverseChain = async (chain: ChainLink) => {
    const { species, evolves_to } = chain
    const pokemon: Pokemon = await getPokemonByName(species.name)
    const pokemonImg = pokemon.sprites.front_default

    evolutions.push({ name: capitalizeFirstLetter(species.name), img: pokemonImg })

    for (const evolution of evolves_to) {
      await traverseChain(evolution)
    }
  }

  await traverseChain(evolutionChain.chain)
  return evolutions
}
