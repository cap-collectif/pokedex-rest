import { useQueries, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { getPokemonByName } from './Pokemon'
import PokemonCard from '@/components/PokemonCard'
import { PokemonType } from '@/types/Pokemon'
import { useState } from 'react'
import SearchBar from '@/components/SearchBar'

export const Pokemons = () => {
  const [searchInput, setSearchInput] = useState<string>('')
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonType[]>([])

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    e.preventDefault()
    setSearchInput(value)
    if (value !== '') {
      const filteredData = pokemons.filter(pokemon => pokemon.name.includes(value))
      setFilteredPokemons(filteredData)
    } else {
      setFilteredPokemons([])
    }
  }


  if (isPending) return 'Loading'

  return (
    <div className="p-4">
      <SearchBar handleChange={handleChange} filteredPokemons={filteredPokemons} searchInput={searchInput} />
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
