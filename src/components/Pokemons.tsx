/* eslint-disable @next/next/no-img-element */
import { useQueries, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'next/link'
import Pokemon, { getPokemonByName } from './Pokemon'

// TODO : Add a bit of styling
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

  // To help
  console.log(pokemons)

  return (
    <div className="p-4">
      <h1 className="mb-5">Pokemons :</h1>
      <div className="grid grid-cols-4 gap-4">
        {pokemons.map((pokemon: Pokemon) => {
          if (!pokemon) return null
          const sprite = pokemon?.sprites?.front_default
          return (
            <div key={pokemon.id}>
              <div>Name: {pokemon.name}</div>
              <img src={sprite} alt={pokemon.name} />
              <Link href={`/pokemon?name=${pokemon.name}`}>Infos</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Pokemons
