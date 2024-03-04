import { useQueries, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Pokemon, { getPokemonByName } from './Pokemon'
import PokemonCard from '@/components/PokemonCard'

export const Pokemons = () => {
  const { data: list, isPending } = useQuery({
    queryKey: ['pokemonsData'],
    queryFn: () => axios('https://pokeapi.co/api/v2/pokemon?limit=151').then(response => response.data.results),
  })

  const pokemonsList = useQueries<Pokemon[], Pokemon[]>({
    queries:
      list?.map((pokemon: Pokemon) => {
        return {
          queryKey: ['pokemon', pokemon.name],
          queryFn: () => getPokemonByName(pokemon.name),
          enabled: !!list && !isPending,
        }
      }) ?? [],
  })

  const pokemons = pokemonsList?.map(pokemon => pokemon.data)

  if (isPending) return 'Loading'

  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-center gap-4">
        {pokemons.map((pokemon: Pokemon) => {
          if (!pokemon) return null

          return (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              sprite={pokemon?.sprites.other.dream_world.front_default}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Pokemons
