import Link from 'next/link'
import { capitalizeFirstLetter } from '@/utils/stringFormat'
import { Pokemon } from '@/types/pokemon'

export const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  const sprite = pokemon.sprites?.front_default

  return (
    <Link
      href={`/pokemon?name=${pokemon.name}`}
      className="rounded-lg p-4 hover:cursor-pointer bg-slate-900 hover:bg-slate-800 text-white"
    >
      <div className="flex flex-col items-center">
        <div className="font-semibold">{capitalizeFirstLetter(pokemon.name)}</div>
        <img src={sprite} alt={pokemon.name} />
        <span className="text-xs mt-2">n°{pokemon.id}</span>
      </div>
    </Link>
  )
}
