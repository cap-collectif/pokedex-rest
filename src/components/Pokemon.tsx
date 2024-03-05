/* eslint-disable @next/next/no-img-element */
import { capitalizeFirstLetter } from '@/utils/stringFormat'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { PokemonSprites } from './PokemonSprites'
import { useEvolutionChain } from '@/hooks/useEvolutionChain'
import { getPokemonByName } from '@/utils/apiHandler'
import { PokemonEvolutions } from './PokemonEvolutions'
import { PokemonTypes } from './PokemonTypes'
import { PokemonStats } from './PokemonStats'

export const Pokemon = ({ pokemonName }: { pokemonName: string }) => {
  const { data: pokemon, isPending } = useQuery({
    queryKey: ['pokemon'],
    queryFn: () => getPokemonByName(pokemonName),
  })
  const { data: chain } = useEvolutionChain(pokemonName)

  if (isPending) return <p>Loading...</p>
  if (!pokemon) return <p>Error... Please try again later.</p>

  const name: string = capitalizeFirstLetter(pokemon.name)
  const height: string = `${pokemon.height / 10}m`
  const weight: string = `${pokemon.weight / 10}kg`
  const types: string[] = pokemon.types && Array.from(pokemon.types).map((pokeType: any) => pokeType?.type?.name)

  const PokemonTitle = () => (
    <div className="flex flex-col items-center">
      <h1>
        {name} <span className="text-sm">{`(n°${pokemon.id})`}</span>
      </h1>
      <PokemonSprites pokemon={pokemon} />
    </div>
  )
  const PokemonDetails = () => (
    <div className="flex flex-col items-center">
      <h2>Details</h2>
      <div className="flex gap-x-10">
        <p>Weight : {weight}</p>
        <p>Height : {height}</p>
        {types && <PokemonTypes types={types} />}
      </div>
    </div>
  )

  return (
    <div className="p-4 max-w-5xl mx-auto min-h-screen">
      <Link
        href={'/'}
        className="text-sm font-semibold text-indigo-500 hover:text-indigo-400 mb-4 flex items-center w-fit"
      >
        <span className="text-2xl mr-2">←</span>Back to the Pokédex
      </Link>
      <div className="flex flex-col items-center gap-y-10">
        <PokemonTitle />
        <PokemonDetails />
        <PokemonStats pokemon={pokemon} />
        {chain && <PokemonEvolutions name={name} chain={chain} />}
      </div>
    </div>
  )
}

export default Pokemon
