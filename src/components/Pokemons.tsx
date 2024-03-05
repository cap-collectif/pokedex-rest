/* eslint-disable @next/next/no-img-element */
import { useQueries, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Pokemon } from '../types/pokemon'
import { PokemonCard } from './PokemonCard'
import { useState } from 'react'
import { getPokemonByName } from '@/utils/apiHandler'

export const Pokemons = () => {
  const [search, setSearch] = useState('')
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
  const filteredList = pokemons.filter((pokemon: Pokemon) => pokemon?.name?.includes(search))

  if (isPending) return 'Loading'

  return (
    <div className="p-4 flex flex-col gap-y-10 max-w-5xl mx-auto">
      <h1 className="text-center">Pokédex</h1>
      <form className="flex flex-col self-center gap-4 items-center sm:flex-row">
        <label htmlFor="search" className="font-normal text-sm min-w-max">
          Search a Pokemon
        </label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Mewtwo"
          autoComplete="off"
          onChange={e => setSearch(e.target.value)}
          className="flex h-9 w-full sm:w-80 sm:max-w-80 rounded-md border border-zinc-500 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300"
        />
      </form>
      {filteredList.length === 0 && (
        <div className="flex flex-col gap-y-2 items-center">
          <p className="text-4xl">😥</p>
          <p className="font-semibold">No result found...</p>
          <p className="text-zinc-500">Try again something else!</p>
        </div>
      )}
      {filteredList.length > 0 && (
        <div className="grid grid-cols-4 gap-4">
          {filteredList.map((pokemon: Pokemon) => {
            if (!pokemon) return null
            return <PokemonCard pokemon={pokemon} key={pokemon.id} />
          })}
        </div>
      )}
    </div>
  )
}

export default Pokemons
