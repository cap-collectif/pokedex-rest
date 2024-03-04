import { useQueries, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { getPokemonByName } from './Pokemon'
import PokemonCard from '@/components/PokemonCard'
import { PokemonType } from '@/types/Pokemon'

export const Pokemons = () => {
  const { data: list, isPending } = useQuery({
    queryKey: ['pokemonsData'],
    queryFn: () => axios('https://pokeapi.co/api/v2/pokemon?limit=151').then(response => response.data.results),
  })

  const pokemonsList = useQueries<PokemonType[], PokemonType[]>({
    queries:
      list?.map((pokemon: { name: string }) => {
        return {
          queryKey: ['pokemon', pokemon.name],
          queryFn: () => getPokemonByName(pokemon.name),
          enabled: !!list && !isPending,
        }
      }) ?? [],
  })

  const pokemons: PokemonType[] = pokemonsList?.map(pokemon => pokemon.data)

  if (isPending) return 'Loading'

  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-center gap-4">
        {pokemons.map((pokemon: PokemonType) => {
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
